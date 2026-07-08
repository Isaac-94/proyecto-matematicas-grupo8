import { createContext, useContext, useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { supabase } from '../config/supabaseClient';
import api from '../config/api';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [initialized, setInitialized] = useState(false);
    const lastFetchedId = useRef(null);
    const isFetching = useRef(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

            if (error.response?.status === 401) {
                console.warn("⚠️ Sesión inválida detectada. Limpiando...", error);
                logout();
            }

            if (error.code === 'ERR_NETWORK' || error.code === 'ECONNABORTED' || !error.response) {
                lastFetchedId.current = null;
            }
            setProfile(null);
        } finally {
            isFetching.current = false;
        }
    }, [profile?.id]);

    const completeInitialization = useCallback(() => {
        if (!initialized) {
            setInitialized(true);
            setLoading(false);
        }
    }, [initialized]);

    // 🆕 NUEVO: Login con Google
    const loginWithGoogle = useCallback(async (redirectUrl) => {
        setGoogleLoading(true);
        try {
            // Verificar si Supabase está configurado
            const isMockMode = !import.meta.env.VITE_SUPABASE_URL || 
                              import.meta.env.VITE_SUPABASE_URL.includes('[TU_PROYECTO]');

            if (isMockMode) {
                console.warn("⚠️ Modo mock: Simulando login con Google");
                // Simular login con Google para desarrollo
                const mockUser = {
                    id: 'google-mock-' + Date.now(),
                    email: 'usuario.mock@gmail.com',
                    user_metadata: {
                        full_name: 'Usuario Google Mock',
                        avatar_url: 'https://ui-avatars.com/api/?name=Usuario+Google'
                    }
                };
                
                const mockSession = {
                    user: mockUser,
                    access_token: 'google-mock-token-' + Date.now()
                };
                
                setSession(mockSession);
                await fetchProfile(mockUser);
                
                // Redirigir después del mock
                if (redirectUrl) {
                    window.location.href = redirectUrl;
                }
                return mockSession;
            }

            // Login real con Google
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: redirectUrl || `${window.location.origin}/auth/callback`,
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                },
            });

            if (error) throw error;
            
            console.log("✅ Redirigiendo a Google para autenticación...");
            return data;
            
        } catch (error) {
            console.error("🔴 Error en login con Google:", error);
            setGoogleLoading(false);
            throw error;
        }
    }, [fetchProfile]);

    useEffect(() => {
        let isMounted = true;
        let timeoutId = null;

        timeoutId = setTimeout(() => {
            if (isMounted && !initialized) {
                console.warn("⚠️ Timeout de inicialización - forzando carga de la aplicación");
                completeInitialization();
            }
        }, 3000);

        const initializeAuth = async () => {
            try {
                const { data: { session: currentSession }, error } = await supabase.auth.getSession();

                if (error) {
                    console.warn("⚠️ Error al obtener sesión:", error);
                }

                if (currentSession?.user) {
                    console.log("✅ Sesión existente encontrada");
                    setSession(currentSession);
                    lastFetchedId.current = currentSession.user.id;
                    await fetchProfile(currentSession.user);
                } else {
                    console.log("ℹ️ No hay sesión activa");
                    setSession(null);
                    setProfile(null);
                }
            } catch (error) {
                console.error("🔴 Error en inicialización:", error);
            } finally {
                if (isMounted) {
                    completeInitialization();
                }
            }
        };

        initializeAuth();

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

            if (!initialized) {
                completeInitialization();
            }
        });

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
            setLoading(true);
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) {
                if (error.status === 400) throw error;
                throw new Error("SUPABASE_UNAVAILABLE");
            }
            if (data.user) fetchProfile(data.user);
            setLoading(false);
            return data;
        } catch (err) {
            setLoading(false);
            const isMockMode = !import.meta.env.VITE_SUPABASE_URL || 
                              import.meta.env.VITE_SUPABASE_URL.includes('[TU_PROYECTO]');

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            loginWithGoogle, // 🆕 Exportamos la nueva función
            googleLoading, // 🆕 Estado de carga para Google
            loading,
            initialized,
            refreshProfile: () => session?.user && fetchProfile(session.user)
        }),
        [session, profile, login, register, logout, loginWithGoogle, googleLoading, loading, initialized, fetchProfile]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de AuthProvider');
    }
    return context;
};