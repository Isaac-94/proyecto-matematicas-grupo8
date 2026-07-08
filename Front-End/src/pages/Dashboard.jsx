import "./Dashboard.css";
import { Button, Container, Modal } from "react-bootstrap";
import HeaderDash from '../components/layouts/Desafios/headerDash/HeaderDash';
import { LuBookText } from "react-icons/lu";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from 'framer-motion';
import { IoPlayCircleOutline } from "react-icons/io5";

// Assets 

const DashboardPage = () => {
    return (
        <main style={{ backgroundColor: "#A3DFFD", minHeight: "100vh" }}>
            <HeaderDash />
            <Container
                fluid
                className="d-flex align-items-start justify-content-start flex-column text-white"
                style={{
                    minHeight: '100vh',
                    width: '100%',
                    paddingTop: "90px",
                    position: 'relative'
                }}
            >
                {/* <HeaderSection /> */}
                <ButtonFloat />
                <CursoSection />
                <Footer />
            </Container>
        </main>
    );
}

// const HeaderSection = () => {
//     const KPIs = [
//         { title: "Racha", value: 1, icon: "kpis/streak.png" },
//         { title: "Monedas", value: 0, icon: "kpis/coin.png" },
//         { title: "Trofeos", value: 0, icon: "kpis/cup.png" },
//         { title: "Experiencia", value: 0, icon: "kpis/experience.png" },
//     ];

//     return (
//         <div style={{ width: "100%", padding: ".5rem 5rem", gap: ".5rem" }} className="d-flex flex-column align-items-start justify-content-start">
//             <h4 className="text-black" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>Números Básicos</h4>

