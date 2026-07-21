import React, { useState, useRef } from 'react';
import HeaderDashboard from '../Header/HeaderDashboard'; // Ajusta según tu proyecto
import avatarUser from '../../assets/avatar.png'; // Tu imagen de la oveja
import './Configuracion.css';

function Configuracion() {
  // Datos del formulario
  const [formData, setFormData] = useState({
    nombre: 'Paula',
    email: 'Paula@gmail.com',
    password: '*************'
  });

  // Estados para saber qué campos están en modo edición
  const [isEditing, setIsEditing] = useState({
    nombre: false,
    email: false,
    password: false
  });

  // Estado para controlar la visibilidad del modal de eliminación
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Referencias para hacer auto-focus al hacer clic en el lápiz
  const nombreInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const refs = {
    nombre: nombreInputRef,
    email: emailInputRef,
    password: passwordInputRef
  };

  // Cambiar valor de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Activar la edición de un campo específico
  const toggleEdit = (field) => {
    setIsEditing(prev => {
      const newState = { ...prev, [field]: !prev[field] };
      
      // Si pasa a estar activo, le hacemos focus automático al input
      if (newState[field]) {
        setTimeout(() => {
          refs[field].current?.focus();
        }, 50);
      }
      return newState;
    });
  };

  // Guardar Cambios
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Bloqueamos la edición de todos los campos al guardar
    setIsEditing({ nombre: false, email: false, password: false });
    alert('¡Cambios guardados con éxito!');
  };

  // Eliminar Cuenta
  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    alert('Cuenta eliminada correctamente.');
    // Redirigir a inicio o hacer logout según la lógica de tu App
  };

  return (
    <div className="config-page-container">
      <HeaderDashboard />

      <main className="config-main-content">
        <div className="config-card">
          
          <h1 className="config-title">Configuración</h1>

          {/* Imagen de Perfil */}
          <div className="config-avatar-wrapper">
            <img src={avatarUser} alt="Foto de perfil" className="config-avatar-img" />
          </div>

          <form onSubmit={handleSaveChanges} className="config-form">
            
            {/* Campo Nombre */}
            <div className="config-field-group">
              <label htmlFor="nombre">Nombre</label>
              <div className={`config-input-wrapper ${isEditing.nombre ? 'is-active' : ''}`}>
                <input
                  id="nombre"
                  ref={nombreInputRef}
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  disabled={!isEditing.nombre}
                />
                <button
                  type="button"
                  className="pencil-btn"
                  onClick={() => toggleEdit('nombre')}
                  aria-label="Editar nombre"
                >
                  ✏️
                </button>
              </div>
            </div>

            {/* Campo Email */}
            <div className="config-field-group">
              <label htmlFor="email">Email</label>
              <div className={`config-input-wrapper ${isEditing.email ? 'is-active' : ''}`}>
                <input
                  id="email"
                  ref={emailInputRef}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing.email}
                />
                <button
                  type="button"
                  className="pencil-btn"
                  onClick={() => toggleEdit('email')}
                  aria-label="Editar email"
                >
                  ✏️
                </button>
              </div>
            </div>

            {/* Campo Contraseña */}
            <div className="config-field-group">
              <label htmlFor="password">Contraseña</label>
              <div className={`config-input-wrapper ${isEditing.password ? 'is-active' : ''}`}>
                <input
                  id="password"
                  ref={passwordInputRef}
                  type={isEditing.password ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={!isEditing.password}
                />
                <button
                  type="button"
                  className="pencil-btn"
                  onClick={() => toggleEdit('password')}
                  aria-label="Editar contraseña"
                >
                  ✏️
                </button>
              </div>
            </div>

            {/* Botón Eliminar Cuenta */}
            <div className="delete-account-wrapper">
              <button
                type="button"
                className="delete-account-btn"
                onClick={() => setShowDeleteModal(true)}
              >
                Quiero eliminar mi cuenta
              </button>
            </div>

            {/* Botón Principal Guardar Cambios */}
            <button type="submit" className="save-changes-btn">
              Guardar cambios
            </button>

          </form>

        </div>
      </main>

      {/* MODAL DE CONFIRMACIÓN DE ELIMINACIÓN */}
      {showDeleteModal && (
        <div className="config-modal-overlay">
          <div className="config-modal-card">
            <div className="modal-icon">⚠️</div>
            <h2>¿Eliminar cuenta?</h2>
            <p>
              Esta acción es irreversible y perderás todo tu progreso en MATE+. ¿Estás seguro/a de que deseas continuar?
            </p>

            <div className="modal-actions">
              <button 
                type="button" 
                className="modal-cancel-btn" 
                onClick={() => setShowDeleteModal(false)}
              >
                Cancelar
              </button>
              <button 
                type="button" 
                className="modal-confirm-delete-btn" 
                onClick={handleConfirmDelete}
              >
                Sí, eliminar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Configuracion;

