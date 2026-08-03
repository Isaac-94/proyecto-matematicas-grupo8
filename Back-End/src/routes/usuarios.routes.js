import { Router } from "express";
import {
  actualizarPerfil,
  registrarUsuario,
  eliminarUsuario,
  getUsuarios,
  loginUsuario,
} from "../controllers/usuarios.controller.js";
import { actualizarDesafioActual } from "../controllers/usuarios.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";
import { obtenerPerfilPropio } from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/", checkAuth, getUsuarios);
router.post("/registro", registrarUsuario);
router.post("/login", loginUsuario);
router.put("/perfil", checkAuth, actualizarPerfil);
router.delete("/eliminar", checkAuth, eliminarUsuario);
router.patch("/desafio-actual", checkAuth, actualizarDesafioActual);
router.get("/perfil", checkAuth, obtenerPerfilPropio);
export default router;
