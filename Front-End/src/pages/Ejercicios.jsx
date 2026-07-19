import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EjercicioInput from "../components/layouts/Ejercicios/Ejercicio1";
import EjercicioChoice from "../components/layouts/Ejercicios/Ejercicio2";
import api from "../config/api";

// Sección de respaldo si se entra a /ejercicios sin indicar cuál (ej. durante pruebas)
const SECCION_ID_POR_DEFECTO = 7;

function ModuloEjercicios() {
  const navigate = useNavigate();
  const { seccionId } = useParams();
  const idSeccionActual = seccionId || SECCION_ID_POR_DEFECTO;

  const [escenarios, setEscenarios] = useState([]);
  const [indexActual, setIndexActual] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let activo = true;
    setCargando(true);
    setError(null);

    api
      .get(`/secciones/${idSeccionActual}/escenarios`)
      .then((res) => {
        if (!activo) return;
        setEscenarios(res.data || []);
        setIndexActual(0);
      })
      .catch((err) => {
        if (!activo) return;
        console.error("Error al cargar ejercicios:", err);
        setError(
          "No se pudieron cargar los ejercicios. Intentá de nuevo más tarde.",
        );
      })
      .finally(() => {
        if (activo) setCargando(false);
      });

    return () => {
      activo = false;
    };
  }, [idSeccionActual]);

  const manejarAtras = () => {
    if (indexActual > 0) {
      setIndexActual(indexActual - 1);
    } else {
      navigate(-1);
    }
  };

  const manejarContinuar = () => {
    if (indexActual < escenarios.length - 1) {
      setIndexActual(indexActual + 1);
    } else {
      alert(
        "🎉 ¡Felicidades! Has completado todos los ejercicios de esta sección.",
      );
      navigate(-1);
    }
  };

  if (cargando) {
    return (
      <div className="ejercicio-page-container">
        <p style={{ padding: "2rem" }}>Cargando ejercicios...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ejercicio-page-container">
        <p style={{ padding: "2rem" }}>{error}</p>
      </div>
    );
  }

  if (escenarios.length === 0) {
    return (
      <div className="ejercicio-page-container">
        <p style={{ padding: "2rem" }}>
          Todavía no hay ejercicios cargados para esta sección.
        </p>
      </div>
    );
  }

  const ejercicioActual = escenarios[indexActual];

  // Ejercicios de tipo numérico usan el campo respuestaCorrecta directo del Escenario
  if (ejercicioActual.tipo === "numerico") {
    return (
      <EjercicioInput
        pregunta={ejercicioActual.pregunta}
        imagenUrl={ejercicioActual.imagenUrl}
        respuestaCorrecta={ejercicioActual.respuestaCorrecta}
        onBack={manejarAtras}
        onContinue={manejarContinuar}
      />
    );
  }

  // Ejercicios de opción múltiple: la respuesta correcta vive en Opcion.esCorrecta
  const opcionesTexto = (ejercicioActual.opciones || []).map((o) => o.texto);
  const opcionCorrecta = (ejercicioActual.opciones || []).find(
    (o) => o.esCorrecta,
  )?.texto;

  return (
    <EjercicioChoice
      pregunta={ejercicioActual.pregunta}
      opciones={opcionesTexto}
      respuestaCorrecta={opcionCorrecta}
      onBack={manejarAtras}
      onContinue={manejarContinuar}
    />
  );
}

export default ModuloEjercicios;
