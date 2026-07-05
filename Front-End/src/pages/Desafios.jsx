import React, { useState } from 'react';
import VideoPage from '../components/layouts/VideoPage/VideoPage'; 

// Tu array de videos (obtenido de una API o un archivo local)
const cursoVideos = [
  { id: 1, titulo: "Números Básicos", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, titulo: "Suma y Resta", url: "https://www.youtube.com/embed/otra_url_1" },
  { id: 3, titulo: "Multiplicación Inicial", url: "https://www.youtube.com/embed/otra_url_2" }
];

function Desafios() {
  // Estado para saber qué índice del array estamos viendo
  const [indexActual, setIndexActual] = useState(0);

  // Obtenemos los datos del video actual basándonos en el índice
  const videoActual = cursoVideos[indexActual];

  const manejarAtras = () => {
    if (indexActual > 0) {
      setIndexActual(indexActual - 1);
    } else {
      console.log("Ya estás en el primer video, redirigir al menú principal");
    }
  };

  const manejarContinuar = () => {
    if (indexActual < cursoVideos.length - 1) {
      setIndexActual(indexActual + 1);
    } else {
      console.log("¡Curso terminado! Mostrar pantalla de éxito.");
    }
  };

  return (
    <VideoPage
      title={videoActual.titulo}
      videoUrl={videoActual.url}
      currentIndex={indexActual}
      totalVideos={cursoVideos.length}
      onBack={manejarAtras}
      onContinue={manejarContinuar}
    />
  );
}

export default Desafios;