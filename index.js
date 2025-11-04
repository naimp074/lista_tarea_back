import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";
import { connectDB } from "./src/server/dbConfig.js";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

// Cargar variables de entorno (solo en desarrollo local)
// En Vercel, las variables de entorno se cargan automáticamente
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// Debug: mostrar variables de entorno disponibles (sin mostrar valores sensibles)
console.log('🔍 Variables de entorno disponibles:');
console.log('  PORT:', process.env.PORT || 'no definido');
console.log('  NODE_ENV:', process.env.NODE_ENV || 'no definido');
console.log('  MONGODB_URI:', process.env.MONGODB_URI ? 'definida (' + process.env.MONGODB_URI.length + ' caracteres)' : 'NO DEFINIDA ❌');

// Conectar a la base de datos primero
try {
  await connectDB();
  console.log('✅ MongoDB conectado correctamente');
} catch (err) {
  console.error('✗ Error al conectar con MongoDB:', err.message);
  console.error('⚠️  El servidor continuará pero las operaciones de BD fallarán');
  console.error('📝 Para solucionarlo:');
  console.error('   1. Ve a Vercel → Tu proyecto → Settings → Environment Variables');
  console.error('   2. Agrega MONGODB_URI con tu string de conexión de MongoDB Atlas');
  console.error('   3. Ejemplo: mongodb+srv://usuario:password@cluster.mongodb.net/');
  console.error('   4. Haz un nuevo deploy');
  // No detenemos el servidor, pero las operaciones fallarán
}

// Inicializar servidor
const server = new Server();

// Agregar las rutas
server.app.use('/api', router)

// Ruta para servir el index.html en la raíz
const __dirname = dirname(fileURLToPath(import.meta.url));
server.app.get('/', (req, res) => {
  try {
    const htmlPath = join(__dirname, 'index.html');
    const html = readFileSync(htmlPath, 'utf-8');
    res.send(html);
  } catch (error) {
    res.status(500).send('Error al cargar la página');
  }
});

// Iniciar el servidor solo en desarrollo local
// En Vercel, se usa api/index.js como handler
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  server.listen();
}

