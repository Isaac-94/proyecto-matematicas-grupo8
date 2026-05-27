import 'dotenv/config';
import { PrismaClient } from '../generated/client/index.js';
import mockPrisma from './mock-database.js';

let prisma;

const dataSource = process.env.DATA_SOURCE?.trim().toUpperCase();
const isDbConfigured = process.env.DATABASE_URL && process.env.DATABASE_URL !== 'postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public';

if (dataSource === 'MOCK' || !isDbConfigured) {
    console.log('\x1b[33m%s\x1b[0m', '--- DATA_SOURCE: MOCK (Usando archivos CSV locales) ---');
    process.env.DATA_SOURCE = 'MOCK';
    prisma = mockPrisma;
} else {
    try {
        prisma = new PrismaClient();
        console.log('\x1b[32m%s\x1b[0m', '--- DATA_SOURCE: DB (Conectando a Supabase via Prisma) ---');
    } catch (error) {
        console.error('Error al inicializar Prisma Client, usando Mock de respaldo.');
        prisma = mockPrisma;
    }
}

export default prisma;
