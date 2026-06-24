import { Navbar, Container, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./headerDesafio.css";
import calcIcon from "../../../../Images/icons/calculate.png";
import bookIcon from "../../../../Images/icons/book.png";
import lightIcon from "../../../../Images/icons/lightbulb_2.png";
export default function HeaderDesafio({ progreso = 50 }) {
  const navigate = useNavigate();

  return (
    <div className="header-desafio">
      <div className="header-desafio-top">
        <div className="header-desafio-back" onClick={() => navigate(-1)}>
          <FaArrowLeft />
          <span>Regresar</span>
        </div>
       <div className="header-desafio-icons">
        <button className="icon-btn"><img src={bookIcon} alt="book" /></button>
        <button className="icon-btn"><img src={calcIcon} alt="calculadora" /></button>
        <button className="icon-btn"><img src={lightIcon} alt="foco" /></button>
       </div>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progreso}%` }}
        ></div>
      </div>
    </div>
  );
}
