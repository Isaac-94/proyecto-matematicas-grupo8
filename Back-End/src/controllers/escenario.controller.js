import prisma from '../config/prisma.js';

export const getEscenariosBySeccion = async (req, res, next) => {
    const { seccionId } = req.params;
    try {
        const escenarios = await prisma.escenario.findMany({
            where: { seccionId: parseInt(seccionId) }
        });
        return res.json(escenarios);
    } catch (error) {
        next(error);
    }
};

export const getEscenarioBySeccionAndId = async (req, res, next) => {
    const { seccionId, escenarioId } = req.params;
    try {
        const escenario = await prisma.escenario.findFirst({
            where: {
                id: parseInt(escenarioId),
                seccionId: parseInt(seccionId)
            },
            include: { opciones: true }
        });
        if (!escenario) return res.status(404).json({ error: 'No existe el escenario en esta sección' });
        return res.json(escenario);
    } catch (error) {
        next(error);
    }
};

export const crearEscenario = async (req, res, next) => {
    const { seccionId } = req.params;
    const { titulo, descripcion, pregunta, explicacion, categoria } = req.body;
    try {
        const nuevoEscenario = await prisma.escenario.create({
            data: { titulo, descripcion, pregunta, explicacion, categoria, seccionId: parseInt(seccionId) }
        });

        return res.status(201).json(nuevoEscenario);
    } catch (error) {
        next(error);
    }
};

export const eliminarEscenario = async (req, res, next) => {
    const { escenarioId } = req.params;
    try {
        await prisma.escenario.delete({ where: { id: parseInt(escenarioId) } });

        return res.status(204).send();
    } catch (error) {
        next(error);
    }
};

export const actualizarEscenario = async (req, res, next) => {
    const { escenarioId } = req.params;
    const { titulo, descripcion, pregunta, explicacion, categoria } = req.body;
    try {
        const escenario = await prisma.escenario.update({
            where: { id: parseInt(escenarioId) },
            data: { titulo, descripcion, pregunta, explicacion, categoria }
        });

        return res.json(escenario);
    } catch (error) {
        next(error);
    }
};
