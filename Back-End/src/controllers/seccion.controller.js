import prisma from '../config/prisma.js';
import { crearEditarSeccionSchema } from '../validators/seccion.validator.js';

export const getSecciones = async (req, res, next) => {
    const { usuarioId } = req.query;
    try {
        let puntosUsuario = 0;
        if (usuarioId) {
            const usuario = await prisma.usuario.findUnique({
                where: { id: usuarioId },
                select: { puntos: true }
            });
            puntosUsuario = usuario?.puntos || 0;
        }
        const secciones = await prisma.seccion.findMany({
            include: { escenarios: true }
        });
        const seccionesConEstado = secciones.map(s => ({
            ...s,
            estaDesbloqueada: puntosUsuario >= s.puntosRequeridos
        }));
        return res.json(seccionesConEstado);
    } catch (error) {
        next(error);
    }
};

export const getSeccionById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const seccion = await prisma.seccion.findUnique({
            where: { id: parseInt(id) },
            include: { escenarios: true }
        });
        if (!seccion) return res.status(404).json({ error: 'Sección no encontrada' });
        return res.json(seccion);
    } catch (error) {
        next(error);
    }
};

export const crearSeccion = async (req, res, next) => {
    try {
        const validacion = crearEditarSeccionSchema.safeParse(req.body);
        if (!validacion.success) {
            return res.status(400).json({ error: validacion.error.errors });
        }

        const { nombre, descripcion, grado, puntosRequeridos, puntosRecompensa, umbralAprobacion } = validacion.data;
        const nuevaSeccion = await prisma.seccion.create({
            data: { nombre, descripcion, grado, puntosRequeridos, puntosRecompensa, umbralAprobacion }
        });

        return res.status(201).json(nuevaSeccion);
    } catch (error) {
        next(error);
    }
};

export const eliminarSeccion = async (req, res, next) => {
    const { id } = req.params;
    try {
        await prisma.seccion.delete({ where: { id: parseInt(id) } });

        return res.status(204).send();
    } catch (error) {
        next(error);
    }
};

export const actualizarSeccion = async (req, res, next) => {
    const { id } = req.params;
    try {
        const validacion = crearEditarSeccionSchema.safeParse(req.body);
        if (!validacion.success) {
            return res.status(400).json({ error: validacion.error.errors });
        }

        const { nombre, descripcion, grado, umbralAprobacion, puntosRecompensa, puntosRequeridos } = validacion.data;
        const seccion = await prisma.seccion.update({
            where: { id: parseInt(id) },
            data: { nombre, descripcion, grado, umbralAprobacion, puntosRecompensa, puntosRequeridos }
        });

        return res.json(seccion);
    } catch (error) {
        next(error);
    }
};
