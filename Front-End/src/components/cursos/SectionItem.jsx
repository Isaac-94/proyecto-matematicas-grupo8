import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function SectionItem({
  leccion,
  currentIndex,
  isTransitioning,
  setCurrentIndex,
  index,
  handleShow,
}) {
  const isActive = index === currentIndex;
  const isMobile = useMediaQuery("(max-width: 768px)");

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
    yOffset = isMobile ? -150 : -150;
    zIndex = 5;
    scale = 0.9;
  } else if (distance === 2) {
    opacity = 0.15;
    yOffset = isMobile ? -250 : -250;
    zIndex = 3;
    scale = 0.8;
  }

  return (
    <motion.div
      key={leccion.id}
      className="d-flex align-items-center justify-content-center"
      style={{
        position: "absolute",
        width: isMobile ? "90%" : "80%",
        height: isMobile ? "40%" : "50%",
        margin: "0 auto",
        borderTopLeftRadius: "80px",
        borderTopRightRadius: "80px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: isActive ? "0px -3px 4.4px 0px #FFFFFF4F" : "none",
        cursor: "pointer",
        backgroundColor: "#FFE16F",
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
        ease: [0.4, 0, 0.2, 1],
      }}
      onClick={() => {
        if (!isTransitioning.current) {
          setCurrentIndex(index);
        }
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          opacity: isActive ? 0.1 : 0,
          backgroundImage: isActive ? "url(/bg-selected.jpg)" : "none",
          borderTopLeftRadius: "80px",
          borderTopRightRadius: "80px",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          borderTopLeftRadius: "80px",
          borderTopRightRadius: "80px",
          padding: "10%",
          gap: "2rem",
        }}
      >
        <h3
          style={{
            color: isActive ? "#52C5FE" : "white",
            fontWeight: "bold",
            fontSize: "10rem",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {index + 1}
        </h3>

        <div
          className="d-flex flex-column align-items-start justify-content-center"
          style={{ gap: "1rem", flex: 1 }}
        >
          <Button
            style={{
              height: "auto",
              backgroundColor: "transparent",
              border: "none",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => handleShow()}
          >
            <IoPlayCircleOutline
              style={{
                width: "5rem",
                height: "5rem",
                color: isActive ? "#52C5FE" : "white",
              }}
            />
          </Button>

          <p
            className=""
            style={{ color: "#52C5FE", fontWeight: 700, fontSize: "1.25rem" }}
          >
            {leccion.titulo}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
