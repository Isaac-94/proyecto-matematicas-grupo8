import { Container } from "react-bootstrap"
import './onboarding.css'; // Cambiado a un solo archivo CSS compartido
import HeaderMate from '../HeaderMate/HeaderMate';

function FirstSection({ onStart }) {
  return (
    <div className="onboarding-container">
      
      <div className="page">
        <HeaderMate />
        <div className="title2">
          Para personalizar tu experiencia te vamos a hacer un par de preguntas
        </div>
        <div className="field btns central-btn">
          <button type="button" className="button2" onClick={onStart}>
            Empecemos
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;