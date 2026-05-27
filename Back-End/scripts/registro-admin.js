import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import prisma from '../src/config/prisma.js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const email = process.argv[2];
const password = process.argv[3];
const nombre = process.argv[4];

const ADMIN_WHITELIST = [
    'elmoteroloco@gmail.com',
    'equip8.innovalab@gmail.com',
    'casladante@gmail.com',
    'demian231190@gmail.com',
    'ernestoalbrz@gmail.com',
    'florenciaflw@gmail.com',
    'gustavo.ovejero@bue.edu.ar',
    'hluciano@gmail.com',
    'mundanumauro4@gmail.com',
    'rominaruiz2104@gmail.com',
    'salvareschiLisandro0@gmail.com',
    'sofiadigiano@live.com.ar',
    'super@innova.com'
];

async function registrarAdmin() {
    if (!email || !password || !nombre) {
        console.log('Uso: node scripts/registro-admin.js <email> <password> <nombre>');
        process.exit(1);
    }

    if (!ADMIN_WHITELIST.includes(email)) {
        console.error('Error: El email no está en la lista de administradores autorizados.');
        process.exit(1);
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });

        if (error) throw error;

        const uid = data.user.id;

        const admin = await prisma.usuario.upsert({
            where: { id: uid },
            update: { nombre, rol: 'admin' },
            create: {
                id: uid,
                email,
                nombre,
                rol: 'admin'
            }
        });

        await prisma.auditoria.create({
            data: {
                usuarioId: uid,
                accion: 'REGISTRO_ADMIN',
                entidad: 'USUARIO',
                entidadId: uid,
                detalles: { email, nombre, origen: 'CLI_SCRIPT' }
            }
        });

        console.log(`Admin registrado con éxito en Auth y DB.`);
        console.log(`UID generado: ${uid}`);
        console.log(`Ya podés usar este UID como 'adminId' en tus pruebas de CRUD.`);
    } catch (err) {
        console.error('Error en el proceso:', err.message);
    } finally {
        await prisma.$disconnect();
    }
}

registrarAdmin();
