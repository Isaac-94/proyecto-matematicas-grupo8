import 'dotenv/config';
import { generarFeedbackPedagogico } from '../src/services/gemini.service.js';

async function testConnection() {
    console.log('Probando conexión con Gemini...');

    const pregunta = "¿Cuánto es 15 + 27?";
    const explicacionBase = "Suma básica: 15+27=42";
    const opcionElegida = "32";

    try {
        const feedback = await generarFeedbackPedagogico(pregunta, explicacionBase, opcionElegida);

        if (feedback === explicacionBase) {
            console.log('Atención: La IA no respondió y se usó el fallback (explicación base).');
        } else {
            console.log('--- FEEDBACK DE GEMINI 2.5 ---');
            console.log(feedback);
            console.log('------------------------------');
        }
    } catch (error) {
        console.error('Error en la prueba:', error);
    }
}

testConnection();
