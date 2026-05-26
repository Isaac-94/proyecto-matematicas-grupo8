import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Sesión iniciada como: {user?.email}</p>
            <button type="button" onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
}

export default DashboardPage;