import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="ms-4">
          <Row>
            <Col className='text-center'>
              <h5>MATE+</h5>
            </Col>
          </Row>

          <Row>
            <Col className='text-center'>
              <h5>Buenos Aires, Argentina</h5>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col className='text-center pt-3'>
              <a href="/Landing">HOME</a>
            </Col>
          </Row>
          <Row>
            <Col className='text-center pt-3'>
              <a href="/Landing">SOBRE NOSOTROS</a>
            </Col>
          </Row>
          <Row>
            <Col className='text-center pt-3'>
              <a href="/Landing">PREGUNTAS FRECUENTES</a>
            </Col>
          </Row>
          <Row>
            <Col className='text-center pt-3'>
              <a href="/Landing">CONTÁCTANOS</a>
            </Col>
          </Row>

        </div>
        <div className="me-4">
          <Row>
            <Col className='text-center'>
              <a href="/Landing">NUESTRAS REDES</a>
            </Col>
          </Row>
          <Row>
            <Col className='text-center'>
              <a href="#" className="text-white me-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-white me-3">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Footer;
