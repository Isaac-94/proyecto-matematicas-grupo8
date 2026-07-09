import React, { useState, useEffect } from 'react';
import HeaderEjercicios from '../../layouts/HeaderMate/HeaderMate';
import ButtonBack from '../../ui/ButtonBack/ButtonBack';
import ButtonContinue from '../../ui/ButtonContinue/ButtonContinue';
import './Ejercicio.css';

function EjercicioChoice({ 
  pregunta, 
  opciones = [], 
  respuestaCorrecta, 
  onBack, 
  onContinue 
}) {
  const [seleccionado, setSeleccionado] = useState(null);
  const [esCorrecto, setEsCorrecto] = useState(null);

  // Reiniciar los estados internos si la pregunta cambia en el mismo componente
  useEffect(() => {
    setSeleccionado(null);
    setEsCorrecto(null);
  }, [pregunta]);

  const manejarSeleccion = (opcion) => {
    // Si ya contestó correctamente, bloquear cambios adicionales (opcional)
    if (esCorrecto) return;

    setSeleccionado(opcion);
    
    if (opcion === respuestaCorrecta) {
      setEsCorrecto(true);
    } else {
      setEsCorrecto(false);
    }
  };

  return (
    <div className="ejercicio-page-container">
      <HeaderEjercicios />

      <main className="ejercicio-page-content">
        {/* Barra superior con botón volver */}
        <div className="ejercicio-top-bar">
          <ButtonBack onClick={onBack} />
        </div>

        {/* Contenedor central enfocado en la pregunta Choice */}
        <div className="ejercicio-choice-container">
          <h2 className="ejercicio-pregunta-centered">{pregunta}</h2>
          
          {/* Listado de Opciones Múltiples */}
          <div className="options-grid">
            {opciones.map((opcion, index) => {
              // Determinar clases dinámicas para cada botón
              let buttonClass = "option-button";
              if (seleccionado === opcion) {
                buttonClass += esCorrecto ? " option-correct" : " option-incorrect";
              }

              return (
                <button
                  key={index}
                  className={buttonClass}
                  onClick={() => manejarSeleccion(opcion)}
                  type="button"
                >
                  {opcion}
                </button>
              );
            })}
          </div>

          {/* Carteles Mensajes de Feedback */}
          <div className="feedback-wrapper">
            {esCorrecto === true && (
              <div className="alert-message alert-success animate-pop">
                <span>🎉 ¡Excelente trabajo! Respuesta correcta. ¡Sigue así!</span>
              </div>
            )}
            {esCorrecto === false && (
              <div className="alert-message alert-danger animate-pop">
                <span>💪 ¡Casi lo tienes! Intenta analizar la pregunta nuevamente.</span>
              </div>
            )}
          </div>
        </div>

        {/* Barra inferior con el botón continuar */}
        <div className="ejercicio-footer">
          <ButtonContinue 
            onClick={onContinue} 
            disabled={esCorrecto !== true} // Deshabilitado hasta que seleccione la correcta
          />
        </div>
      </main>
    </div>
  );
}

export default EjercicioChoice;
