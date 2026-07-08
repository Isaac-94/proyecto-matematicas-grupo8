// pages/auth/Callback.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';
import { Container, Spinner, Alert } from 'react-bootstrap';

const AuthCallback = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [, setProcessing] = useState(true);

    useEffect(() => {
        const handleCallback = async () => {
            try {
                console.log("🔄 Procesando callback de autenticación...");

                // Obtener la sesión después del callback
                const { data: { session }, error: sessionError } = await supabase.auth.getSession();

                if (sessionError) {
                    console.error("🔴 Error obteniendo sesión:", sessionError);
                    setError("Error al obtener la sesión");
                    setProcessing(false);
                    return;
                }

                if (session?.user) {
                    console.log("✅ Usuario autenticado:", session.user.email);

                    // El perfil se cargará automáticamente por el AuthProvider
                    // pero podemos forzar una actualización si es necesario

                    // Redirigir al onboarding o dashboard
                    setTimeout(() => {
                        navigate('/onboarding', { replace: true });
                    }, 1000);
                } else {
                    console.warn("⚠️ No se encontró sesión después del callback");
                    setError("No se pudo completar la autenticación");
                    setProcessing(false);

                    setTimeout(() => {
                        navigate('/login', { replace: true });
                    }, 2000);
                }
            } catch (error) {
                console.error("🔴 Error en callback:", error);
                setError(error.message || "Error al procesar la autenticación");
                setProcessing(false);

                setTimeout(() => {
                    navigate('/login', { replace: true });
                }, 3000);
            }
        };

        handleCallback();
    }, [navigate]);

    if (error) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="text-center">
                    <Alert variant="danger">
                        <Alert.Heading>Error de autenticación</Alert.Heading>
                        <p>{error}</p>
                        <p className="text-muted small">Redirigiendo al login...</p>
                    </Alert>
                </div>
            </Container>
        );
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="text-center">
                <Spinner animation="border" variant="primary" size="lg" />
                <h4 className="mt-4">Procesando autenticación con Google</h4>
                <p className="text-muted">Por favor espera...</p>
            </div>
        </Container>
    );
};

export default AuthCallback;