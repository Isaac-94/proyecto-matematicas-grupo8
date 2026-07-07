import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Toast,
  ToastContainer,
  InputGroup,
} from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../../src/components/layouts/header/Header.jsx";

// Hook personalizado para manejar el estado del formulario de inicio de sesión
const useLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success"); // 'success' o 'danger'
  const [rememberMe, setRememberMe] = useState(false);
  // Método para manejar el cambio de los campos del formulario
  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // Método para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setToastMessage("❌ Por favor, completa todos los campos");
      setToastVariant("danger");
      setShowToast(true);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.trim())) {
    setToastMessage("❌ Ingresa un correo electrónico válido");
    setToastVariant("danger");
    setShowToast(true);
    return;
  }
    try {
      await login(email, password);
      setToastMessage("✅ ¡Inicio de sesión exitoso! Redirigiendo...");
      setToastVariant("success");
      setShowToast(true);
      setTimeout(() => {
        navigate("/onboarding", { replace: true });
      }, 1500);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setToastMessage("❌ Error al iniciar sesión. Verificá tus credenciales.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };
  const handleSocialLogin = (provider) => {
    setToastMessage(`🔗 Iniciando sesión con ${provider}...`);
    setToastVariant("info");
    setShowToast(true);
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    showToast,
    setShowToast,
    toastMessage,
    toastVariant,
    handleChangeValue,
    handleSubmit,
    handleSocialLogin,
    rememberMe,
    setRememberMe,
  };
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    email,
    password,
    setPassword,
    showToast,
    setShowToast,
    toastMessage,
    toastVariant,
    handleChangeValue,
    handleSubmit,
    handleSocialLogin,
    rememberMe,
    setRememberMe,
    setEmail,
  } = useLoginForm();

  useEffect(() => {
    // Aquí podrías agregar lógica para verificar si el usuario ya está autenticado
    // y redirigirlo a la página principal si es así.
  }, []);

  return (
    <>
      <Header />
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/login/fondo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#8FD8FD",
          backgroundSize: "contain",
          minHeight: "100vh ",
          paddingTop: "100px",
          paddingBottom: "20px",
        }}
      >
        <div style={{ position: "relative", width: "100%", maxWidth: 400 }}>
          <Link to="/" style={{ position: "absolute", left: -70, top: 30 }}>
            <img
              src="/login/iconButton.png"
              alt="button"
              style={{ width: 50, height: 50 }}
            />
          </Link>
          <div
            className="bg-white rounded-4 p-4"
            style={{
              width: "100%",
              maxWidth: 400,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
          >
            {/* Tabs */}
            <div className="d-flex border-bottom mb-4">
              <span
                className="flex-grow-1 text-center pb-2 fw-bold"
                style={{
                  color: "#2D3E4E",
                  borderBottom: "3px solid #2D3E4E",
                  cursor: "default",
                }}
              >
                Iniciar sesión
              </span>
              <Link
                to="/register"
                className="flex-grow-1 text-center pb-2 text-decoration-none text-muted"
              >
                Registrarse
              </Link>
            </div>
            <div className="text-center mb-3">
              <img
                src="/login/login.png"
                alt="login"
                style={{ width: 64, height: 64 }}
              />
            </div>
            <h3
              className="text-center fw-bold mb-4"
              style={{ fontSize: 24, fontWeight: 600 }}
            >
              ¡Que bueno verte de vuelta!
            </h3>
            <Form onSubmit={handleSubmit} className="px-2">
              <Form.Group className="mb-3">
                <div style={{ position: "relative" }}>
                  <InputGroup>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleChangeValue}
                      style={{
                        backgroundColor: "#f5f5f5",
                        border: "none",
                        borderBottom: "1px solid #e0e0e0",
                        borderRadius: 0,
                        boxShadow: "none",
                        paddingRight: "35px",
                      }}
                    />
                  </InputGroup>
                  {email && (
                    <img
                      src="/login/icon2.png"
                      alt="Cerrar"
                      onClick={() => setEmail("")}
                      style={{
                        position: "absolute",
                        right: 10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 16,
                        height: 16,
                        cursor: "pointer",
                        opacity: 0.6,
                      }}
                    />
                  )}
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <div style={{ position: "relative" }}>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChangeValue}
                    style={{
                      backgroundColor: "#f5f5f5",
                      border: "none",
                      borderBottom: "1px solid #e0e0e0",
                      borderRadius: 0,
                      boxShadow: "none",
                      paddingRight: "80px",
                    }}
                  />
                  {/* ✕ borrar */}
                  {password && (
                    <img
                      src="/login/icon2.png"
                      alt="borrar"
                      onClick={() => setPassword("")}
                      style={{
                        position: "absolute",
                        right: 10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 16,
                        height: 16,
                        cursor: "pointer",
                        opacity: 0.6,
                      }}
                    />
                  )}
                </div>
                {/* 👁 mostrar/ocultar */}
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    marginTop: 0,
                    height: "38px",
                    marginRight: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </Form.Group>
              {/* Recordarme / Olvidé contraseña */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check
                  label="Recordarme"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  variant="dark"
                />
                <Link
                  to="/forgot-password"
                  className="text-decoration-none small"
                  style={{ color: "#2D3E4E" }}
                >
                  Olvidé mi contraseña
                </Link>
              </div>
              {/* Botón ingresar */}
              <Button
                variant="outline-secondary"
                type="submit"
                className="w-100 rounded-pill fw-semibold mb-2 justify-content-center d-flex align-items-center gap-2"
                style={{ backgroundColor: "#FFFEFD", color: "#151515" }}
              >
                <img
                  src="/login/icon.png"
                  alt="Google"
                  style={{ width: 18, height: 18, bacgroundColor: "#E7E7E7" }}
                />
                Ingresar
              </Button>
              {/* Separador */}
              <div className="d-flex align-items-center my-2">
                <hr className="flex-grow-1" />
                <span className="mx-2 text-muted small">o</span>
                <hr className="flex-grow-1" />
              </div>
              {/* Google */}
              <Button
                variant="outline-secondary"
                className="w-100 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2"
              >
                <img
                  src="/login/icon.png"
                  alt="Google"
                  style={{
                    width: 18,
                    height: 18,
                    color: "#E7E7E7",
                  }}
                />
                Iniciar sesión con Google
              </Button>
            </Form>
            <p className="text-center mt-3 small text-muted">
              ¿No tenes cuenta?{" "}
              <Link
                to="/register"
                className="text-decoration-none "
                style={{ color: "#000000" }}
              >
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </Container>
      <ToastContainer
        position="top-end"
        className="p-3"
        style={{ zIndex: 1050, position: "fixed",}}
      >
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
          bg={toastVariant}
        >
          <Toast.Body className={"text-white"}>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
export default LoginPage;

