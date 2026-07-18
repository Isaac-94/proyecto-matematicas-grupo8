import React, { useState } from 'react';
const Footer = React.lazy(() => import('../components/layouts/Footer/Footer'));
const Header = React.lazy(() => import('../components/layouts/header/Header'));
import ButtonBack from '../components/ui/ButtonBack/ButtonBack';
import Privacity from '../components/layouts/LegalPage/Privacity';
import Terms from '../components/layouts/LegalPage/Terms';
import './TermsOfService.css';

function TermsOfService() {
 const [activeTab, setActiveTab] = useState('privacidad');

  const manejarRegresar = () => {
    console.log("Regresar");
  };

  return (
    <div className="legal-page-container">
       <Header />

      <main className="legal-page-content">
        
       
        <div className="tabs-navigation">
          <ButtonBack onClick={manejarRegresar} />
          
          <div className="tabs-buttons-group">
            <button 
              className={`tab-btn ${activeTab === 'privacidad' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacidad')}
            >
              Política de Privacidad
            </button>
            <button 
              className={`tab-btn ${activeTab === 'terminos' ? 'active' : ''}`}
              onClick={() => setActiveTab('terminos')}
            >
              Términos y Condiciones
            </button>
          </div>
        </div>

        <div className="legal-card-body">
          {activeTab === 'privacidad' ? <Privacity /> : <Terms />}
        </div>
      </main>
    </div>
  );
}

export default TermsOfService;