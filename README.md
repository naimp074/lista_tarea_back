# Backend - Lista de Tareas

Backend REST API para gestión de tareas con MongoDB, Express.js y Node.js.

## Características

- ✅ Crear tareas
- 📋 Listar todas las tareas
- 🔍 Buscar tareas por ID o nombre
- ✏️ Editar tareas
- 🗑️ Eliminar tareas

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo `.env` basado en `.env.example`:
```bash
cp .env.example .env
```

3. Configurar la URL de MongoDB en el archivo `.env`:
```env
PORT=3000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/
```

## Ejecutar el proyecto

```bash
# Modo desarrollo (con watch)
npm run dev

# Modo producción
npm start
```

El servidor se ejecutará en: `http://localhost:3000`

## Endpoints

### Base URL: `http://localhost:3000/api/tareas`

### 1. Prueba del servidor
```http
GET /api/tareas/test
```

### 2. Listar todas las tareas
```http
GET /api/tareas/
```

### 3. Obtener una tarea por ID
```http
GET /api/tareas/:id
```

### 4. Buscar tareas por nombre
```http
GET /api/tareas/buscar/:nombre
```

### 5. Crear una nueva tarea
```http
POST /api/tareas/
```

**Body (JSON):**
```json
{
  "titulo": "Completar proyecto",
  "descripcion": "Terminar la documentación del proyecto",
  "prioridad": "alta",
  "categoria": "Desarrollo",
  "fechaVencimiento": "2024-12-31"
}
```

### 6. Editar una tarea
```http
PUT /api/tareas/:id
```

**Body (JSON):** (campos opcionales)
```json
{
  "titulo": "Completar proyecto actualizado",
  "descripcion": "Nueva descripción",
  "completada": true,
  "prioridad": "media"
}
```

### 7. Eliminar una tarea
```http
DELETE /api/tareas/:id
```

## Estructura de una Tarea

```json
{
  "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
  "titulo": "Nombre de la tarea",
  "descripcion": "Descripción detallada",
  "completada": false,
  "prioridad": "alta",
  "categoria": "Personal",
  "fechaVencimiento": "2024-12-31T00:00:00.000Z",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

### Campos válidos:
- **titulo** (obligatorio): String, 3-200 caracteres
- **descripcion** (opcional): String, máximo 1000 caracteres
- **completada** (opcional): Boolean, default: false
- **prioridad** (opcional): "baja", "media" o "alta", default: "media"
- **categoria** (opcional): String, máximo 50 caracteres
- **fechaVencimiento** (opcional): Date

## Testing con Postman

1. Importa la colección de Postman o crea las siguientes peticiones:

### POST - Crear tarea
```
POST http://localhost:3000/api/tareas/
Content-Type: application/json

{
  "titulo": "Hacer compras",
  "descripcion": "Comprar ingredientes para la cena",
  "prioridad": "alta",
  "categoria": "Personal"
}
```

### GET - Listar todas las tareas
```
GET http://localhost:3000/api/tareas/
```

### GET - Obtener tarea por ID
```
GET http://localhost:3000/api/tareas/{id}
```

### GET - Buscar por nombre
```
GET http://localhost:3000/api/tareas/buscar/compras
```

### PUT - Editar tarea
```
PUT http://localhost:3000/api/tareas/{id}
Content-Type: application/json

{
  "completada": true,
  "prioridad": "media"
}
```

### DELETE - Eliminar tarea
```
DELETE http://localhost:3000/api/tareas/{id}
```

## Ejemplos de uso con cURL

```bash
# Listar todas las tareas
curl http://localhost:3000/api/tareas/

# Crear una tarea
curl -X POST http://localhost:3000/api/tareas/ \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Nueva tarea","descripcion":"Descripción","prioridad":"alta"}'

# Obtener tarea por ID
curl http://localhost:3000/api/tareas/{id}

# Buscar por nombre
curl http://localhost:3000/api/tareas/buscar/ejemplo

# Editar tarea
curl -X PUT http://localhost:3000/api/tareas/{id} \
  -H "Content-Type: application/json" \
  -d '{"completada":true}'

# Eliminar tarea
curl -X DELETE http://localhost:3000/api/tareas/{id}
```