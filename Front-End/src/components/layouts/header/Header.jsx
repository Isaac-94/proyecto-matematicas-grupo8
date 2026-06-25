import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { FaRegUser } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleScrollToSection = (sectionId) => {
    setExpanded(false); // Cierra el menú al hacer click
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

  const handleScrollToTop = () => {
    setExpanded(false); // Cierra el menú al hacer click
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Navbar
      className="navbar-custom"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container className="d-flex justify-content-between align-items-center px-4">
        <Navbar.Brand as={Link} to="/" className="brand" onClick={() => setExpanded(false)}>
          Mate+
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="align-items-center justify-content-center">
          <Nav className="d-flex align-items-center gap-1 gap-lg-5 py-2 py-lg-0">
            <Nav.Link onClick={handleScrollToTop}>
              Inicio
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection('como-funciona')}>
              Cómo Funciona
            </Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection('nosotros')}>
              Nosotros
            </Nav.Link>

            <Nav.Link
              to="/login"
              className="d-flex d-lg-none gap-2 align-items-center button"
              onClick={() => setExpanded(false)}
            >
              <FaRegUser />
              Iniciar Sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav.Link
          as={Link}
          to="/login"
          className="d-none d-lg-flex gap-2 align-items-center button"
          onClick={() => setExpanded(false)}
        >
          <FaRegUser />
          Iniciar Sesión
        </Nav.Link>
      </Container>
    </Navbar>
  );
}