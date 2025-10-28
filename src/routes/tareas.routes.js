import { Router } from "express";
import {
  borrarTareaPorId,
  crearTarea,
  editarTareaPorId,
  listarTareas,
  obtenerTareaPorId,
  obtenerTareaPorNombre,
  prueba,
} from "../controllers/tareas.controllers.js";
import validacionTarea from "../middleware/validacionTarea.js";

const router = Router();

// Ruta de prueba
router.route("/test").get(prueba);

// Crear tarea y listar todas las tareas
router.route("/")
  .post(validacionTarea, crearTarea)
  .get(listarTareas);

// Buscar tareas por nombre
router.route("/buscar/:nombre").get(obtenerTareaPorNombre);

// Obtener, editar y eliminar una tarea por ID
router.route("/:id")
  .get(obtenerTareaPorId)
  .put(validacionTarea, editarTareaPorId)
  .delete(borrarTareaPorId);

export default router;


