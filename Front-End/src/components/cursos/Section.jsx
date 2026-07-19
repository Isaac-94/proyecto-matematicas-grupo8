import { motion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionItem from "./SectionItem";
import ModalConfirmacion from "./ModalConfirmacion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import api from "../../config/api";

export default function CursoSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setScrollDirection] = useState(0);
  const isTransitioning = useRef(false);
  const [lecciones, setLecciones] = useState([]);

  useEffect(() => {
    api
      .get("/secciones")
      .then((res) => {
        const secciones = (res.data || []).map((s) => ({
          ...s,
          titulo: s.nombre,
        }));
        setLecciones(secciones);
      })
      .catch((err) => console.error("Error al cargar secciones:", err));
  }, []);

  // Estados para touch events
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleToDesafios = () => {
    navigate("/desafios");
    setShow(false);
  };
  const handleToEjercicios = () => {
    const seccionActual = lecciones[currentIndex];
    navigate(seccionActual ? `/ejercicios/${seccionActual.id}` : "/ejercicios");
    setShow(false);
  };

  // Función para cambiar de lección
  const changeLesson = useCallback(
    (direction) => {
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
    },
    [currentIndex, lecciones.length],
  );

  // Manejo de scroll con rueda del mouse (solo desktop)
  useEffect(() => {
    const handleWheel = (e) => {
      // Si es mobile, no usar wheel (puede causar conflictos con scroll nativo)
      if (isMobile) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      changeLesson(direction);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [changeLesson, isMobile]);

  // Manejo de teclas de flecha (solo desktop)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Solo si el modal NO está abierto
      if (show) return;

      // En mobile, las teclas de flecha no son relevantes
      if (isMobile) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        changeLesson(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        changeLesson(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, lecciones.length, show, changeLesson, isMobile]);

  // Manejo de touch events para mobile
  const handleTouchStart = useCallback((e) => {
    if (isTransitioning.current) return;
    // Guardar la posición Y inicial del touch
    setTouchStartY(e.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback((e) => {
    // Prevenir scroll mientras se desliza
    if (isTransitioning.current) {
      e.preventDefault();
      return;
    }
    // Actualizar la posición Y actual durante el movimiento
    setTouchEndY(e.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (isTransitioning.current) return;

    // Si no hay inicio o fin de touch, salir
    if (touchStartY === 0 || touchEndY === 0) return;

    // Calcular la distancia del swipe
    const distance = touchStartY - touchEndY;
    const minSwipeDistance = 50; // Distancia mínima para considerar un swipe

    // Determinar dirección del swipe
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe hacia arriba -> siguiente lección
        changeLesson(1);
      } else {
        // Swipe hacia abajo -> lección anterior
        changeLesson(-1);
      }
    }

    // Resetear valores
    setTouchStartY(0);
    setTouchEndY(0);
  }, [touchStartY, touchEndY, changeLesson]);

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
          height: isMobile ? "100%" : "calc(100%)",
          position: "relative",
          borderRadius: "20px",
          backgroundColor: "white",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          // Añadir touch events al contenedor
          touchAction: isMobile ? "none" : "auto", // Prevenir scroll nativo en mobile
        }}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        <div
          style={{
            position: "absolute",
            width: "1440.21px",
            height: "275.41px",
            left: 0,
            right: 0,
            top: "0px",
            background:
              "linear-gradient(359.49deg, #FFFEFD 21.36%, rgba(255, 255, 254, 0.348019) 63.57%, rgba(255, 255, 255, 0) 81.39%)",
            transform: "rotate(-180deg)",
            zIndex: 20,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-50%",
            right: "0%",
            left: "0%",
            width: "100%",
            height: "100%",
            backgroundColor: "#28a745",
            borderRadius: "50%",
          }}
        />

        <TitleSection title="Números Básicos" />

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
            width: isMobile ? "100%" : "75%",
            height: "100%",
          }}
        >
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
}

const TitleSection = ({ title }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      style={{
        position: "absolute",
        top: isMobile ? "3rem" : "2rem",
        left: isMobile ? "1.5rem" : "4rem",
        zIndex: 101,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.h2
        className="text-black"
        style={{
          fontWeight: 900,
          fontSize: isMobile ? "1.8rem" : "4rem",
          margin: 0,
        }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
};
