import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI no está definido en el archivo .env');
    throw new Error('MONGODB_URI no definido (revisar .env y cómo se carga).');
  }

  try {
    await mongoose.connect(uri, {
      dbName: 'lista_tareas', // nombre de la base de datos
    });
    console.log('✔ Conectado a MongoDB - Base de datos: lista_tareas');
  } catch (error) {
    console.error('✗ Error al conectar con MongoDB:', error.message);
    throw error;
  }
}


