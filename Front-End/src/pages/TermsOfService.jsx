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
        <div className="legal-top-bar">
          <ButtonBack onClick={manejarRegresar} />
        </div>

        <div className="tabs-navigation">
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

        <div className="legal-card-body">
          {activeTab === 'privacidad' ? <Privacity /> : <Terms />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TermsOfService;