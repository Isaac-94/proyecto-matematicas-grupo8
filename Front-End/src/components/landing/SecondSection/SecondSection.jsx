import step1Image from '../../../Images/landing/steps/step-1.jpg';
import step2Image from '../../../Images/landing/steps/step-2.png';
import step3Image from '../../../Images/landing/steps/step-3.jpg';
import '../FirstSection/FirstSection.css';

import { Container, Stack, Row, Col } from 'react-bootstrap';

const steps = [
    {
        id: 1,
        title: "Práctico y fácil de entender",
        subtitle: "Aprendé con ejemplos reales como compras, descuentos, precios y cuentas del día a día.",
        src: step1Image
    },
    {
        id: 2,
        title: "Explicado paso a paso",
        subtitle: "Lecciones claras y simples para ganar confianza resolviendo problemas cotidianos.",
        src: step2Image
    },
    {
        id: 3,
        title: "Pensado para adultos",
        subtitle: "Una experiencia accesible y enfocada en aprender desde situaciones reales. Sin apuros ni presión. ¡A tu ritmo!",
        src: step3Image
    }
];

const SecondSection = () => {
    return (
        <Container fluid className="p-5" style={{ backgroundColor: '#2C3D4D' }} id="como-funciona">
            <Stack>
                {steps.map((step, index) => (
                    <Row key={step.id} className={`py-4 align-items-center justify-content-around gap-2 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`} style={{ marginBottom: '3rem' }}>
                        <Col lg={7} className="text-center text-lg-start text-white">
                            <h3 className="text-uppercase fw-bold mb-3" style={{ fontSize: 60 }}>{step.title}</h3>
                            <p className="lead text-white" style={{ fontSize: 30 }}>{step.subtitle}</p>
                        </Col>
                        <Col lg={4} className="text-center">
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center mx-auto shadow-lg"
                                style={{
                                    width: 300,
                                    height: 300,
                                    border: `10px solid #31C976`
                                }}
                            >
                                <img
                                    src={step.src}
                                    alt={step.title}
                                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                                />
                            </div>
                        </Col>
                    </Row>
                ))}
            </Stack>
        </Container>
    );
};

export default SecondSection;
