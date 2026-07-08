import { createContext, useContext, useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { supabase } from '../config/supabaseClient';
import api from '../config/api';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [initialized, setInitialized] = useState(false); // Nuevo estado
    const lastFetchedId = useRef(null);
    const isFetching = useRef(false);



    const logout = async () => {
        try {
            setLoading(true);
            await supabase.auth.signOut();
        } catch (err) {
            console.warn("⚠️ Error al cerrar sesión en Supabase, limpiando estado local.", err);
        } finally {
            setSession(null);
            setProfile(null);
            lastFetchedId.current = null;
            setLoading(false);
        }
    };

    const fetchProfile = useCallback(async (user) => {
        console.log(`🔄 fetchProfile called for user: ${user.id}, isFetching: ${isFetching.current}, currentProfile: ${profile?.id}`);
        if (isFetching.current) return;
        isFetching.current = true;
        try {
            const { data } = await api.post('/usuarios/registro', {
                uid: user.id,
                email: user.email,
                nombre: user.user_metadata?.full_name || user.email.split('@')[0]
            });
            setProfile(data || null);
        } catch (error) {
            console.error('🔴 Error de sincronización con Back-End:', error.message);

            // Si el Back-End nos tira 401, la sesión de Supabase que tenemos es basura.
            // Forzamos el cierre de sesión para que el usuario pueda volver al login.
            if (error.response?.status === 401) {
                console.warn("⚠️ Sesión inválida detectada. Limpiando...", error);
                logout();
            }

            // Si es un error de red, permitimos re-intento en el próximo evento
            if (error.code === 'ERR_NETWORK' || error.code === 'ECONNABORTED' || !error.response) {
                lastFetchedId.current = null;
            }
            setProfile(null);
        } finally {
            isFetching.current = false;
        }
    }, [profile?.id]);

    // Función para marcar la inicialización como completa
    const completeInitialization = useCallback(() => {
        if (!initialized) {
            setInitialized(true);
            setLoading(false);
        }
    }, [initialized]);




























































    useEffect(() => {
        let isMounted = true;
        let timeoutId = null;

        // Failsafe: Si en 3 segundos no hay respuesta, forzamos la carga
        timeoutId = setTimeout(() => {
            if (isMounted && !initialized) {
                console.warn("⚠️ Timeout de inicialización - forzando carga de la aplicación");
                completeInitialization();
            }
        }, 3000);

        // Primero, intentamos obtener la sesión actual de manera síncrona
        const initializeAuth = async () => {
            try {
                // Verificar si ya hay una sesión activa
                const { data: { session: currentSession }, error } = await supabase.auth.getSession();

                if (error) {
                    console.warn("⚠️ Error al obtener sesión:", error);
                }

                if (currentSession?.user) {
                    console.log("✅ Sesión existente encontrada");
                    setSession(currentSession);
                    lastFetchedId.current = currentSession.user.id;

                    // Cargar el perfil en segundo plano
                    await fetchProfile(currentSession.user);
                } else {
                    console.log("ℹ️ No hay sesión activa");
                    setSession(null);
                    setProfile(null);
                }
            } catch (error) {
                console.error("🔴 Error en inicialización:", error);
            } finally {
                // Marcar como inicializado solo si el componente sigue montado
                if (isMounted) {
                    completeInitialization();
                }
            }
        };

        // Ejecutar inicialización
        initializeAuth();

        // Suscribirse a cambios de autenticación
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
            console.log(`🔐 AuthEvent: ${_event}`);

            if (!isMounted) return;

            setSession(newSession || null);

            if (newSession?.user) {
                if (lastFetchedId.current !== newSession.user.id || (_event === 'SIGNED_IN' && !profile)) {
                    lastFetchedId.current = newSession.user.id;
                    fetchProfile(newSession.user);
                }
            } else {
                setProfile(null);
                lastFetchedId.current = null;
            }

            // Si aún no está inicializado, marcarlo
            if (!initialized) {
                completeInitialization();
            }
        });

        // Cleanup
        return () => {
            isMounted = false;
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            subscription.unsubscribe();
        };
    }, [fetchProfile, completeInitialization, initialized, profile]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const login = async (email, password) => {
        try {
            setLoading(true); // Mostrar loading durante el login
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) {
                if (error.status === 400) throw error;
                throw new Error("SUPABASE_UNAVAILABLE");
            }
            // No bloqueamos el login esperando al perfil, lo tiramos en paralelo
            if (data.user) fetchProfile(data.user);
            setLoading(false);
            return data;
        } catch (err) {
            setLoading(false);
            // Solo caemos en el mock si Supabase realmente no está o da error de conexión
            const isMockMode = !import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL.includes('[TU_PROYECTO]');

            if (isMockMode || err.message === "SUPABASE_UNAVAILABLE" || err.message === "SUPABASE_UNAVAILABLE_MOCK") {
                console.warn("⚠️ Usando autenticación de respaldo (Back-End Mock)");
                const response = await api.post('/usuarios/login', {
                    email,
                    password
                });
                if (response.data) {
                    const mockSession = {
                        user: { email, id: response.data.user?.id || 'local-auth' },
                        access_token: response.data.user?.token || 'local-mock-token'
                    };
                    if (supabase.auth._updateMockSession) supabase.auth._updateMockSession(mockSession);
                    setSession(mockSession);
                }
                return response.data;
            }
            throw err;
        }
    };


    const register = async (email, password, nombre, extraData = {}) => {
        try {
            setLoading(true);
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: { data: { full_name: nombre, ...extraData } }
            });
            if (error) throw error;
            setLoading(false);
            return data;
        } catch (err) {
            setLoading(false);
            if (err.message === "SUPABASE_UNAVAILABLE_MOCK" || err.status === 400) {
                console.warn("⚠️ Supabase no disponible. Entrando en modo de autenticación local (Mock)");
                const response = await api.post('/usuarios/registro', {
                    uid: 'mock-' + Date.now(),
                    email,
                    password,
                    nombre,
                    ...extraData
                });
                if (response.data) {
                    const mockSession = { user: { email, id: 'local-auth' }, access_token: 'local-mock-token' };
                    setSession(mockSession);
                }
                return response.data;
            }
            throw err;
        }
    };

    const value = useMemo(
        () => ({
            user: session?.user ?? null,
            profile,
            token: session?.access_token ?? null,
            isAuthenticated: !!session,
            login,
            register,
            logout,


            loading,
            initialized,
            refreshProfile: () => session?.user && fetchProfile(session.user)
        }),
        [session, profile, login, loading, initialized, fetchProfile]
    );

    // Solo mostrar el spinner si loading es true Y no está inicializado
    {/*if (loading && !initialized) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#1a1a1a',
                color: '#00ff00'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <h3>InnovaLab</h3>
                    <p>Cargando módulos de seguridad...</p>
                    <div style={{ marginTop: '20px' }}>
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }*/}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth debe usarse dentro de AuthProvider');
    }

    return context;
};