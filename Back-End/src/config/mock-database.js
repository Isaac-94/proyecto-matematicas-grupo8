import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_PATH = path.join(__dirname, '../../data');

const readCSV = (fileName) => {
    try {
        const filePath = path.join(DATA_PATH, fileName);
        if (!fs.existsSync(filePath)) return [];
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n').filter(line => line.trim() !== '');
        const headers = lines[0].split(',').map(h => h.trim());
        return lines.slice(1).map(line => {
            const values = line.match(/(".*?"|[^,]+)/g) || [];
            return headers.reduce((obj, header, index) => {
                let val = values[index]?.trim().replace(/^"|"$/g, '').replace(/""/g, '"');
                if (val?.startsWith('{') || val?.startsWith('[')) {
                    try { obj[header] = JSON.parse(val); } catch { obj[header] = val; }
                } else if (!isNaN(val) && val !== '' && !val.startsWith('user-') && !val.startsWith('admin-')) {
                    obj[header] = val.includes('.') ? parseFloat(val) : parseInt(val);
                } else {
                    obj[header] = val;
                }
                return obj;
            }, {});
        });
    } catch (e) {
        return [];
    }
};

let db = {
    usuario: readCSV('usuarios.csv').map(u => ({ ...u, tokens: 0, ultimaConexion: new Date() })),
    seccion: readCSV('secciones.csv'),
    escenario: readCSV('escenarios.csv'),
    auditoria: readCSV('auditoria.csv'),
    progreso: [],
    seccionAprobada: [],
    opcion: [
        { id: 1, texto: "Respuesta de prueba (Incorrecta)", puntos: 0, escenarioId: 1 },
        { id: 2, texto: "42", puntos: 10, escenarioId: 1 }
    ]
};

const mockPrisma = {
    usuario: {
        findUnique: async ({ where }) => db.usuario.find(u => u.id === where.id || u.email === where.email),
        upsert: async ({ where, create, update }) => {
            let idx = db.usuario.findIndex(u => u.id === where.id || u.email === where.email);
            if (idx !== -1) {
                db.usuario[idx] = { ...db.usuario[idx], ...update };
                return db.usuario[idx];
            }
            const newUser = { ...create, puntos: 0, tokens: 0, racha: 0 };
            db.usuario.push(newUser);
            return newUser;
        },
        update: async ({ where, data }) => {
            let idx = db.usuario.findIndex(u => u.id === where.id);
            if (idx === -1) return null;
            if (data.puntos?.increment) db.usuario[idx].puntos += data.puntos.increment;
            if (data.tokens?.increment) db.usuario[idx].tokens += data.tokens.increment;
            Object.keys(data).forEach(k => {
                if (typeof data[k] !== 'object' || data[k] instanceof Date) db.usuario[idx][k] = data[k];
            });
            return db.usuario[idx];
        },
        findMany: async () => db.usuario
    },
    seccion: {
        findMany: async ({ where, include } = {}) => {
            return db.seccion.map(s => ({
                ...s,
                escenarios: include?.escenarios ? db.escenario.filter(e => e.seccionId === s.id) : []
            }));
        },
        findUnique: async ({ where }) => {
            const s = db.seccion.find(s => s.id === where.id);
            if (s) s.escenarios = db.escenario.filter(e => e.seccionId === s.id);
            return s;
        },
        create: async ({ data }) => {
            const newS = { id: db.seccion.length + 1, ...data };
            db.seccion.push(newS);
            return newS;
        },
        update: async ({ where, data }) => {
            let idx = db.seccion.findIndex(s => s.id === where.id);
            db.seccion[idx] = { ...db.seccion[idx], ...data };
            return db.seccion[idx];
        },
        delete: async ({ where }) => {
            db.seccion = db.seccion.filter(s => s.id !== where.id);
            return {};
        }
    },
    escenario: {
        findMany: async ({ where }) => db.escenario
            .filter(e => e.seccionId === where.seccionId)
            .map(e => ({ ...e, opciones: db.opcion.filter(o => o.escenarioId === e.id) })),

        findFirst: async ({ where }) => {
            const esc = db.escenario.find(e => e.id === where.id && e.seccionId === where.seccionId);
            if (esc) esc.opciones = db.opcion.filter(o => o.escenarioId === esc.id);
            return esc;
        },
        findUnique: async ({ where }) => db.escenario.find(e => e.id === where.id),
        create: async ({ data }) => {
            const newE = { id: db.escenario.length + 1, ...data };
            db.escenario.push(newE);
            return newE;
        },
        update: async ({ where, data }) => {
            let idx = db.escenario.findIndex(e => e.id === where.id);
            db.escenario[idx] = { ...db.escenario[idx], ...data };
            return db.escenario[idx];
        },
        delete: async ({ where }) => {
            db.escenario = db.escenario.filter(e => e.id !== where.id);
            return {};
        }
    },
    opcion: {
        findUnique: async ({ where }) => {
            const op = db.opcion.find(o => o.id === where.id);
            if (op) {
                op.escenario = { ...db.escenario.find(e => e.id === op.escenarioId) };
                op.escenario.seccion = db.seccion.find(s => s.id === op.escenario.seccionId);
            }
            return op;
        }
    },
    progreso: {
        findFirst: async ({ where }) => db.progreso.find(p => p.usuarioId === where.usuarioId && p.escenarioId === where.escenarioId),
        create: async ({ data }) => {
            const newP = { id: db.progreso.length + 1, ...data, updatedAt: new Date() };
            db.progreso.push(newP);
            return newP;
        },
        update: async ({ where, data }) => {
            let idx = db.progreso.findIndex(p => p.id === where.id);
            if (data.intentosFallidos?.increment) db.progreso[idx].intentosFallidos += data.intentosFallidos.increment;
            Object.keys(data).forEach(k => {
                if (typeof data[k] !== 'object') db.progreso[idx][k] = data[k];
            });
            return db.progreso[idx];
        },
        findMany: async ({ where }) => db.progreso.filter(p => p.usuarioId === where.usuarioId)
    },
    seccionAprobada: {
        findUnique: async ({ where }) => db.seccionAprobada.find(sa => sa.usuarioId === where.usuarioId_seccionId.usuarioId && sa.seccionId === where.usuarioId_seccionId.seccionId),
        create: async ({ data }) => db.seccionAprobada.push(data)
    },
    auditoria: {
        findMany: async ({ include } = {}) => {
            return db.auditoria.map(log => ({
                ...log,
                usuario: include?.usuario ? db.usuario.find(u => u.id === log.usuarioId) : null
            }));
        },
        create: async ({ data }) => {
            const timestamp = new Date().toISOString();
            const newLog = {
                id: db.auditoria.length + 1,
                ...data,
                timestamp,
                detalles: typeof data.detalles === 'object' ? data.detalles : {}
            };
            db.auditoria.push(newLog);
            const AUDIT_PATH = path.join(DATA_PATH, 'auditoria.csv');

            const fileExists = fs.existsSync(AUDIT_PATH);
            const isEmpty = fileExists && fs.statSync(AUDIT_PATH).size === 0;
            if (!fileExists || isEmpty) {
                fs.writeFileSync(AUDIT_PATH, 'id,usuarioId,accion,entidad,entidadId,detalles,timestamp');
            }
            const csvLine = `\n${newLog.id},${newLog.usuarioId},${newLog.accion},${newLog.entidad},${newLog.entidadId || ''},"${JSON.stringify(newLog.detalles).replace(/"/g, '""')}",${timestamp}`;
            fs.appendFileSync(AUDIT_PATH, csvLine);
            return newLog;
        }
    }
};

export default mockPrisma;
