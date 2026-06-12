import { Router } from 'express';
import { actualizarPerfil, registrarUsuario, eliminarUsuario, getUsuarios, loginUsuario } from '../controllers/usuarios.controller.js';
import { checkAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', checkAuth, getUsuarios);
router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);
router.put('/perfil', checkAuth, actualizarPerfil);
router.delete('/eliminar', checkAuth, eliminarUsuario);

export default router;
