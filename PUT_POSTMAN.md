# ✏️ Endpoint PUT - Editar una Tarea

## 🔗 URL para PUT:
```
http://localhost:3000/api/tareas/{id}
```
**Reemplaza `{id}` con el ID real de la tarea que quieres editar**

## 📋 Configuración en Postman:

### 1. Configuración Básica:
- **Método:** `PUT`
- **URL:** `http://localhost:3000/api/tareas/{id}`
- **Headers:** Agrega `Content-Type: application/json`

### 2. Obtener el ID de una tarea:

Primero, para obtener el ID de una tarea, usa **GET** para listar todas las tareas:

```
GET http://localhost:3000/api/tareas/
```

En la respuesta, copia el `_id` de la tarea que quieres editar.

**Ejemplo de respuesta:**
```json
[
  {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "titulo": "Mi primera tarea",
    "descripcion": "Esta es una tarea de prueba",
    "completada": false,
    "prioridad": "alta"
  }
]
```

Copia el `_id`: `65a1b2c3d4e5f6g7h8i9j0k1`

### 3. Body (Datos a actualizar):

Haz clic en la pestaña **"Body"**, selecciona **"raw"** y luego **"JSON"**.

#### Ejemplo 1 - Marcar tarea como completada:
```json
{
  "completada": true
}
```

#### Ejemplo 2 - Cambiar título y prioridad:
```json
{
  "titulo": "Mi tarea actualizada",
  "prioridad": "media"
}
```

#### Ejemplo 3 - Actualizar todo:
```json
{
  "titulo": "Nuevo título",
  "descripcion": "Nueva descripción",
  "completada": true,
  "prioridad": "baja",
  "categoria": "Trabajo"
}
```

## 🎯 Ejemplo Completo:

**1. Primero, listar las tareas para obtener un ID:**
```
GET http://localhost:3000/api/tareas/
```

**2. Luego editar la tarea con el ID obtenido:**
```
PUT http://localhost:3000/api/tareas/65a1b2c3d4e5f6g7h8i9j0k1
```

**Headers:**
```
Content-Type: application/json
```

**Body (raw JSON):**
```json
{
  "completada": true,
  "prioridad": "media"
}
```

## ✅ Respuesta Exitosa (200):
```json
{
  "mensaje": "La tarea fue editada correctamente",
  "tarea": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "titulo": "Mi tarea actualizada",
    "descripcion": "Esta es una tarea de prueba",
    "completada": true,
    "prioridad": "media",
    "categoria": "Personal",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-16T11:45:00.000Z"
  }
}
```

## ❌ Respuesta Error (404):
```json
{
  "mensaje": "No se encontró la tarea"
}
```

## ❌ Respuesta Error (400 - Validación):
```json
{
  "errores": [
    {
      "msg": "El título de la tarea es obligatorio",
      "param": "titulo"
    }
  ]
}
```

## 📝 Campos que puedes actualizar:

- ✅ `titulo` (3-200 caracteres)
- ✅ `descripcion` (máximo 1000 caracteres)
- ✅ `completada` (true o false)
- ✅ `prioridad` ("baja", "media" o "alta")
- ✅ `categoria` (máximo 50 caracteres)
- ✅ `fechaVencimiento` (formato fecha)

**Nota:** Puedes actualizar solo los campos que quieras cambiar. No es necesario enviar todos los campos.

