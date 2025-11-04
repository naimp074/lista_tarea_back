// Handler para Vercel Serverless Functions
import router from "../src/routes/index.routes.js";
import Server from "../src/server/config.js";
import { connectDB } from "../src/server/dbConfig.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

// Conectar a MongoDB (solo una vez)
let dbConnected = false;

async function initializeDB() {
  if (!dbConnected) {
    try {
      // Debug: mostrar variables de entorno disponibles
      console.log('🔍 Variables de entorno disponibles:');
      console.log('  PORT:', process.env.PORT || 'no definido');
      console.log('  NODE_ENV:', process.env.NODE_ENV || 'no definido');
      console.log('  MONGODB_URI:', process.env.MONGODB_URI ? 'definida (' + process.env.MONGODB_URI.length + ' caracteres)' : 'NO DEFINIDA ❌');
      
      await connectDB();
      dbConnected = true;
      console.log('✅ MongoDB conectado correctamente');
    } catch (err) {
      console.error('✗ Error al conectar con MongoDB:', err.message);
      console.error('⚠️  El servidor continuará pero las operaciones de BD fallarán');
      // No lanzamos el error, permitimos que el servidor continúe
    }
  }
}

// Inicializar servidor
const server = new Server();

// Agregar las rutas de la API
// El router tiene /tareas, y este handler está en /api
// Entonces: server.app.use('/', router) hace que /tareas esté en /api/tareas ✓
server.app.use('/', router);

// Inicializar DB al cargar el módulo
await initializeDB();

// Handler para Vercel Serverless Functions
// Vercel pasa (req, res) directamente a la app de Express
export default async function handler(req, res) {
  // Log de la request para debugging
  console.log(`📥 ${req.method} ${req.url}`);
  
  // Manejar la request con Express
  return server.app(req, res);
}

