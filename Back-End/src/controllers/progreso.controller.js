import prisma from '../config/prisma.js';
import { generarFeedbackPedagogico } from '../services/gemini.service.js';

export const registrarProgreso = async (req, res) => {
    const usuarioId = req.user.id;
    const { escenarioId, opcionId } = req.body;

    try {
        const opcion = await prisma.opcion.findUnique({
            where: { id: parseInt(opcionId) },
            include: { escenario: { include: { seccion: true } } }
        });

        if (!opcion || opcion.escenarioId !== parseInt(escenarioId)) {
            return res.status(404).json({ error: 'Opción no válida' });
        }

        const usuario = await prisma.usuario.findUnique({
            where: { id: usuarioId }
        });

        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

        const tokensAnteriores = usuario.tokens || 0;
        const ultimaConexionBase = usuario.ultimaConexion ? new Date(usuario.ultimaConexion) : new Date();
        const ahora = new Date();
        const diferenciaDias = Math.floor((ahora - ultimaConexionBase) / (1000 * 60 * 60 * 24));

        const progresoExistente = await prisma.progreso.findFirst({
            where: { usuarioId, escenarioId: parseInt(escenarioId) }
        });

        const esCorrecto = opcion.puntos > 0;
        const yaEstabaResuelto = progresoExistente?.resuelto || false;
        const puntosEscenario = (!yaEstabaResuelto && esCorrecto) ? opcion.puntos : 0;

        let feedbackFinal = opcion.escenario.explicacion;
        if (!esCorrecto) {
            feedbackFinal = await generarFeedbackPedagogico(
                opcion.escenario.pregunta,
                opcion.escenario.explicacion,
                opcion.texto
            );
        }

        if (progresoExistente) {
            await prisma.progreso.update({
                where: { id: progresoExistente.id },
                data: {
                    resuelto: yaEstabaResuelto || esCorrecto,
                    intentosFallidos: esCorrecto ? progresoExistente.intentosFallidos : { increment: 1 },
                    puntosObtenidos: yaEstabaResuelto ? progresoExistente.puntosObtenidos : puntosEscenario
                }
            });
        } else {
            await prisma.progreso.create({
                data: {
                    usuarioId,
                    escenarioId: parseInt(escenarioId),
                    puntosObtenidos: puntosEscenario,
                    resuelto: esCorrecto,
                    intentosFallidos: esCorrecto ? 0 : 1
                }
            });
        }

        let nuevaRacha = usuario.racha;
        if (diferenciaDias === 1) nuevaRacha += 1;
        else if (diferenciaDias > 1) nuevaRacha = 1;

        const usuarioActualizado = await prisma.usuario.update({
            where: { id: usuarioId },
            data: {
                puntos: { increment: puntosEscenario },
                racha: nuevaRacha,
                ultimaConexion: ahora
            }
        });

        const progresosSeccion = await prisma.progreso.findMany({
            where: {
                usuarioId,
                escenario: { seccionId: opcion.escenario.seccionId }
            }
        });

        const puntosActualesSeccion = progresosSeccion.reduce((acc, curr) => acc + curr.puntosObtenidos, 0);

        const escenariosSeccion = await prisma.escenario.findMany({
            where: { seccionId: opcion.escenario.seccionId },
            include: { opciones: true }
        });

        const puntosMaximosSeccion = escenariosSeccion.reduce((acc, esc) => {
            const maxPuntosEscenario = Math.max(...esc.opciones.map(o => o.puntos), 0);
            return acc + maxPuntosEscenario;
        }, 0);

        const umbral = opcion.escenario.seccion?.umbralAprobacion || 0.66;
        const seccionAprobada = puntosActualesSeccion >= (puntosMaximosSeccion * umbral);
        let ganoTokens = 0;
        let nombreSeccionNuevaAprobada = null;

        if (seccionAprobada) {
            const yaAprobada = await prisma.seccionAprobada.findUnique({
                where: { usuarioId_seccionId: { usuarioId, seccionId: opcion.escenario.seccionId } }
            });

            if (!yaAprobada) {
                await prisma.seccionAprobada.create({
                    data: { usuarioId, seccionId: opcion.escenario.seccionId }
                });
                const seccion = await prisma.seccion.findUnique({ where: { id: opcion.escenario.seccionId } });
                ganoTokens = seccion.puntosRecompensa;
                nombreSeccionNuevaAprobada = seccion.nombre;

                await prisma.usuario.update({
                    where: { id: usuarioId },
                    data: { tokens: { increment: ganoTokens } }
                });
            }
        }

        const usuarioFinal = await prisma.usuario.findUnique({ where: { id: usuarioId } });
        const todasDesbloqueadas = await prisma.seccion.findMany({
            where: { puntosRequeridos: { lte: usuarioFinal.tokens } }
        });

        const nuevosDesbloqueos = todasDesbloqueadas.filter(
            s => s.puntosRequeridos > tokensAnteriores && s.puntosRequeridos <= usuarioFinal.tokens
        );

        return res.status(201).json({
            esCorrecto,
            feedback: feedbackFinal,
            puntosGanados: puntosEscenario,
            puntosTotalesAcademicos: usuarioFinal.puntos,
            tokensActuales: usuarioFinal.tokens,
            tokensGanados: ganoTokens,
            seccionAprobada: nombreSeccionNuevaAprobada,
            nuevosDesbloqueos: nuevosDesbloqueos.map(s => s.nombre)
        });
    } catch (error) {
        return res.status(500).json({ error: 'Error en el proceso' });
    }
};

export const getHistorialUsuario = async (req, res) => {
    const { uid } = req.params;
    try {
        const historial = await prisma.progreso.findMany({
            where: { usuarioId: uid },
            include: { escenario: true },
            orderBy: { updatedAt: 'desc' }
        });
        return res.json(historial);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el historial' });
    }
};
