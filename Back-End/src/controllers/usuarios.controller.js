import prisma from "../config/prisma.js";
import ApiError from "../exceptions/api.error.js";
import {
  registroSchema,
  perfilSchema,
  loginSchema,
} from "../validators/usuarios.validator.js";
import { obtenerUbicacionPorIP } from "../services/geolocation.service.js";

export const registrarUsuario = async (req, res, next) => {
  console.log(
    "🔍 POST /registro recibido — mascota:",
    req.body.mascota,
    "— email:",
    req.body.email,
  );
  try {
    const validacion = registroSchema.safeParse(req.body);

    if (!validacion.success) {
      throw validacion.error;
    }

    console.log("🔍 Body recibido:", JSON.stringify(req.body, null, 2));
    console.log(
      "🔍 Validacion data:",
      JSON.stringify(validacion.data, null, 2),
    );
    const {
      email,
      nombre,
      password,
      edad,
      genero,
      lugar,
      desafio,
      sentimiento,
      mascota,
    } = validacion.data;
    const uid = req.body.uid;

    if (!uid) {
      return res.status(400).json({ error: "Falta UID de autenticación" });
    }

    let lugarFinal = lugar;
    if (!lugarFinal) {
      const ip =
        req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        req.socket.remoteAddress;
      const ubicacion = await obtenerUbicacionPorIP(ip);
      lugarFinal = ubicacion
        ? [ubicacion.region, ubicacion.pais].filter(Boolean).join(", ")
        : null;
    }

    const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "")
      .split(",")
      .map((e) => e.trim().toLowerCase());
    const SUPERADMIN_EMAILS = (process.env.SUPERADMIN_EMAILS || "")
      .split(",")
      .map((e) => e.trim().toLowerCase());

    let rolAsignado = "usuario";
    if (SUPERADMIN_EMAILS.includes(email.toLowerCase())) {
      rolAsignado = "superadmin";
    } else if (ADMIN_EMAILS.includes(email.toLowerCase())) {
      rolAsignado = "admin";
    }

    const usuario = await prisma.usuario.upsert({
      where: { id: uid },
      update: {
        nombre,
        rol: rolAsignado,
        password,
        edad,
        genero,
        lugar: lugarFinal,
        desafio,
        sentimiento,
        mascota,
      },
      create: {
        id: uid,
        email,
        nombre,
        rol: rolAsignado,
        password,
        edad,
        genero,
        lugar: lugarFinal,
        desafio,
        sentimiento,
        mascota,
      },
      include: { desafioActual: true },
    });
    console.log(`✅ Usuario sincronizado: ${usuario.email} [${usuario.rol}]`);

    const [totalSecciones, seccionesAprobadasCount] = await Promise.all([
      prisma.seccion.count(),
      prisma.seccionAprobada.count({ where: { usuarioId: uid } }),
    ]);

    res
      .status(201)
      .json({ ...usuario, totalSecciones, seccionesAprobadasCount });
  } catch (error) {
    next(error);
  }
};

export const loginUsuario = async (req, res, next) => {
  try {
    const validacion = loginSchema.safeParse(req.body);
    if (!validacion.success) {
      throw validacion.error;
    }

    const { email, password } = validacion.data;

    const usuario = await prisma.usuario.findUnique({
      where: { email: email.toLowerCase() }, // Convertimos a minúsculas para la búsqueda
    });

    if (!usuario || usuario.password !== password) {
      throw ApiError.unauthorized(
        "Credenciales inválidas (email o contraseña incorrectos)",
      );
    }

    res.status(200).json({
      message: "Login exitoso",
      user: {
        ...usuario,
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
        rol: usuario.rol,
        token: "dev-bypass-token",
      },
    });
  } catch (error) {
    next(error);
  }
};

export const eliminarUsuario = async (req, res, next) => {
  try {
    const uid = req.user.id;
    const { password } = req.body;

    if (!password) {
      throw ApiError.badRequest("Ingresar contraseña para borrar la cuenta");
    }

    const usuario = await prisma.usuario.findUnique({
      where: { id: uid },
    });

    if (!usuario || usuario.password !== password) {
      throw ApiError.unauthorized(
        "Contraseña incorrecta. No se puede borrar la cuenta",
      );
    }

    await prisma.usuario.delete({
      where: { id: uid },
    });

    res.status(200).json({ message: "Cuenta borrada correctamente" });
  } catch (error) {
    next(error);
  }
};

export const getUsuarios = async (req, res, next) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.status(200).json(usuarios);
  } catch (error) {
    next(error);
  }
};

export const actualizarPerfil = async (req, res, next) => {
  try {
    const uid = req.user.id;
    const validacion = perfilSchema.safeParse(req.body);

    if (!validacion.success) {
      throw validacion.error;
    }

    const { nombre } = validacion.data;

    const usuario = await prisma.usuario.update({
      where: {
        id: uid,
      },
      data: {
        nombre,
      },
    });
    return res.status(200).json(usuario);
  } catch (error) {
    next(error);
  }
};

export const actualizarDesafioActual = async (req, res, next) => {
  try {
    const uid = req.user.id;
    const { desafioActualId } = req.body || {};

    if (
      desafioActualId !== null &&
      (typeof desafioActualId !== "number" || desafioActualId < 1)
    ) {
      return res.status(400).json({
        error: "desafioActualId debe ser un número entero positivo o null",
      });
    }

    if (desafioActualId !== null) {
      const rama = await prisma.rama.findUnique({
        where: { id: desafioActualId },
      });
      if (!rama) {
        return res.status(404).json({ error: "La rama indicada no existe" });
      }
    }

    const usuario = await prisma.usuario.update({
      where: { id: uid },
      data: { desafioActualId },
      include: { desafioActual: true },
    });

    return res.status(200).json(usuario);
  } catch (error) {
    next(error);
  }
};
