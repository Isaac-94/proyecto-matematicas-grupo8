import React, { useState, useEffect } from 'react';
import HeaderEjercicios from '../../layouts/Header/Header';
import ButtonBack from '../../ui/ButtonBack/ButtonBack';
import ButtonContinue from '../../ui/ButtonContinue/ButtonContinue';
import './Ejercicios.css';
import HeaderDesafio from '../Desafios/headerDesafio/HeaderDesafio';
import HeaderMate from '../HeaderMate/HeaderMate';


function EjercicioChoice({
    pregunta,
    opciones = [],
    respuestaCorrecta,
    onBack,
    onContinue
}) {

    const datosChoiceDePrueba = {
        pregunta: "¿Cuánto es el 25% de 300?",
        opciones: ["75", "100", "50"],
        respuestaCorrecta: "75"
    };

    const preguntaActual = pregunta || datosChoiceDePrueba.pregunta;
    const opcionesActuales = opciones.length ? opciones : datosChoiceDePrueba.opciones;
    const respuestaCorrectaActual = respuestaCorrecta || datosChoiceDePrueba.respuestaCorrecta;

    const [seleccionado, setSeleccionado] = useState(null);
    const [esCorrecto, setEsCorrecto] = useState(null);

    // Reiniciar los estados internos si la pregunta cambia en el mismo componente
    useEffect(() => {
        setSeleccionado(null);
        setEsCorrecto(null);
    }, [preguntaActual]);

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
           
            <main className="ejercicio-page-content">
                <HeaderMate />
                <HeaderDesafio progreso={100}  />

                {/* Contenedor central enfocado en la pregunta Choice */}
                <div className="ejercicio-choice-container">
                    <h2 className="ejercicio-pregunta-centered">{preguntaActual}</h2>

                    {/* Listado de Opciones Múltiples */}
                    <div className="options-grid">
                        {opcionesActuales.map((opcion, index) => {
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

