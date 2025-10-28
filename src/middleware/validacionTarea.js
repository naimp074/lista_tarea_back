import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionTarea = [
    body("titulo")
        .notEmpty()
        .withMessage("El título de la tarea es obligatorio")
        .isLength({ min: 3, max: 200 })
        .withMessage("El título debe tener entre 3 y 200 caracteres")
        .trim(),
    body("descripcion")
        .optional()
        .isLength({ max: 1000 })
        .withMessage("La descripción no puede exceder 1000 caracteres")
        .trim(),
    body("completada")
        .optional()
        .isBoolean()
        .withMessage("El campo completada debe ser un valor booleano"),
    body("prioridad")
        .optional()
        .isIn(["baja", "media", "alta"])
        .withMessage("La prioridad debe ser: baja, media o alta"),
    body("categoria")
        .optional()
        .isLength({ max: 50 })
        .withMessage("La categoría no puede exceder 50 caracteres")
        .trim(),
    (req, res, next) => {
        resultadoValidacion(req, res, next);
    }
]

export default validacionTarea;


