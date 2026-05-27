import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUDIT_PATH = path.join(__dirname, '../../data/auditoria.csv');
const header = 'id,usuarioId,accion,entidad,entidadId,detalles,timestamp';

try {
    fs.writeFileSync(AUDIT_PATH, header);
    console.log('Archivo de auditoría local limpiado con éxito.');
} catch (error) {
    console.error('Error al limpiar el archivo de auditoría:', error);
}
