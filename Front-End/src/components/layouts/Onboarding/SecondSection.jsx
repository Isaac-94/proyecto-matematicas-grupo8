import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../config/api';
import { useNavigate } from 'react-router-dom';
import './onboarding.css';

const initialFormState = {
  nombre: '',
  apellidos: '',
  uid: '',
  desafio: '',
  edad: '',
  genero: '',
  sentimiento: '',
  email: ''
};

function SecondSection() {
  const { user } = useAuth();
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const stepLabels = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4'];

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        uid: user.id,
        email: user.email
      }));
    }
  }, [user]);

  const handleSelectOption = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < stepLabels.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    const fechaActual = new Date().toISOString();

    const dataToSubmit = {
      ...formData,
      fechaRespuesta: fechaActual,
      nombre: `${formData.nombre} ${formData.apellidos}`.trim()
    };

    try {
      await api.post('/usuarios/registro', dataToSubmit);
      setStatus({ loading: false, error: '', success: 'Formulario enviado correctamente.' });

      setTimeout(() => {
        navigate("/dashboard")
      }, 1500);
    } catch (error) {
      const errorMsg = error.response?.data?.error || error.message;
      setStatus({ loading: false, error: errorMsg, success: '' });
    }
  };

  const opcionesDesafios = [
    'Porcentajes',
    'Finanzas cotidianas',
    'Fracciones y proporciones',
    'Números básicos',
    'Estimulación cognitiva'
  ];

  const opcionesSentimientos = ['Relajado', 'Ansioso', 'Confundido', 'Estresado'];

  const opcionesTiempo = ['5 minutos', '10 minutos', '15 minutos', '+15 minutos'];

  const opcionesGeneros = ['masculino', 'femenino', 'otro'];

  const opcionesEdades = ['20 a 30 años', '30 a 50 años', '+ 50 años'];

  return (
    <div className="onboarding-container">
      
      <div className="progress-bar">
        {stepLabels.map((label, index) => (
          <div
            className={`step ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'current' : ''}`}
            key={label}
          >
            <p className={index <= currentStep ? 'active' : ''}>{label}</p>
            <div className={`bullet ${index <= currentStep ? 'active' : ''}`}>
              <span>{index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="form-outer">
        <form onSubmit={handleSubmit} style={{ marginLeft: `-${currentStep * 100}%` }}>

          {/* PASO 1: DESAFÍOS */}
          <div className="page">
            <div className="title">¿Qué desafío de tu vida diaria te gustaría dominar primero?</div>
            <div className="options-grid">
              {opcionesDesafios.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  className={`option-btn ${formData.desafio === opcion ? 'selected' : ''}`}
                  onClick={() => handleSelectOption('desafio', opcion)}
                >
                  {opcion}
                </button>
              ))}
            </div>

            <div className="field btns central-btn">
              <button
                type="button"
                className="next"
                onClick={nextStep}
                disabled={!formData.desafio}
              >
                Siguiente
              </button>
            </div>
          </div>

          {/* PASO 2: SENTIMIENTOS */}
          <div className="page">
            <div className="title">¿Cómo te sentís normalmente cuando tenés que hacer cuentas frente a otras personas?</div>
            <div className="options-grid">
              {opcionesSentimientos.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  className={`option-btn ${formData.sentimiento === opcion ? 'selected' : ''}`}
                  onClick={() => handleSelectOption('sentimiento', opcion)}
                >
                  {opcion}
                </button>
              ))}
            </div>

            <div className="field btns">
              <button type="button" className="prev" onClick={prevStep}>
                Atrás
              </button>
              <button
                type="button"
                className="next"
                onClick={nextStep}
                disabled={!formData.sentimiento}
              >
                Siguiente
              </button>
            </div>
          </div>

          {/* PASO 3: TIEMPO (Para alimentar el gráfico PIE) */}
          <div className="page">
            <div className="title">¿Cuánto tiempo podés dedicarle a tu agilidad mental por día?</div>
            <div className="options-grid">
              {opcionesTiempo.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  className={`option-btn ${formData.tiempo === opcion ? 'selected' : ''}`}
                  onClick={() => handleSelectOption('tiempo', opcion)}
                >
                  {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
                </button>
              ))}
            </div>
            <div className="field btns">
              <button type="button" className="prev" onClick={prevStep}>Atrás</button>
              <button type="button" className="next" onClick={nextStep} disabled={!formData.tiempo}>Siguiente</button>
            </div>
          </div>

          {/* PASO 4: EDAD */}
          <div className="page">
            <div className="title">¿En qué rango de edad te encontrás?</div>
            <div className="options-grid full-width-options">
              {opcionesEdades.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  className={`option-btn ${formData.edad === opcion ? 'selected' : ''}`}
                  onClick={() => handleSelectOption('edad', opcion)}
                >
                  {opcion}
                </button>
              ))}
            </div>

            <div className="field btns">
              <button type="button" className="prev" onClick={prevStep}>
                Atrás
              </button>
              <button type="submit" className="submit" disabled={status.loading || !formData.edad}>
                {status.loading ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {status.error && <p className="status-msg error">{status.error}</p>}
      {status.success && <p className="status-msg success">{status.success}</p>}
    </div>
  );
}

export default SecondSection;
