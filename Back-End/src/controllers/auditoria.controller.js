import prisma from '../config/prisma.js';

export const getLogs = async (req, res) => {
    try {
        const logs = await prisma.auditoria.findMany({
            include: {
                usuario: {
                    select: {
                        nombre: true,
                        email: true
                    }
                }
            },
            orderBy: {
                timestamp: 'desc'
            }
        });
        return res.json(logs);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los logs de auditoría' });
    }
};
