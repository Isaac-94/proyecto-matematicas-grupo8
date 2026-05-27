import { Router } from 'express';
import { getSecciones, getSeccionById, actualizarSeccion, crearSeccion, eliminarSeccion } from '../controllers/seccion.controller.js';
import { getEscenariosBySeccion, getEscenarioBySeccionAndId, actualizarEscenario, crearEscenario, eliminarEscenario } from '../controllers/escenario.controller.js';

const router = Router();

router.get('/', getSecciones);
router.get('/:id', getSeccionById);
router.post('/', crearSeccion);
router.put('/:id', actualizarSeccion);
router.delete('/:id', eliminarSeccion);

router.get('/:seccionId/escenarios', getEscenariosBySeccion);
router.get('/:seccionId/escenarios/:escenarioId', getEscenarioBySeccionAndId);
router.post('/:seccionId/escenarios', crearEscenario);
router.put('/:seccionId/escenarios/:escenarioId', actualizarEscenario);
router.delete('/:seccionId/escenarios/:escenarioId', eliminarEscenario);

export default router;
