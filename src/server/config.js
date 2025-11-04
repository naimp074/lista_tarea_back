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
    // Configurar CORS de forma simple: permitir TODOS los orígenes
    // Esto evita problemas de CORS en producción
    this.app.use(cors({
      origin: '*', // Permitir todos los orígenes
      credentials: false, // Desactivado cuando origin es '*'
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    }));
    
    // Manejar preflight requests explícitamente
    this.app.options('*', (req, res) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
      res.sendStatus(200);
    });
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

