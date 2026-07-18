
import { useState } from 'react';
import EjercicioPage from '../components/layouts/Ejercicios/Ejercicio1';
import { ejerciciosDePrueba } from '../components/layouts/Ejercicios/datosPrueba'; 
import { useNavigate } from 'react-router-dom';

function ModuloEjercicios() {
  const navigate = useNavigate();
  const [indexActual, setIndexActual] = useState(0);

  // Obtenemos de forma dinámica el ejercicio actual del array
  const ejercicioActual = ejerciciosDePrueba[indexActual];

  const manejarAtras = () => {
    if (indexActual > 0) {
      setIndexActual(indexActual - 1);
    } else {
      console.log("Inicio de la sección de ejercicios.");
      navigate(-1);
    }
  };

  const manejarContinuar = () => {
    if (indexActual < ejerciciosDePrueba.length - 1) {
      setIndexActual(indexActual + 1);
    } else {
      alert("🎉 ¡Felicidades! Has completado todos los ejercicios de prueba.");
    }
  };

  return (
    <EjercicioPage
      pregunta={ejercicioActual.pregunta}
      imagenUrl={ejercicioActual.imagenUrl}
      respuestaCorrecta={ejercicioActual.respuestaCorrecta}
      onBack={manejarAtras}
      onContinue={manejarContinuar}
    />
  );
}

export default ModuloEjercicios;

