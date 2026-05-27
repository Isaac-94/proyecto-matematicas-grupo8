import prisma from '../config/prisma.js';

export const registrarUsuario = async (req, res) => {
    const uid = req.user.id;
    const { email, nombre } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'El email es requerido para el registro' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const adminEmails = process.env.ADMIN_EMAILS
        ? process.env.ADMIN_EMAILS.split(',').map(e => e.trim().toLowerCase())
        : [];

    const rolAsignado = adminEmails.includes(normalizedEmail) ? 'admin' : 'usuario';

    try {
        const usuario = await prisma.usuario.upsert({
            where: { id: uid },
            update: {
                nombre,
                rol: rolAsignado
            },
            create: {
                id: uid,
                email: normalizedEmail,
                nombre,
                rol: rolAsignado
            }
        });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
};

export const actualizarPerfil = async (req, res) => {
    const uid = req.user.id;
    const { nombre } = req.body;

    try {
        const usuario = await prisma.usuario.update({
            where: {
                id: uid
            },
            data: {
                nombre
            }
        });
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el perfil' });
    }
};
