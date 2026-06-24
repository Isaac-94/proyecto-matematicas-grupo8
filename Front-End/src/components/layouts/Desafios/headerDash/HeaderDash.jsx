import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import "./headerDash.css";

export default function HeaderDash() {
  return (
    <>
      <Navbar className="navbar-custom" expand="lg">
        <Container style={{ padding: "0 30px" }}>
          <Navbar.Brand as={Link} to="/" className="brand">
            Mate+
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <div className="buscar-box">
              <FaSearch className="buscar-icon" />
              <input
                className="form-control"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
            </div>
            <Nav className="ms-auto">
              <Nav.Link>INICIO</Nav.Link>
              <Nav.Link>TEORIA</Nav.Link>
              <Nav.Link>REPASO</Nav.Link>
              <Nav.Link as={Link} to="/profile">
                <FaUserCircle size={22} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
