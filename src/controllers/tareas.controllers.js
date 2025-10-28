import Tarea from "../models/tarea.js";

export const prueba = (req, res) => {
  console.log("Desde el controlador de prueba");
  res.send("Prueba desde el controlador de tareas");
};

// Crear una nueva tarea
export const crearTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({ 
      mensaje: 'La tarea fue creada exitosamente',
      tarea: tareaNueva
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear la tarea" });
  }
};

// Listar todas las tareas
export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al listar las tareas" });
  }
};

// Obtener una tarea por ID
export const obtenerTareaPorId = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "No se encontró la tarea" });
    }
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al buscar la tarea" });
  }
};

// Obtener una tarea por nombre (título)
export const obtenerTareaPorNombre = async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const tareas = await Tarea.find({ 
      titulo: { $regex: nombre, $options: 'i' } 
    });
    
    if (tareas.length === 0) {
      return res.status(404).json({ 
        mensaje: "No se encontraron tareas con ese nombre",
        tareas: [] 
      });
    }
    
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al buscar las tareas" });
  }
};

// Eliminar una tarea por ID
export const borrarTareaPorId = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "No se encontró la tarea" });
    }
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: 'La tarea fue eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al eliminar la tarea" });
  }
};

// Editar una tarea por ID
export const editarTareaPorId = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "No se encontró la tarea" });
    }
    
    const tareaActualizada = await Tarea.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(200).json({
      mensaje: 'La tarea fue editada correctamente',
      tarea: tareaActualizada
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al editar la tarea" });
  }
};