//             <div className="d-flex align-items-center justify-content-start gap-2" style={{ width: "100%", height: "100px" }}>
//                 <div className="d-flex align-items-center justify-content-start gap-2" style={{ flex: 1 }}>
//                     <div className="d-flex flex-column align-items-center justify-content-between" style={{ width: "200px", height: "110px", backgroundColor: "white", borderRadius: "10px", padding: "12px", flex: 1 }}>
//                         <div className="icon" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", width: "100%" }}>
//                             <img src={"/kpis/star.png"} alt={"Progreso"} style={{ width: "50px", height: "50px" }} />
//                             <div style={{ height: "100%", width: 4, backgroundColor: "#FFDB54", borderRadius: "2px" }} />
//                             <div style={{ height: "8px", borderRadius: "20px", backgroundColor: "#8FD8FD", flex: 1 }} />
//                         </div>
//                         <span className="text-black" style={{ fontSize: 16, fontWeight: 400 }}>Progreso 0%</span>
//                     </div>
//                     <div className="d-flex align-items-center justify-content-between gap-2" style={{ flex: 1 }}>
//                         {
//                             KPIs.map((kpi, index) => (
//                                 <CardKPI key={index} title={kpi.title} value={kpi.value} icon={kpi.icon} />
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const CardKPI = ({ title, value, icon }) => {
//     return (
//         <div className="d-flex flex-column align-items-center justify-content-between" style={{ minWidth: "150px", height: "110px", backgroundColor: "white", borderRadius: "10px", padding: "12px", flex: 1 }}>
//             <div className="icon" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", width: "100%" }}>
//                 <img src={icon} alt={title} style={{ width: "50px", height: "50px" }} />
//                 <div className="text">
//                     <p className="text-black" style={{ fontSize: "40px", margin: 0 }}>{value}</p>
//                 </div>
//             </div>
//             <span className="text-black" style={{ fontSize: 16, fontWeight: 400 }}>{title}</span>
//         </div>
//     )
// }

const ButtonFloat = () => {
    return (
        <Button className="btn btn-primary" style={{ height: '60px', backgroundColor: '#FFDB54', border: 'none', top: "10rem", left: 0, padding: "0 1.5rem", position: 'absolute', boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderTopLeftRadius: '0', borderBottomLeftRadius: '0', opacity: "75%", zIndex: 100 }}>
            <LuBookText color="black" size={30} />
        </Button>
    )
}

const CursoSection = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [, setScrollDirection] = useState(0);
    const isTransitioning = useRef(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const lecciones = [
        { id: 1, titulo: "LECCIÓN 1" },
        { id: 2, titulo: "LECCIÓN 2" },
        { id: 3, titulo: "LECCIÓN 3" },
        { id: 4, titulo: "LECCIÓN 1" },
        { id: 5, titulo: "LECCIÓN 2" },
        { id: 6, titulo: "LECCIÓN 3" },
    ];

    // Función para cambiar de lección
    const changeLesson = useCallback((direction) => {
        if (isTransitioning.current) return;
        
        const nextIdx = currentIndex + direction;
        
        if (nextIdx >= 0 && nextIdx < lecciones.length) {
            isTransitioning.current = true;
            setScrollDirection(direction);
            setCurrentIndex(nextIdx);
            
            setTimeout(() => {
                setScrollDirection(0);
                isTransitioning.current = false;
            }, 500);
        }
    }, [currentIndex, lecciones.length]);

    // Manejo de scroll con rueda del mouse
    useEffect(() => {
        const handleWheel = (e) => {
            const direction = e.deltaY > 0 ? 1 : -1;
            changeLesson(direction);
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [changeLesson]);

    // Manejo de teclas de flecha
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Solo si el modal NO está abierto
            if (show) return;
            
            if (e.key === 'ArrowDown') {
                e.preventDefault(); // Prevenir scroll de la página
                changeLesson(1);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault(); // Prevenir scroll de la página
                changeLesson(-1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, lecciones.length, show]);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                className="modal-custom"
                centered
            >
                <Modal.Header style={{ display: "flex !important", justifyContent: "center !important" }} className="d-flex justify-content-around" closeButton={false}>
                    <Modal.Title>
                        <img src="/mascot.png" alt="Mascot" style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "0 auto" }} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center" style={{ margin: "0 2rem", backgroundColor: "white", borderRadius: "20px", padding: "1rem", fontWeight: "bold", fontSize: "18px" }}>
                    ¿Quéres ver un video explicativo antes de arrancar? Esto te ayudará a entender mejor el desafio
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around" style={{ border: "none" }}>
                    <Button
                        onClick={handleClose}
                        style={{
                            borderRadius: "20px",
                            backgroundColor: "#FFDB54",
                            border: "1px solid #FFDB54",
                            color: "black",
                            fontWeight: "semibold",
                            fontSize: "18px",
                            padding: "0.5rem 1.5rem"
                        }}
                    >
                        No, continuar
                    </Button>
                    <Button
                        onClick={handleClose}
                        style={{
                            borderRadius: "20px",
                            backgroundColor: "#FFDB54",
                            border: "1px solid #FFDB54",
                            color: "black",
                            fontWeight: "semibold",
                            fontSize: "18px",
                            padding: "0.5rem 1.5rem"
                        }}
                    >
                        Sí, ver video
                    </Button>
                </Modal.Footer>
            </Modal>
            <div
                ref={containerRef}
                style={{
                    width: "100%",
                    height: "calc(100vh - 150px)",
                    position: "relative",
                    borderRadius: "20px",
                    backgroundColor: "white",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center"
                }}
            >
                <div style={{
                    position: "absolute",
                    bottom: "-50%",
                    right: "0%",
                    left: "0%",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#28a745",
                    borderRadius: "50%"
                }} />

                <motion.div
                    style={{
                        position: "absolute",
                        top: "2rem",
                        left: "4rem",
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.h2
                        className="text-black"
                        style={{ fontWeight: 900, fontSize: "4rem" }}
                    >
                        Números Básicos
                    </motion.h2>
                </motion.div>

                <div style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    position: "relative",
                    width: "75%",
                    height: "100%"
                }}>
                    {lecciones.map((leccion, index) => {
                        const isActive = index === currentIndex;

                        // Calcular posición relativa (distancia desde el índice activo)
                        const distance = index - currentIndex;

                        // Valores de animación basados en la distancia
                        let opacity = 0;
                        let yOffset = 0;
                        let zIndex = 0;
                        let scale = 1;

                        if (distance === 0) {
                            opacity = 1;
                            yOffset = 0;
                            zIndex = 10;
                            scale = 1;
                        } else if (distance === 1) {
                            opacity = 0.5;
                            yOffset = -150;
                            zIndex = 5;
                            scale = 0.9;
                        } else if (distance === 2) {
                            opacity = 0.15;
                            yOffset = -250;
                            zIndex = 3;
                            scale = 0.8;
                        }

                        return (
                            <motion.div
                                key={leccion.id}
                                className="d-flex align-items-center justify-content-center"
                                style={{
                                    position: "absolute",
                                    width: "80%",
                                    height: "50%",
                                    margin: "0 auto",
                                    borderTopLeftRadius: "80px",
                                    borderTopRightRadius: "80px",
                                    backgroundImage: isActive ? "url('/bg-selected.jpg')" : "none",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    boxShadow: isActive ? "0px -3px 4.4px 0px #FFFFFF4F" : "none",
                                    cursor: "pointer",
                                    backgroundColor: isActive ? "rgba(0,0,0,0.2)" : "#FFE16F",
                                    zIndex: zIndex,
                                }}
                                initial={false}
                                animate={{
                                    opacity: opacity,
                                    y: yOffset,
                                    scale: scale,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                onClick={() => {
                                    if (!isTransitioning.current) {
                                        setCurrentIndex(index);
                                    }
                                }}
                            >
                                <div style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    borderTopLeftRadius: "80px",
                                    borderTopRightRadius: "80px",
                                    padding: "10%",
                                    gap: "2rem",
                                }}>
                                    <h3 style={{
                                        color: isActive ? "#52C5FE" : "white",
                                        fontWeight: "bold",
                                        fontSize: "10rem",
                                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                                    }}>
                                        {leccion.id}
                                    </h3>

                                    <Button style={{ height: "auto", backgroundColor: "transparent", border: "none", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => handleShow()}>
                                        <IoPlayCircleOutline
                                            style={{
                                                width: "5rem",
                                                height: "5rem",
                                                color: isActive ? "#52C5FE" : "white"
                                            }}
                                        />

                                    </Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <style>{`
                    @keyframes pulse {
                        0%, 100% { opacity: 0.3; transform: translateY(0); }
                        50% { opacity: 1; transform: translateY(5px); }
                    }
                `}</style>
            </div>

        </>
    );
};

const Footer = () => {
    return (
        <div className="d-flex align-items-center justify-content-between px-5 pt-4" style={{ width: "100%", height: "50px", gap: "1rem" }}>
            <p style={{ color: "#1A202C", fontSize: 16, fontWeight: 600 }}>©2026 Equipo 8. Innova Lab</p>
            <div className="d-flex align-items-center justify-content-center gap-5" style={{ height: "100%" }}>
                <p style={{ color: "#1A202C", fontSize: 16, fontWeight: 600 }}>Privacy & Policy</p>
                <p style={{ color: "#1A202C", fontSize: 16, fontWeight: 600 }}>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default DashboardPage;