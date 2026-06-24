import {
    Row,
    Col,
    Card,
    Button,
} from 'react-bootstrap';
import './FirstSection.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';

import BackgroundImage from '../../../assets/background.png';

import ShapeSvg from '../Components/Shape';
import ShapeSvg1 from '../Components/Shape1';
import ShapeSvg2 from '../Components/Shape2';
import ShapeImage from '../Components/Image';
import { useState } from 'react';

const FirstSection = ({ navigate }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Row className="vh-100 g-0" id="inicio" style={{ backgroundColor: "#F0F1EB", backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Columna lateral izquierda - Decorativa */}
            <Col lg={6} className="d-flex align-items-center justify-content-center position-relative">
                <ShapeSvg />
                <ShapeSvg1 />
                <ShapeSvg2 />
                <ShapeImage />
            </Col>

            {/* Columna derecha - Formulario */}
            <Col lg={6} className="d-flex align-items-center justify-content-center" style={{ zIndex: 100 }}>
                <Card className="border-0 bg-transparent shadow-none" style={{ width: '100%' }}>
                    <Card.Body className="p-5 d-flex align-items-center text-center text-lg-start align-items-lg-start flex-column gap-4">
                        <h1 className="d-flex justify-content-center align-items-center" style={{ color: '#000000', fontWeight: 800, fontSize: 64, }}>
                            APRENDÉ MATE DE FORMA DIVERTIDA
                        </h1>

                        <p style={{ fontWeight: 400, fontSize: 24 }}>
                            Dominá las herramientas matemáticas que realmente necesitás para tu día a día. Sin estrés, vos elegís cuándo y cómo avanzar.
                        </p>

                        <Button
                            variant="primary"
                            size="lg"
                            className="rounded-pill d-flex align-items-center justify-content-center gap-4"
                            style={{
                                backgroundColor: "#FFDB54",
                                borderColor: "#FFDB54",
                                borderRadius: "35px",
                                fontSize: 24,
                                color: "black",
                                padding: "10px 40px",
                                fontWeight: 500
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => navigate('/started')}
                        >
                            <motion.div
                                animate={{ rotate: isHovered ? 360 : 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <FaArrowRightLong style={{ color: "black" }} />
                            </motion.div>
                            Comenzar
                        </Button>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
};

export default FirstSection;