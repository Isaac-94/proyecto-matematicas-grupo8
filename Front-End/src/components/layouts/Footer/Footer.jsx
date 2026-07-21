import { Row, Col, Nav } from 'react-bootstrap';
import './Footer.css';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

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
        <footer className="footer-wrapper" role="contentinfo">
            <div className="footer">
                <Row className="justify-content-between w-100">
                    {/* Columna 1 - Logo y descripción */}
                    <Col xs={12} sm={12} md={12} lg={4} className="mb-4 mb-lg-0">
                        <div className="footer-section d-flex align-items-center align-items-lg-start flex-column gap-3">
                            <p className="footer-brand m-0">Logo</p>
                            <p className="footer-location w-75 text-center text-lg-start">
                                Nuestra visión es hacerte el aprendizaje más fácil y ayudarte a dominar las matemáticas que necesitás para potenciar tu día a día.
                            </p>
                            <div className="footer-social-icons justify-content-start">
                                <FaFacebook
                                    size={24}
                                    className="footer-social-link"
                                    aria-label="Facebook"
                                />
                                <FaLinkedin
                                    size={24}
                                    className="footer-social-link"
                                    aria-label="LinkedIn"
                                />
                                <FaGithub
                                    size={24}
                                    className="footer-social-link"
                                    aria-label="GitHub"
                                />
                            </div>
                        </div>
                    </Col>

                    {/* Columna 2 - Acerca */}
                    <Col xs={4} sm={4} md={4} lg={2}>
                        <Nav className="footer-section d-flex align-items-center flex-column gap-2">
                            <p className="footer-social-title m-0">Acerca</p>
                            <Nav.Link onClick={() => handleScrollToSection("about")} href="#" className="footer-link" style={{ textWrap: "no-wrap" }}>¿Qué es MATE+?</Nav.Link>
                            <Nav.Link onClick={() => handleScrollToSection("about")} href="#" className="footer-link" style={{ textWrap: "no-wrap" }}>Sobre nosotros</Nav.Link>
                        </Nav>
                    </Col>

                    {/* Columna 3 - Comunidad */}
                    <Col xs={4} sm={4} md={4} lg={2}>
                        <div className="footer-section d-flex align-items-center flex-column gap-2">
                            <p className="footer-social-title m-0">Comunidad</p>
                            <a href="#" className="footer-link">Foro</a>
                            <a href="#" className="footer-link">Blog</a>
                        </div>
                    </Col>

                    {/* Columna 4 - Redes */}
                    <Col xs={4} sm={4} md={4} lg={2}>
                        <div className="footer-section d-flex flex-column align-items-center align-items-lg-end gap-2">
                            <p className="footer-social-title m-0">Redes</p>
                            <a href="#" className="footer-link">LinkedIn</a>
                            <a href="#" className="footer-link">Equipo 8</a>
                        </div>
                    </Col>
                </Row>

                {/* Línea divisoria */}
                <div className="w-100 my-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.15)' }} />

                {/* Footer inferior */}
                <Row className="w-100 align-items-center">
                    <Col xs={12} md={6} className="text-center text-md-start">
                        <p className="footer-copyright">
                            © {currentYear} Mate+. Todos los derechos reservados.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end gap-4 gap-md-5 mt-2 mt-md-0">
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); navigate('/TermsOfService', { state: { tab: 'privacidad' } }); }}
                            className="footer-copyright"
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        >
                            Política de Privacidad
                        </a>
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); navigate('/TermsOfService', { state: { tab: 'terminos' } }); }}
                            className="footer-copyright"
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        >
                            Términos y Condiciones
                        </a>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;