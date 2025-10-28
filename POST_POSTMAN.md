# 📝 Endpoint POST - Crear Tarea

## 🔗 URL para POST:
```
http://localhost:3000/api/tareas/
```

## 📋 Configuración en Postman:

### 1. Configuración Básica:
- **Método:** `POST`
- **URL:** `http://localhost:3000/api/tareas/`
- **Headers:** Agrega `Content-Type: application/json`

### 2. Body (Datos a enviar):

Haz clic en la pestaña **"Body"**, selecciona **"raw"** y luego **"JSON"**.

**Pega este JSON de ejemplo:**

```json
{
  "titulo": "Hacer compras del supermercado",
  "descripcion": "Comprar ingredientes para la cena de hoy",
  "prioridad": "alta",
  "categoria": "Personal"
}
```

## ✅ Campos disponibles para la tarea:

### Campos **OBLIGATORIOS:**
- `titulo` (mínimo 3 caracteres, máximo 200)

### Campos **OPCIONALES:**
- `descripcion` (máximo 1000 caracteres)
- `completada` (true o false) - default: false
- `prioridad` ("baja", "media" o "alta") - default: "media"
- `categoria` (máximo 50 caracteres)
- `fechaVencimiento` (formato fecha)

## 📦 Ejemplos de JSON para enviar:

### Ejemplo 1 - Tarea Simple:
```json
{
  "titulo": "Comprar leche",
  "prioridad": "alta"
}
```

### Ejemplo 2 - Tarea Completa:
```json
{
  "titulo": "Terminar proyecto de desarrollo",
  "descripcion": "Completar la documentación y los tests del proyecto",
  "prioridad": "alta",
  "categoria": "Trabajo",
  "completada": false,
  "fechaVencimiento": "2024-12-31"
}
```

### Ejemplo 3 - Tarea de Estudio:
```json
{
  "titulo": "Estudiar para el examen",
  "descripcion": "Repasar capítulos 5, 6 y 7 del libro de matemáticas",
  "prioridad": "media",
  "categoria": "Educación"
}
```

### Ejemplo 4 - Tarea Personal:
```json
{
  "titulo": "Llamar al dentista",
  "descripcion": "Agendar cita para limpieza dental",
  "prioridad": "baja",
  "categoria": "Salud"
}
```

## 🎯 Pasos para ejecutar:

1. Abre Postman
2. Selecciona **POST** como método
3. Pega la URL: `http://localhost:3000/api/tareas/`
4. Ve a la pestaña **"Headers"**
5. Agrega: Key=`Content-Type`, Value=`application/json`
6. Ve a la pestaña **"Body"**
7. Selecciona **"raw"** → **"JSON"**
8. Pega uno de los ejemplos JSON de arriba
9. Haz clic en **"Send"**

## ✅ Respuesta Exitosa (201):
```json
{
  "mensaje": "La tarea fue creada exitosamente",
  "tarea": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "titulo": "Hacer compras del supermercado",
    "descripcion": "Comprar ingredientes para la cena de hoy",
    "completada": false,
    "prioridad": "alta",
    "categoria": "Personal",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
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

## 💡 Después de crear la tarea:

Guarda el `_id` que recibes en la respuesta, lo necesitarás para:
- **GET** una tarea específica: `http://localhost:3000/api/tareas/{id}`
- **PUT** para editar: `http://localhost:3000/api/tareas/{id}`
- **DELETE** para eliminar: `http://localhost:3000/api/tareas/{id}`

