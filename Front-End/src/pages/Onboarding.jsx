import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FirstSection from '../components/layouts/Onboarding/FirstSection';



function Onboarding() {
  const navigate = useNavigate();
  return (
    <div className="onboarding">
      <FirstSection />
     
    </div>
  );
}
export default Onboarding;