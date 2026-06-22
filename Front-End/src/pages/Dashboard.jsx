import { useNavigate } from 'react-router-dom';
import { Button, Container } from "react-bootstrap";
import { useAuth } from '../context/AuthContext';
import Background from "../Images/fondo2.png";
import HeaderDash from '../components/layouts/Desafios/headerDash/HeaderDash';
const DashboardPage = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <>
        <HeaderDash />
        <Container
            fluid
            className="d-flex align-items-center justify-content-center flex-column text-white"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}
        >
            <h1>Dashboard</h1>
            <p>Sesión iniciada como: <b><i>{user?.email}</i></b></p>
            <Button
                variant="primary"
                size="lg"
                className="py-2 rounded-pill fw-semibold"
                style={{ backgroundColor: "#31C976", borderColor: "#31C976", borderRadius: "35px" }}
                onClick={handleLogout}
            >
                Cerrar Sesión
            </Button>
        </Container>
     </>);
}

export default DashboardPage;