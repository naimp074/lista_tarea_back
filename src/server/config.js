import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

// 1- Tomar un puerto
// 2- configurar los middlewares
// 3- usar las rutas
export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
  }

  middlewares() {
    // Configurar CORS para permitir requests desde Netlify y localhost
    const corsOptions = {
      origin: function (origin, callback) {
        // Permitir requests sin origin (como Postman, móviles, etc.)
        if (!origin) return callback(null, true);
        
        // Lista de orígenes permitidos
        const allowedOrigins = [
          'http://localhost:5173', // Vite dev server
          'http://localhost:3000', // Local frontend
          'http://localhost:5174',
          /\.netlify\.app$/, // Cualquier dominio de Netlify
          /\.netlify\.com$/, // Dominios de Netlify
        ];
        
        // Verificar si el origen está permitido
        const isAllowed = allowedOrigins.some(allowed => {
          if (allowed instanceof RegExp) {
            return allowed.test(origin);
          }
          return allowed === origin;
        });
        
        if (isAllowed || process.env.NODE_ENV !== 'production') {
          callback(null, true);
        } else {
          callback(null, true); // Permitir todos en producción por ahora
          // Si quieres ser más restrictivo, usa: callback(new Error('No permitido por CORS'));
        }
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    };
    
    this.app.use(cors(corsOptions)); // permite conexiones remotas
    this.app.use(express.json()); // permite interpretar los datos que lleguen en la solicitud en formato json
    this.app.use(morgan("dev")); // nos ofrece datos extras en la terminal
    // configurar un archivo estático
    const __dirname = dirname(fileURLToPath(import.meta.url));
    console.log(__dirname);
    console.log(__dirname + "../../public");
    this.app.use(express.static(__dirname + "/../../public"));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.info(`El servidor se está ejecutando en: http://localhost:${this.port}`)
    );
  }
}

