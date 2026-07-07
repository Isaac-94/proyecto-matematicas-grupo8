import { Navbar, Container, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./headerDesafio.css";

export default function HeaderDesafio({ progreso = 50 }) {
  const navigate = useNavigate();

  return (
    <div className="header-desafio">
      <div className="header-desafio-progress">
        <Link to="/" className="header-desafio-back">
          <img src="/login/iconButton.png" alt="volver" className="back-icon" />
        </Link>

        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progreso}%` }}
          ></div>
        </div>
      </div>

      <div className="header-desafio-icons">
        <button className="icon-btn">
          <img src="/icons/Book.png"  alt="book" />
        </button>

        <button className="icon-btn">
          <img src="/icons/Calculator.png"alt="calculadora" />
        </button>

        <button className="icon-btn">
          <img src="/icons/Light.png"alt="foco" />
        </button>
      </div>
    </div>
  );
}



















