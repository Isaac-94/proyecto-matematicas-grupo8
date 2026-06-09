import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';

export default function Header() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';

  const cerrarSesion = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  const handleScrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container style={{ padding: "0 30px"}}>
        <Navbar.Brand as={Link} to="/" className="brand">
          Mate+
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Inicio
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection('como-funciona')}>
              Cómo Funciona
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection('nosotros')}>
              Nosotros
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}