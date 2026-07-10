import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import HaderDesafio from '../components/layouts/Desafios/headerDesafio/HeaderDesafio';
import HeaderDesafio from '../components/layouts/Desafios/headerDesafio/HeaderDesafio';
const ProfilePage = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (<> 
        <div>
        
            <h1>Perfil de Usuario</h1>
            <p>Usuario actual: {user?.name}</p>
            <p>Correo: {user?.email}</p>
            <button type="button" onClick={handleLogout}>Cerrar sesión</button>
        </div>
    </>);
}

export default ProfilePage;