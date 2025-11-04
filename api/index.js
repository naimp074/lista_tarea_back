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

// Agregar las rutas
server.app.use('/api', router);

// Ruta para servir el index.html en la raíz
const __dirname = dirname(fileURLToPath(import.meta.url));
server.app.get('/', (req, res) => {
  try {
    const htmlPath = join(__dirname, '../index.html');
    const html = readFileSync(htmlPath, 'utf-8');
    res.send(html);
  } catch (error) {
    res.status(500).send('Error al cargar la página');
  }
});

// Inicializar DB al cargar el módulo
await initializeDB();

// Exportar el handler para Vercel
export default server.app;

