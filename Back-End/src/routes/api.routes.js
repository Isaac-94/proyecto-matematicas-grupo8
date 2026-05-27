import { Router } from 'express';
import seccionRoutes from './seccion.routes.js';
import usuariosRoutes from './usuarios.routes.js';
import progresoRoutes from './progreso.routes.js';
import { getLogs } from '../controllers/auditoria.controller.js';
import { checkAuth } from '../middlewares/auth.middleware.js';
import { auditMiddleware } from '../middlewares/audit.middleware.js';

const router = Router();

router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString()
    });
});

router.use('/secciones', checkAuth, auditMiddleware, seccionRoutes);
router.use('/usuarios', checkAuth, auditMiddleware, usuariosRoutes);
router.use('/progreso', checkAuth, auditMiddleware, progresoRoutes);
router.get('/logs', checkAuth, getLogs);

export default router;
