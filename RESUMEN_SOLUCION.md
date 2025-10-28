# ✅ SOLUCIÓN: Error 500 Corregido

## 🔧 Cambios Realizados

He corregido el código para que:
1. ✅ Cargue correctamente las variables de entorno
2. ✅ Conecte a MongoDB correctamente
3. ✅ Maneje errores de manera adecuada

## 📋 Pasos para Probar:

### 1️⃣ Reiniciar el Servidor

En tu terminal, ve al directorio del proyecto y ejecuta:

```bash
npm run dev
```

### 2️⃣ Verificar que el Servidor Inició Correctamente

Deberías ver estos mensajes:

```
✔ Conectado a MongoDB - Base de datos: lista_tareas
El servidor se está ejecutando en: http://localhost:3000
```

### 3️⃣ Probar en Postman

#### A) Probar que el servidor funciona
- **Método:** `GET`
- **URL:** `http://localhost:3000/api/tareas/test`
- **Respuesta esperada:** `Prueba desde el controlador de tareas`

#### B) Listar todas las tareas
- **Método:** `GET`
- **URL:** `http://localhost:3000/api/tareas/`
- **Respuesta esperada:** `[]` (array vacío si no hay tareas)

#### C) Crear una tarea
- **Método:** `POST`
- **URL:** `http://localhost:3000/api/tareas/`
- **Headers:** `Content-Type: application/json`
- **Body (raw JSON):**
```json
{
  "titulo": "Mi primera tarea",
  "descripcion": "Esta es una tarea de prueba",
  "prioridad": "alta",
  "categoria": "Personal"
}
```

### 4️⃣ Si Todavía Obtienes Error 500

Revisa la terminal donde corre el servidor. El error aparecerá ahí y te indicará el problema específico.

**Errores comunes:**
- ❌ Error de conexión a MongoDB: Verifica tu conexión a internet o la URI en `.env`
- ❌ MongoDB no disponible: Asegúrate de que MongoDB Atlas esté funcionando

---

## 🎯 URLs para Postman (Listo para Copiar)

### GET - Probar servidor
```
http://localhost:3000/api/tareas/test
```

### GET - Listar todas las tareas
```
http://localhost:3000/api/tareas/
```

### POST - Crear tarea
```
http://localhost:3000/api/tareas/
```

### GET - Buscar por nombre
```
http://localhost:3000/api/tareas/buscar/compras
```

### GET - Obtener por ID
```
http://localhost:3000/api/tareas/{id}
```

### PUT - Editar tarea
```
http://localhost:3000/api/tareas/{id}
```

### DELETE - Eliminar tarea
```
http://localhost:3000/api/tareas/{id}
```
