import 'dotenv/config';
import prisma from '../src/config/prisma.js';

const usuarioId = process.argv[2];

if (!usuarioId) {
    console.error('Error: Debes proporcionar un usuarioId. Ejemplo: node scripts/limpiar-progreso.js user-001');
    process.exit(1);
}

async function main() {
    const result = await prisma.progreso.deleteMany({
        where: { usuarioId }
    });
    console.log(`Se eliminaron ${result.count} registros de progreso para el usuario ${usuarioId}`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
