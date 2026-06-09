import { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    Tab,
    Nav
} from 'react-bootstrap';
import { teamData } from '../../../data/TeamData';

const ThirdSection = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    return (
        <Container fluid className="py-5" id="nosotros">
            <Row className="justify-content-center mb-5">
                <Col md={8} className="text-center">
                    <h2 className="display-4 fw-bold mb-3" style={{ color: '#2D3E4E' }}>
                        Proyecto presentado por Equipo 8 Innova Lab
                    </h2>
                </Col>
            </Row>

            <Container>
                <Row className="justify-content-center d-flex">
                    {teamData.map((dpto) => (
                        <Col key={dpto.title} md={6} lg={4} className="mb-4 d-flex align-items-center justify-content-center flex-column">
                            <Card style={{ borderColor: "#31C976", borderWidth: '10px', marginBottom: '1rem', height: 300, width: "75%",  }} className="shadow-lg">
                                <Card.Img variant="top" src={dpto.src} style={{ height: '100%', objectFit: 'cover', margin: "0 auto" }} />
                            </Card>
                            <h5 className="text-center mt-2" style={{ fontSize: "2rem", color: "#2D3E4E" }}>{dpto.title}</h5>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default ThirdSection;