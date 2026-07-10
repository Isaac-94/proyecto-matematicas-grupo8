import React from 'react';
import HeaderMate from '../HeaderMate/HeaderMate';
import ButtonBack from '../../ui/ButtonBack/ButtonBack';
import ButtonContinue from '../../ui/ButtonContinue/ButtonContinue';
import './VideoPage.css';

function VideoPage({ 
  title, 
  videoUrl, 
  currentIndex, 
  totalVideos, 
  onBack, 
  onContinue 
}) {
  
  // Condición opcional: deshabilitar "Continuar" si es el último video del array
  const isLastVideo = currentIndex === totalVideos - 1;

  return (
    <div className="video-page-container">
      {/* Header fijo */}
      <HeaderMate />

      {/* Cuerpo de la página */}
      <main className="video-page-content">
        
        {/* Barra superior dinámica */}
        <div className="video-page-top-bar">
          <ButtonBack onClick={onBack} />
          <div className="video-page-title-container">

            <h1 className="video-page-title">{title}</h1>
          </div>
        </div>

        {/* Contenedor del Video Dinámico */}
        <div className="video-wrapper">
          <iframe 
            className="video-player"
            src={videoUrl} 
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        {/* Barra inferior dinámica */}
        <div className="video-page-footer">
          <ButtonContinue 
            onClick={onContinue} 
            label={isLastVideo ? "Finalizar" : "Continuar"} 
          />
        </div>

      </main>
    </div>
  );
}

export default VideoPage;