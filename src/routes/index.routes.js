import { Router } from "express";
import tareasRoutes from './tareas.routes.js';

const router = Router();

// http://localhost:3000/api/tareas/
router.use('/tareas', tareasRoutes);

export default router;


