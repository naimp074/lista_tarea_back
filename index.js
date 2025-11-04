import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";

const server = new Server();

// Agregar las rutas
server.app.use('/api', router);

server.listen();
