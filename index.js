import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";
import { connectDB } from "./src/server/dbConfig.js";
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Inicializar servidor
const server = new Server();

// Agregar las rutas
server.app.use('/api', router)

// Iniciar el servidor
server.listen()

// Conectar a la base de datos (después de que el servidor esté iniciado)
connectDB().catch(err => {
  console.error('✗ Error al conectar con MongoDB:', err.message);
});

