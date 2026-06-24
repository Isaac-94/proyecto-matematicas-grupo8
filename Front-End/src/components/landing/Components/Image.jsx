import { motion } from "framer-motion";
import Image from "../../../assets/image.png";

const ShapeImage = () => {
  return (
    <motion.div
      className="d-none d-lg-block" // ← Oculta en móvil, visible en lg+
      style={{
        position: "relative",
        zIndex: 10,
      }}
      initial={{
        scale: 0,
        opacity: 0,
        rotate: -30,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: 0,
        y: 50,
        x: 0
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
        duration: 1.5,
        delay: 0.3,
      }}
    >
      <motion.img
        src={Image}
        alt="Imagen"
        whileHover={{
          scale: 1.05,
          rotate: 3,
          transition: { type: "spring", stiffness: 300, damping: 10 }
        }}
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "auto",
        }}
      />
    </motion.div>
  );
};

export default ShapeImage;