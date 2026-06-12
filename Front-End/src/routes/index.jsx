import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Register from '../pages/Register';

import Landing from '../pages/Landing.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/Login';
import ConsolaAdmin from '../pages/ConsolaAdmin';
import { useAuth } from '../context/AuthContext';
import StartedPage from '../pages/Started.jsx';
import Onboarding from '../pages/Onboarding';

// Componente para proteger rutas autenticadas
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    return isAuthenticated
        ? children
        : <Navigate to="/login" replace state={{ from: location.pathname }} />;
};

// Componente para redireccionar si ya está autenticado
const PublicRoute = ({ children, forceRedirect = true }) => {
    const { isAuthenticated, profile } = useAuth();

    // Solo redireccionamos si hay sesión Y perfil cargado.
    // Si hay sesión pero no perfil (error de red), dejamos que vea la página pública.
    return (isAuthenticated && profile && forceRedirect) ? <Navigate to="/onboarding" /> : children;
};

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                {/* Rutas públicas */}
                <Route
                    path="/"
                    element={
                        <PublicRoute forceRedirect={false}>
                            <Landing />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/started"
                    element={
                        <PublicRoute>
                            <StartedPage />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                {/* Rutas autenticadas */}

                <Route
                    path="/onboarding"
                    element={
                        <ProtectedRoute>
                            <Onboarding />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin-be"
                    element={
                        <ProtectedRoute>
                            <ConsolaAdmin />
                        </ProtectedRoute>
                    }
                />

                {/* Ruta 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
