import mongoose from 'mongoose';

// Verificar si ya está conectado
if (mongoose.connection.readyState === 1) {
  console.log('✓ Ya conectado a MongoDB');
}

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    console.error('❌ MONGODB_URI no está definido en las variables de entorno');
    throw new Error('MONGODB_URI no definido (revisar .env y cómo se carga).');
  }

  try {
    // Si ya está conectado, no volver a conectar
    if (mongoose.connection.readyState === 1) {
      console.log('✓ Usando conexión existente a MongoDB');
      return;
    }

    await mongoose.connect(uri, {
      dbName: 'lista_tareas',
      serverSelectionTimeoutMS: 5000,
    });
    console.log('✔ Conectado a MongoDB - Base de datos: lista_tareas');
  } catch (error) {
    console.error('✗ Error al conectar con MongoDB:', error.message);
    throw error;
  }
}


