import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
  titulo: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    maxLength: 1000,
    trim: true
  },
  completada: {
    type: Boolean,
    default: false
  },
  prioridad: {
    type: String,
    enum: ["baja", "media", "alta"],
    default: "media"
  },
  fechaVencimiento: {
    type: Date
  },
  categoria: {
    type: String,
    maxLength: 50,
    trim: true
  }
},
{
  timestamps: true
});

const Tarea = mongoose.model('tarea', tareaSchema);

export default Tarea;


