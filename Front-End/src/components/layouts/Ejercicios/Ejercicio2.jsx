import React, { useState, useEffect } from "react";
import ButtonBack from "../../ui/ButtonBack/ButtonBack";
import ButtonContinue from "../../ui/ButtonContinue/ButtonContinue";
import "./Ejercicio.css";
import HeaderDesafio from "../Desafios/headerDesafio/HeaderDesafio";
import HeaderMate from "../HeaderMate/HeaderMate";

function EjercicioChoice({
  pregunta,
  opciones = [], // [{ id, texto, esCorrecta }]
  onBack,
  onContinue,
  onResponder, // (opcionId) => void — informa al padre para registrar el progreso
}) {
  const datosChoiceDePrueba = {
    pregunta: "¿Cuánto es el 25% de 300?",
    opciones: [
      { id: -1, texto: "75", esCorrecta: true },
      { id: -2, texto: "100", esCorrecta: false },
      { id: -3, texto: "50", esCorrecta: false },
    ],
  };

  const preguntaActual = pregunta || datosChoiceDePrueba.pregunta;
  const opcionesActuales = opciones.length ? opciones : datosChoiceDePrueba.opciones;

  const [seleccionado, setSeleccionado] = useState(null);
  const [esCorrecto, setEsCorrecto] = useState(null);

  useEffect(() => {
    setSeleccionado(null);
    setEsCorrecto(null);
  }, [preguntaActual]);

  const manejarSeleccion = (opcion) => {
    if (esCorrecto) return;

    setSeleccionado(opcion.id);
    setEsCorrecto(opcion.esCorrecta);

    if (onResponder) {
      onResponder(opcion.id);
    }
  };

  return (
    <div className="ejercicio-page-container">
      <main className="ejercicio-page-content">
        <HeaderMate />
        <HeaderDesafio progreso={100} />

        <div className="ejercicio-choice-container">
          <h2 className="ejercicio-pregunta-centered">{preguntaActual}</h2>

          <div className="options-grid">
            {opcionesActuales.map((opcion) => {
              let buttonClass = "option-button";
              if (seleccionado === opcion.id) {
                buttonClass += esCorrecto ? " option-correct" : " option-incorrect";
              }

              return (
                <button
                  key={opcion.id}
                  className={buttonClass}
                  onClick={() => manejarSeleccion(opcion)}
                  type="button"
                >
                  {opcion.texto}
                </button>
              );
            })}
          </div>


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

        <div className="ejercicio-footer">
          <ButtonContinue onClick={onContinue} disabled={esCorrecto !== true} />
        </div>
      </main>
    </div>
  );
}

export default EjercicioChoice;
