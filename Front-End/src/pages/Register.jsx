import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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

import Background from "../Images/fondo2.png";
import Register from "../Images/started/register.png";

const useRegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [genero, setGenero] = useState("");
  const [lugar, setLugar] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [showToast, setShowToast] = useState(false);

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    if (name === "nombre") setNombre(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
    else if (name === "genero") setGenero(value);
    else if (name === "lugar") setLugar(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !email || !password || !confirmPassword) {
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
    if (password.length < 8) {
      setToastMessage("❌ La contraseña debe tener al menos 8 caracteres");
      setToastVariant("danger");
      setShowToast(true);
      return;
    }
    if (password !== confirmPassword) {
      setToastMessage("❌ Las contraseñas no coinciden");
      setToastVariant("danger");
      setShowToast(true);
      return;
    }

    try {
      await register(email, password, nombre, { genero, lugar });
      setToastMessage("✅ Registro exitoso");
      setToastVariant("success");
      setShowToast(true);
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);
    } catch (error) {
      setToastMessage(`❌ Error: ${error.message}`);
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  return {
    nombre,
    email,
    password,
    confirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    genero,
    lugar,
    handleChangeValue,
    toastMessage,
    toastVariant,
    showToast,
    setShowToast,
    handleSubmit,
  };
};

const RegisterPage = () => {
  const {
    nombre,
    email,
    password,
    confirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    genero,
    lugar,
    showToast,
    toastMessage,
    toastVariant,
    setShowToast,
    handleChangeValue,
    handleSubmit,
  } = useRegisterForm();

  return (
    <>
      <Container fluid className="vh-100 vw-100 p-0 m-0">
        <Row className="h-100 g-0">
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
            <img
              src={Register}
              alt="Register"
              style={{ width: 400, height: 400 }}
            />
          </Col>
          <Col
            md={6}
            className="d-flex align-items-start justify-content-center bg-light"
            style={{ overflowY: "auto", height: "100vh", paddingTop: "30px" }}
          >
            <Card
              className="border-0 bg-transparent"
              style={{ width: "100%", maxWidth: "400px" }}
            >
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <h1 className="mb-3">Registro</h1>
                  <p style={{ color: "#2D3E4E", fontSize: "1.25rem" }}>
                    ¿Ya tienes una cuenta?{" "}
                    <Link
                      to="/login"
                      style={{ color: "#31C976" }}
                      className="text-decoration-none"
                    >
                      Iniciar Sesión
                    </Link>
                  </p>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-2">
                    <Form.Label htmlFor="reg-nombre">Nombre</Form.Label>
                    <Form.Control
                      id="reg-nombre"
                      type="text"
                      autoComplete="name"
                      placeholder="Ingresa tu nombre"
                      size="lg"
                      onChange={handleChangeValue}
                      name="nombre"
                      value={nombre}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label htmlFor="reg-email">Correo electrónico</Form.Label>
                    <Form.Control
                      id="reg-email"
                      type="email"
                      autoComplete="email"
                      placeholder="nombre@empresa.com"
                      size="lg"
                      onChange={handleChangeValue}
                      name="email"
                      value={email}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="reg-password">Contraseña</Form.Label>
                    <InputGroup>
                      <Form.Control
                        id="reg-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="••••••••"
                        size="lg"
                        onChange={handleChangeValue}
                        name="password"
                        value={password}
                      />
                      <Button
                        size="lg"
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={-1}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="reg-confirm">Confirmar contraseña</Form.Label>
                    <InputGroup>
                      <Form.Control
                        id="reg-confirm"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="••••••••"
                        size="lg"
                        onChange={handleChangeValue}
                        name="confirmPassword"
                        value={confirmPassword}
                      />
                      <Button
                        size="lg"
                        variant="outline-secondary"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        tabIndex={-1}
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup>
                  </Form.Group>
                  <Row className="mb-3 g-2">
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label htmlFor="reg-genero">Género</Form.Label>
                        <Form.Select
                          id="reg-genero"
                          name="genero"
                          value={genero}
                          autoComplete="sex"
                          onChange={handleChangeValue}
                        >
                          <option value="">Seleccionar</option>
                          <option value="masculino">Masculino</option>
                          <option value="femenino">Femenino</option>
                          <option value="otro">Otro</option>
                          <option value="prefiero_no_decir">
                            Prefiero no decir
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label htmlFor="reg-lugar">Lugar</Form.Label>
                        <Form.Control
                          id="reg-lugar"
                          type="text"
                          autoComplete="address-level2"
                          placeholder="Ciudad o país"
                          onChange={handleChangeValue}
                          name="lugar"
                          value={lugar}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="w-100 mt-3"
                    style={{
                      backgroundColor: "#2ECC71",
                      borderColor: "#2ECC71",
                      color: "white",
                    }}
                  >
                    Registrarse
                  </Button>
                  {/* Separador */}
                  <div className="d-flex align-items-center my-3">
                    <hr className="flex-grow-1" />
                    <span className="mx-2 text-muted">o</span>
                    <hr className="flex-grow-1" />
                  </div>

                  {/* Botón Google */}
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    className="w-100 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => {}}
                  >
                    <img
                      src="https://www.google.com/favicon.ico"
                      alt="Google"
                      style={{ width: 20, height: 20 }}
                    />
                    Registrarse con Google
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

export default RegisterPage;
