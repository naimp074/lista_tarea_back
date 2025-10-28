# 🔧 Solución Error 500

## 📌 Problema Identificado

El error 500 generalmente se debe a que el servidor no está ejecutándose o hay un problema con la conexión a MongoDB.

## ✅ Pasos para Solucionar:

### 1. Reiniciar el servidor

En la terminal donde está ejecutando el servidor, detén el proceso (Ctrl+C) y vuelve a iniciarlo:

```bash
npm run dev
```

### 2. Verificar que el servidor esté corriendo

Deberías ver estos mensajes en la terminal:

```
✔ Conectado a MongoDB - Base de datos: lista_tareas
El servidor se está ejecutando en: http://localhost:3000
```

### 3. Si NO aparece el mensaje de MongoDB:

**Opción A: Verificar la conexión a MongoDB Atlas**
- Verifica que tu IP esté permitida en MongoDB Atlas
- Verifica que la contraseña sea correcta

**Opción B: Usar MongoDB Local (Alternativa)**

Si prefieres usar MongoDB localmente:

1. Instala MongoDB en tu computadora
2. Cambia el archivo `.env`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017
```

### 4. Verificar en Postman

Una vez que el servidor esté corriendo correctamente:

1. Abre Postman
2. Método: **GET**
3. URL: `http://localhost:3000/api/tareas/test`
4. Click en **Send**

**Respuesta esperada:**
```
Prueba desde el controlador de tareas
```

### 5. Si todavía obtienes error 500

Revisa el mensaje de error en la terminal donde corre el servidor. El mensaje te indicará exactamente cuál es el problema.

## 🐛 Errores Comunes:

### Error: "MONGODB_URI no definido"
- **Solución:** Verifica que el archivo `.env` exista y tenga la variable `MONGODB_URI`

### Error: "Timeout" o "ECONNREFUSED"
- **Solución:** Verifica que MongoDB esté corriendo y accesible

### Error: "Authentication failed"
- **Solución:** Verifica las credenciales en el archivo `.env`

## 📝 Verificar que todo funciona:

### 1. Probar GET
```
GET http://localhost:3000/api/tareas/test
```

### 2. Crear una tarea (POST)
```
POST http://localhost:3000/api/tareas/
Body (JSON):
{
  "titulo": "Mi primera tarea",
  "prioridad": "alta"
}
```

### 3. Listar tareas (GET)
```
GET http://localhost:3000/api/tareas/
```

