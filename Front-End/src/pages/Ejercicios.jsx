import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EjercicioInput from '../components/layouts/Ejercicios/Ejercicio1';
import EjercicioChoice from '../components/layouts/Ejercicios/Ejercicio2';
import api from '../config/api';

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
  const [ultimoResultado, setUltimoResultado] = useState(null); // respuesta del backend, para mostrar feedback/tokens

  useEffect(() => {
    let activo = true;
    setCargando(true);
    setError(null);

    api.get(`/secciones/${idSeccionActual}/escenarios`)
      .then((res) => {
        if (!activo) return;
        setEscenarios(res.data || []);
        setIndexActual(0);
      })
      .catch((err) => {
        if (!activo) return;
        console.error('Error al cargar ejercicios:', err);
        setError('No se pudieron cargar los ejercicios. Intentá de nuevo más tarde.');
      })
      .finally(() => {
        if (activo) setCargando(false);
      });

    return () => { activo = false; };
  }, [idSeccionActual]);

  const ejercicioActual = escenarios[indexActual];

  // Se llama cuando el usuario responde (elige una opción o envía un número).
  // El backend recalcula si es correcto o no — nunca confiamos en el front para eso.
  const manejarRespuesta = async ({ opcionId, respuestaUsuario }) => {
    if (!ejercicioActual) return;
    try {
      const res = await api.post('/progreso', {
        escenarioId: ejercicioActual.id,
        ...(opcionId ? { opcionId } : { respuestaUsuario }),
      });
      setUltimoResultado(res.data);

      if (res.data.seccionAprobada) {
        console.log(`🏆 ¡Sección "${res.data.seccionAprobada}" aprobada! +${res.data.tokensGanados} tokens`);
      }
    } catch (err) {
      console.error('Error al registrar progreso:', err);
    }
  };

  const manejarAtras = () => {
    if (indexActual > 0) {
      setIndexActual(indexActual - 1);
    } else {
      navigate('/dashboard');
    }
  };

  const manejarContinuar = () => {
    if (indexActual < escenarios.length - 1) {
      setIndexActual(indexActual + 1);
      setUltimoResultado(null);
    } else {
      alert('🎉 ¡Felicidades! Has completado todos los ejercicios de esta sección.');
      navigate('/dashboard');
    }
  };

  if (cargando) {
    return <div className="ejercicio-page-container"><p style={{ padding: '2rem' }}>Cargando ejercicios...</p></div>;
  }

  if (error) {
    return <div className="ejercicio-page-container"><p style={{ padding: '2rem' }}>{error}</p></div>;
  }

  if (escenarios.length === 0) {
    return <div className="ejercicio-page-container"><p style={{ padding: '2rem' }}>Todavía no hay ejercicios cargados para esta sección.</p></div>;
  }

  // Ejercicios de tipo numérico
  if (ejercicioActual.tipo === 'numerico') {
    return (
      <EjercicioInput
        pregunta={ejercicioActual.pregunta}
        imagenUrl={ejercicioActual.imagenUrl}
        respuestaCorrecta={ejercicioActual.respuestaCorrecta}
        onBack={manejarAtras}
        onContinue={manejarContinuar}
        onResponder={(respuestaUsuario) => manejarRespuesta({ respuestaUsuario })}
      />
    );
  }

  // Ejercicios de opción múltiple: se pasan las opciones reales (con id y esCorrecta)
  return (
    <EjercicioChoice
      pregunta={ejercicioActual.pregunta}
      opciones={ejercicioActual.opciones || []}
      onBack={manejarAtras}
      onContinue={manejarContinuar}
      onResponder={(opcionId) => manejarRespuesta({ opcionId })}
    />
  );
}

export default ModuloEjercicios;
