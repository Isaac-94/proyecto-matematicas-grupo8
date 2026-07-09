import { motion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionItem from "./SectionItem";
import ModalConfirmacion from "./ModalConfirmacion";

export default function CursoSection() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [, setScrollDirection] = useState(0);
    const isTransitioning = useRef(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleToDesafios = () => {
        navigate("/desafios");
        setShow(false);
    }
    const handleToEjercicios = () => {
        navigate("/ejercicios");
        setShow(false);
    }

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, lecciones.length, show]);

    return (
        <>
            <ModalConfirmacion
                show={show}
                handleClose={handleClose}
                handleToDesafios={handleToDesafios}
                handleToEjercicios={handleToEjercicios}
            />

            <div
                ref={containerRef}
                style={{
                    width: "100%",
                    height: "calc(100vh - 140px)",
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
                <div
                    style={{
                        position: 'absolute',
                        width: '1440.21px',
                        height: '275.41px',
                        left: 0,
                        right: 0,
                        top: '0px',
                        background: 'linear-gradient(359.49deg, #FFFEFD 21.36%, rgba(255, 255, 254, 0.348019) 63.57%, rgba(255, 255, 255, 0) 81.39%)',
                        transform: 'rotate(-180deg)',
                        zIndex: 20,
                        pointerEvents: 'none' // Para que no interfiera con clics
                    }}
                />
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

                <TitleSection title="Números Básicos" />

                <div style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    position: "relative",
                    width: "75%",
                    height: "100%"
                }}>
                    {lecciones.map((leccion, index) => (
                        <SectionItem
                            currentIndex={currentIndex}
                            key={leccion.id}
                            leccion={leccion}
                            isTransitioning={isTransitioning}
                            setCurrentIndex={setCurrentIndex}
                            index={index}
                            handleShow={handleShow}
                        />
                    ))}
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

const TitleSection = ({ title }) => {
    return (
        <motion
            .div
            style={{
                position: "absolute",
                top: "2rem",
                left: "4rem",
                zIndex: 101
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <motion.h2
                className="text-black"
                style={{ fontWeight: 900, fontSize: "4rem" }}
            >
                {title}
            </motion.h2>
        </motion.div>
    )
}
