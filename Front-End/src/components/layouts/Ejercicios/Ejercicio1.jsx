import React, { useState } from 'react';

import ButtonBack from '../../ui/ButtonBack/ButtonBack';
import ButtonContinue from '../../ui/ButtonContinue/ButtonContinue';
import './Ejercicio.css';
import HeaderDesafio from '../Desafios/headerDesafio/HeaderDesafio';
import HeaderMate from '../HeaderMate/HeaderMate';

function EjercicioInput({ 
  pregunta, 
  imagenUrl, 
  respuestaCorrecta, 
  onBack, 
  onContinue 
}) {
  const [inputValue, setInputValue] = useState('');
  const [resultado, setResultado] = useState(null); // 'correcto' | 'incorrecto' | null

  // Validar que solo se ingresen números
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Permite solo dígitos numéricos (y opcionalmente un punto decimal)
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setInputValue(value);
    }
  };

  const verificarRespuesta = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    // Aquí hacemos la comparación (en el front o simulando la respuesta del back)
    if (Number(inputValue) === Number(respuestaCorrecta)) {
      setResultado('correcto');
    } else {
      setResultado('incorrecto');
    }
  };

  return (
    <div className="ejercicio-page-container">
      <main className="ejercicio-page-content">
        {/* Header con barra de progreso y botones */}
        <HeaderMate />
        <HeaderDesafio progreso={100} />
        
        {/* Layout principal de dos columnas */}
        <div className="ejercicio-grid">
          
          {/* Columna Izquierda: Pregunta, Input y Feedback */}
          <div className="ejercicio-col-left">
            <h2 className="ejercicio-pregunta">{pregunta}</h2>
            
            <form onSubmit={verificarRespuesta} className="ejercicio-form">
              <div className="input-container">
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="Escribí tu respuesta..."
                  value={inputValue}
                  onChange={handleInputChange}
                  className="ejercicio-input"
                />
                <button type="submit" className="button-check">Comprobar</button>
              </div>
            </form>

            {/* Carteles de Feedback de respuesta */}
            {resultado === 'correcto' && (
              <div className="alert-message alert-success">
                <span>🎉 ¡Excelente! Respuesta correcta.</span>
              </div>
            )}
            {resultado === 'incorrecto' && (
              <div className="alert-message alert-danger">
                <span>❌ Intentálo de nuevo. Respuesta incorrecta.</span>
              </div>
            )}
          </div>

          {/* Columna Derecha: Contenedor de la Imagen con estilo Polaroid/Rotado */}
          <div className="ejercicio-col-right">
            <div className="card-imagen-wrapper">
              <img 
                src={imagenUrl} 
                alt="Material del ejercicio" 
                className="ejercicio-imagen" 
              />
            </div>
          </div>

        </div>

        {/* Footer con el botón continuar reutilizado */}
        <div className="ejercicio-footer">
          <ButtonContinue 
            onClick={onContinue} 
            disabled={resultado !== 'correcto'} // Opcional: Bloqueado hasta que acierte
          />
        </div>
      </main>
    </div>
  );
}

export default EjercicioInput;
