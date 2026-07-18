import "./Dashboard.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import HeaderDash from '../components/layouts/Desafios/headerDash/HeaderDash';
import { useMediaQuery } from "../hooks/useMediaQuery";
import { BiJoystick } from "react-icons/bi";
import { useState } from "react";
import HeaderSection from "../components/layouts/HeaderDashboardCollapse/HeaderDashboardCollapse";

// Assets 
const MIXTOS = [
    {
        id: 1,
        titulo: "Porcentajes",
        imageUrl: "/mixto/mixto-1.jpg",
    },
    {
        id: 2,
        titulo: "Fracciones",
        imageUrl: "/mixto/mixto-2.jpg",
    },
    {
        id: 3,
        titulo: "Geometría",
        imageUrl: "/mixto/mixto-3.jpg",
    },
    {
        id: 4,
        titulo: "Números Básicos",
        imageUrl: "/mixto/mixto-4.jpg",
    },
    {
        id: 5,
        titulo: "Estimulación Cognitiva",
        imageUrl: "/mixto/mixto-5.jpg",
    },
    {
        id: 6,
        titulo: "Inteligencia Práctica",
        imageUrl: "/mixto/mixto-6.jpg",
    },
    {
        id: 7,
        titulo: "Cálculo 1",
        imageUrl: "/mixto/mixto-7.jpg",
    },
    {
        id: 8,
        titulo: "Cálculo 2",
        imageUrl: "/mixto/mixto-7.jpg",
    },
    {
        id: 9,
        titulo: "Cálculo 3",
        imageUrl: "/mixto/mixto-7.jpg",
    },
]

const MixtoPage = () => {
    const [showHeader, setShowHeader] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <main style={{
            backgroundColor: "white",
            minHeight: "100vh",
            height: "max-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden"
        }}>
            <HeaderDash showHeader={showHeader} setShowHeader={setShowHeader} />
            <Container
                fluid
                className="d-flex align-items-start justify-content-between gap-0 flex-column text-white"
                style={{
                    position: "relative",
                    minHeight: "calc(100vh - 90px)",
                    width: '100%',
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingTop: "100px",
                    paddingBottom: "2rem",
                    marginTop: "auto",
                    overflowY: "auto",
                    overflowX: "hidden",
                }}
            >
                <div
                    style={{
                        position: "fixed",
                        width: isMobile?  "150vw" : "110vw",
                        height: isMobile?  "50vh" : "100vh",
                        left: "50%",
                        top: "50%",
                        transform: isMobile ? "translateX(-50%) translateY(10%)" : "translateX(-50%) translateY(-10%)",
                        background: "rgba(143, 216, 253, 0.4)",
                        borderRadius: "50%",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />

                <div style={{
                    display: "grid",
                    gridTemplateRows: showHeader ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    marginBottom: showHeader ? "1rem" : "0",
                    width: "100%"
                }}>
                    <div style={{
                        overflow: "hidden",
                        opacity: showHeader ? 1 : 0,
                        transform: showHeader ? "translateY(0)" : "translateY(-20px)",
                        transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}>
                        <HeaderSection />
                    </div>
                </div>

                {/* Grid de tarjetas */}
                <div style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    overflowY: "auto",
                    paddingRight: "5px"
                }}>
                    <Row
                        className="g-4"
                        style={{
                            width: "100%",
                            justifyContent: isMobile ? "center" : "flex-start",
                            backgroundImage: "url('/mixto/fondo-mixto.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: 20,
                        }}
                    >
                        {MIXTOS.map((mixto) => (
                            <Col
                                key={mixto.id}
                                xs={12} 
                                sm={12} 
                                md={6}
                                lg={4}
                                xl={4}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <CardMixto
                                    titulo={mixto.titulo}
                                    imageUrl={mixto.imageUrl}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </main>
    );
}

export default MixtoPage;

const CardMixto = ({ titulo, imageUrl }) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            color: "black",
            gap: 2,
            width: "90%",
            padding: "10px",
        }}>
            <div style={{
                width: "100%",
                height: isMobile ? "160px" : "200px",
                borderRadius: 20,
                backgroundColor: "rgba(0,0,0,.15)",
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }} />
            <h3 style={{
                margin: 0,
                fontSize: isMobile ? 18 : 20,
                fontWeight: 600,
                marginTop: "8px"
            }}>
                {titulo}
            </h3>
            <p style={{
                margin: 0,
                color: "#52C5FE",
                fontSize: isMobile ? 14 : 16,
                marginBottom: "8px"
            }}>
                +20 Monedas
            </p>
            <Button
                style={{
                    backgroundColor: "#FFDB54",
                    padding: isMobile ? "6px 14px" : "8px 16px",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isMobile ? 14 : 20,
                    border: "none",
                    boxShadow: "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D",
                    borderRadius: 20,
                    margin: 0,
                    transition: "transform 0.2s",
                    cursor: "pointer",
                    "&:hover": {
                        transform: "scale(1.05)",
                    }
                }}
            >
                <BiJoystick size={isMobile ? 16 : 24} />
                <span style={{ fontWeight: 400, marginLeft: "6px" }}>Jugar</span>
            </Button>
        </div>
    )
}