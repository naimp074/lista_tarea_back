import Tarea from "../models/tarea.js";
import mongoose from "mongoose";

export const prueba = (req, res) => {
  console.log("Desde el controlador de prueba");
  res.send("Prueba desde el controlador de tareas");
};

// Crear una nueva tarea
export const crearTarea = async (req, res) => {
  try {
    // Verificar conexión a MongoDB
    if (mongoose.connection.readyState !== 1) {
      console.error('❌ MongoDB no está conectado. Estado:', mongoose.connection.readyState);
      return res.status(500).json({ 
        mensaje: "Error de conexión con la base de datos",
        error: "MongoDB no está conectado"
      });
    }

    console.log('📦 Datos recibidos:', req.body);
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    console.log('✅ Tarea creada exitosamente:', tareaNueva._id);
    
    res.status(201).json({ 
      mensaje: 'La tarea fue creada exitosamente',
      tarea: tareaNueva
    });
  } catch (error) {
    console.error("❌ Error al crear tarea:");
    console.error("Tipo de error:", error.name);
    console.error("Mensaje:", error.message);
    console.error("Stack:", error.stack);
    console.error("Datos recibidos:", req.body);
    
    // Si es un error de validación de Mongoose
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        mensaje: "Error de validación",
        errores: errors
      });
    }
    
    res.status(500).json({ 
      mensaje: "Ocurrió un error al crear la tarea",
      error: process.env.NODE_ENV === 'development' || process.env.NODE_ENV !== 'production' 
        ? error.message 
        : undefined
    });
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
    // Verificar conexión a MongoDB
    if (mongoose.connection.readyState !== 1) {
      console.error('❌ MongoDB no está conectado. Estado:', mongoose.connection.readyState);
      return res.status(500).json({ 
        mensaje: "Error de conexión con la base de datos",
        error: "MongoDB no está conectado"
      });
    }

    console.log('📦 Editando tarea ID:', req.params.id);
    console.log('📦 Datos recibidos:', req.body);
    
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "No se encontró la tarea" });
    }
    
    const tareaActualizada = await Tarea.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true, runValidators: true }
    );
    
    console.log('✅ Tarea editada exitosamente:', tareaActualizada._id);
    
    res.status(200).json({
      mensaje: 'La tarea fue editada correctamente',
      tarea: tareaActualizada
    });
  } catch (error) {
    console.error("❌ Error al editar tarea:");
    console.error("Tipo de error:", error.name);
    console.error("Mensaje:", error.message);
    console.error("Stack:", error.stack);
    
    // Si es un error de validación de Mongoose
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        mensaje: "Error de validación",
        errores: errors
      });
    }
    
    res.status(500).json({ 
      mensaje: "Ocurrió un error al editar la tarea",
      error: process.env.NODE_ENV === 'development' || process.env.NODE_ENV !== 'production'
        ? error.message
        : undefined
    });
  }
};


