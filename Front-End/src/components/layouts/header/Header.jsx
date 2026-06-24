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
      <Container style={{ padding: "0 30px" }} className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="brand" onClick={() => setExpanded(false)}>
          Mate+
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="align-items-center justify-content-center">
          <Nav className="d-flex align-items-center" style={{ gap: "30px" }}>
            <Nav.Link style={{ fontWeight: 400, fontSize: 20, color: "#000000B2" }} onClick={handleScrollToTop}>
              Inicio
            </Nav.Link>
            <Nav.Link style={{ fontWeight: 400, fontSize: 20, color: "#000000B2" }} onClick={() => handleScrollToSection('como-funciona')}>
              Cómo Funciona
            </Nav.Link>
            <Nav.Link style={{ fontWeight: 400, fontSize: 20, color: "#000000B2" }} onClick={() => handleScrollToSection('nosotros')}>
              Nosotros
            </Nav.Link>

            <Nav.Link
              to="/login"
              className="d-flex d-lg-none gap-2 align-items-center"
              style={{
                backgroundColor: "#FFDB54",
                borderColor: "#FFDB54",
                borderRadius: "35px",
                fontSize: 18,
                color: "black",
                padding: "10px 24px"
              }}
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
          className="d-none d-lg-flex gap-2 align-items-center"
          style={{
            backgroundColor: "#FFDB54",
            borderColor: "#FFDB54",
            borderRadius: "35px",
            fontSize: 18,
            color: "black",
            padding: "10px 24px"
          }}
          onClick={() => setExpanded(false)}
        >
          <FaRegUser />
          Iniciar Sesión
        </Nav.Link>
      </Container>
    </Navbar>
  );
}