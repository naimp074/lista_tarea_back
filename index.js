import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";
import { connectDB } from "./src/server/dbConfig.js";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos primero
try {
  await connectDB();
  console.log('✅ MongoDB conectado correctamente');
} catch (err) {
  console.error('✗ Error al conectar con MongoDB:', err.message);
  console.error('⚠️  El servidor continuará pero las operaciones de BD fallarán');
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

// Iniciar el servidor
server.listen()

