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

import Background from "../Images/fondo2.png";
import Login from "../Images/started/login.png";

// Hook personalizado para manejar el estado del formulario de inicio de sesión
const useLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success"); // 'success' o 'danger'

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
    if (!email.includes("@")) {
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
        navigate("/dashboard", { replace: true });
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
    password,
    showToast,
    setShowToast,
    toastMessage,
    toastVariant,
    handleChangeValue,
    handleSubmit,
    handleSocialLogin,
  };
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    email,
    password,
    showToast,
    setShowToast,
    toastMessage,
    toastVariant,
    handleChangeValue,
    handleSubmit,
    handleSocialLogin,
  } = useLoginForm();

  useEffect(() => {
    // Aquí podrías agregar lógica para verificar si el usuario ya está autenticado
    // y redirigirlo a la página principal si es así.
  }, []);

  return (
    <>
      <Container fluid className="vh-100 vw-100 p-0 m-0">
        <Row className="h-100 g-0">
          {/* Columna lateral izquierda */}
          <Col
            md={6}
            className="d-none d-md-flex align-items-center justify-content-center text-white"
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <img src={Login} alt="Login" style={{ width: 400, height: 400 }} />
          </Col>

          {/* Columna derecha - Formulario */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center bg-light"
            style={{ overflowY: "auto", height: "100vh", padding: "30px 24px" }}
          >
            <Card
              className="border-0 bg-transparent"
              style={{ width: "100%", maxWidth: "400px" }}
            >
              <Card.Body className="p-0">
                <div className="text-center mb-4">
                  <h1 className="mb-3 fw-bold" style={{ color: "#2D3E4E" }}>
                    Bienvenido a MATE+
                  </h1>
                  <p style={{ color: "#2D3E4E", fontSize: "1.25rem" }}>
                    ¿No tienes una cuenta?{" "}
                    <Link
                      to="/register"
                      style={{ color: "#31C976" }}
                      className="text-decoration-none"
                    >
                      Regístrate
                    </Link>
                  </p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="login-email" className="visually-hidden">Correo electrónico</Form.Label>
                    <Form.Control
                      id="login-email"
                      type="email"
                      autoComplete="username"
                      placeholder="Correo electrónico"
                      size="lg"
                      onChange={handleChangeValue}
                      name="email"
                      value={email}
                      className="border-0 border-bottom rounded-0 ps-0 pl-2"
                      style={{
                        boxShadow: "none",
                        backgroundColor: "transparent",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#0d6efd")}
                      onBlur={(e) => (e.target.style.borderColor = "#dee2e6")}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="login-password" className="visually-hidden">Contraseña</Form.Label>
                    <InputGroup>
                      <Form.Control
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="Ingresa tu contraseña"
                        size="lg"
                        onChange={handleChangeValue}
                        name="password"
                        value={password}
                        className="border-0 border-bottom rounded-0 ps-0"
                        style={{
                          boxShadow: "none",
                          backgroundColor: "transparent",
                        }}
                      />
                      <InputGroup.Text
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          cursor: "pointer",
                          background: "transparent",
                          border: "none",
                          borderBottom: "2px solid #dee2e6",
                          borderRadius: 0,
                        }}
                      >
                        {showPassword ? (
                          <FaEyeSlash size={20} />
                        ) : (
                          <FaEye size={20} />
                        )}
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <div className="d-flex flex-column gap-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-100 py-2 rounded-pill fw-semibold"
                      style={{
                        backgroundColor: "#31C976",
                        borderColor: "#31C976",
                        borderRadius: "35px",
                      }}
                      onClick={handleSubmit}
                    >
                      Iniciar Sesión
                    </Button>
                  </div>
                  {/* Separador */}
                  <div className="d-flex align-items-center my-1">
                    <hr className="flex-grow-1" />
                    <span className="mx-2 text-muted">o</span>
                    <hr className="flex-grow-1" />
                  </div>

                  {/* Botón Google */}
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    className="w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill"
                    onClick={() => handleSocialLogin("Google")}
                  >
                    <img
                      src="https://www.google.com/favicon.ico"
                      alt="Google"
                      style={{ width: 20, height: 20 }}
                    />
                    Iniciar sesión con Google
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <ToastContainer
        position="top-end"
        className="p-3"
        style={{ zIndex: 1050 }}
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
