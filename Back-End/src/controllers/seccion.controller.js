import prisma from '../config/prisma.js';

export const getSecciones = async (req, res) => {
    const { usuarioId } = req.query;
    try {
        let tokensUsuario = 0;
        if (usuarioId) {
            const usuario = await prisma.usuario.findUnique({
                where: { id: usuarioId },
                select: { tokens: true }
            });
            tokensUsuario = usuario?.tokens || 0;
        }
        const secciones = await prisma.seccion.findMany({
            include: { escenarios: true }
        });
        const seccionesConEstado = secciones.map(s => ({
            ...s,
            estaDesbloqueada: tokensUsuario >= s.puntosRequeridos
        }));
        return res.json(seccionesConEstado);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener las secciones' });
    }
};

export const getSeccionById = async (req, res) => {
    const { id } = req.params;
    try {
        const seccion = await prisma.seccion.findUnique({
            where: { id: parseInt(id) },
            include: { escenarios: true }
        });
        if (!seccion) return res.status(404).json({ error: 'Sección no encontrada' });
        return res.json(seccion);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener la sección' });
    }
};

export const crearSeccion = async (req, res) => {
    const { nombre, descripcion, grado, puntosRequeridos, puntosRecompensa, umbralAprobacion } = req.body;
    try {
        const nuevaSeccion = await prisma.seccion.create({
            data: { nombre, descripcion, grado, puntosRequeridos, puntosRecompensa, umbralAprobacion }
        });

        return res.status(201).json(nuevaSeccion);
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear la sección' });
    }
};

export const eliminarSeccion = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.seccion.delete({ where: { id: parseInt(id) } });

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar la sección' });
    }
};

export const actualizarSeccion = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, grado, umbralAprobacion, puntosRecompensa, puntosRequeridos } = req.body;
    try {
        const seccion = await prisma.seccion.update({
            where: { id: parseInt(id) },
            data: { nombre, descripcion, grado, umbralAprobacion, puntosRecompensa, puntosRequeridos }
        });

        return res.json(seccion);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar la sección' });
    }
};
