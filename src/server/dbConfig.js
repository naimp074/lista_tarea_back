import mongoose from 'mongoose';

// Verificar si ya está conectado
if (mongoose.connection.readyState === 1) {
  console.log('✓ Ya conectado a MongoDB');
}

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  
  // Debug: mostrar información sobre la variable de entorno (sin mostrar la URI completa por seguridad)
  console.log('🔍 Verificando conexión a MongoDB...');
  console.log('📍 MONGODB_URI definida:', uri ? 'Sí (longitud: ' + uri.length + ')' : 'NO ❌');
  console.log('📍 NODE_ENV:', process.env.NODE_ENV || 'no definido');
  
  if (!uri) {
    console.error('❌ MONGODB_URI no está definido en las variables de entorno');
    console.error('⚠️  En Vercel, ve a Settings → Environment Variables y agrega MONGODB_URI');
    throw new Error('MONGODB_URI no definido. Verifica las variables de entorno en Vercel.');
  }

  try {
    // Si ya está conectado, no volver a conectar
    if (mongoose.connection.readyState === 1) {
      console.log('✓ Usando conexión existente a MongoDB');
      return;
    }

    console.log('🔄 Intentando conectar a MongoDB...');
    await mongoose.connect(uri, {
      dbName: 'lista_tareas',
      serverSelectionTimeoutMS: 10000, // Aumentado a 10 segundos
      socketTimeoutMS: 45000,
    });
    console.log('✔ Conectado a MongoDB - Base de datos: lista_tareas');
    console.log('📍 Estado de conexión:', mongoose.connection.readyState);
  } catch (error) {
    console.error('✗ Error al conectar con MongoDB:');
    console.error('  Tipo:', error.name);
    console.error('  Mensaje:', error.message);
    if (error.message.includes('authentication')) {
      console.error('  ⚠️  Error de autenticación: Verifica usuario y contraseña en MONGODB_URI');
    }
    if (error.message.includes('timeout')) {
      console.error('  ⚠️  Timeout: Verifica que el cluster esté accesible y que la IP esté permitida en MongoDB Atlas');
    }
    throw error;
  }
}


