# 🚀 Guía de Uso - Backend Lista de Tareas

## 📋 Configuración Inicial

### 1. Configurar MongoDB

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3000
MONGODB_URI=tu_cadena_de_conexion_mongodb
```

**Opciones de conexión:**

#### Opción A: MongoDB Atlas (Cloud)
```env
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/
```

#### Opción B: MongoDB Local
```env
MONGODB_URI=mongodb://localhost:27017
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar el Servidor

```bash
# Modo desarrollo (con recarga automática)
npm run dev

# Modo producción
npm start
```

El servidor iniciará en: `http://localhost:3000`

---

## 📡 Endpoints Disponibles

### Base URL
```
http://localhost:3000/api/tareas
```

### 1. 🔍 Prueba del Servidor
```http
GET http://localhost:3000/api/tareas/test
```
**Respuesta:**
```json
"Prueba desde el controlador de tareas"
```

### 2. 📝 Crear una Nueva Tarea
```http
POST http://localhost:3000/api/tareas/
Content-Type: application/json
```

**Body de ejemplo:**
```json
{
  "titulo": "Completar documentación",
  "descripcion": "Terminar la documentación del proyecto",
  "prioridad": "alta",
  "categoria": "Desarrollo",
  "fechaVencimiento": "2024-12-31"
}
```

**Respuesta exitosa (201):**
```json
{
  "mensaje": "La tarea fue creada exitosamente",
  "tarea": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "titulo": "Completar documentación",
    "descripcion": "Terminar la documentación del proyecto",
    "completada": false,
    "prioridad": "alta",
    "categoria": "Desarrollo",
    "fechaVencimiento": "2024-12-31T00:00:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### 3. 📋 Listar Todas las Tareas
```http
GET http://localhost:3000/api/tareas/
```

**Respuesta exitosa (200):**
```json
[
  {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "titulo": "Completar documentación",
    "descripcion": "Terminar la documentación del proyecto",
    "completada": false,
    "prioridad": "alta",
    "categoria": "Desarrollo",
    "fechaVencimiento": "2024-12-31T00:00:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k2",
    "titulo": "Revisar código",
    "descripcion": "Hacer code review del proyecto",
    "completada": false,
    "prioridad": "media",
    "categoria": "Desarrollo",
    "createdAt": "2024-01-16T09:00:00.000Z",
    "updatedAt": "2024-01-16T09:00:00.000Z"
  }
]
```

### 4. 🔎 Obtener una Tarea por ID
```http
GET http://localhost:3000/api/tareas/{id}
```

**Ejemplo:**
```
GET http://localhost:3000/api/tareas/65a1b2c3d4e5f6g7h8i9j0k1
```

**Respuesta exitosa (200):**
```json
{
  "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
  "titulo": "Completar documentación",
  "descripcion": "Terminar la documentación del proyecto",
  "completada": false,
  "prioridad": "alta",
  "categoria": "Desarrollo",
  "fechaVencimiento": "2024-12-31T00:00:00.000Z",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

**Respuesta error (404):**
```json
{
  "mensaje": "No se encontró la tarea"
}
```

### 5. 🔍 Buscar Tareas por Nombre
```http
GET http://localhost:3000/api/tareas/buscar/{nombre}
```

**Ejemplo:**
```
GET http://localhost:3000/api/tareas/buscar/documentacion
```

**Respuesta exitosa (200):**
```json
[
  {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "titulo": "Completar documentación",
    "descripcion": "Terminar la documentación del proyecto",
    "completada": false,
    "prioridad": "alta",
    "categoria": "Desarrollo",
    "fechaVencimiento": "2024-12-31T00:00:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

### 6. ✏️ Editar una Tarea
```http
PUT http://localhost:3000/api/tareas/{id}
Content-Type: application/json
```

**Ejemplo:**
```
PUT http://localhost:3000/api/tareas/65a1b2c3d4e5f6g7h8i9j0k1
```

**Body (solo campos a actualizar):**
```json
{
  "titulo": "Completar documentación actualizada",
  "completada": true,
  "prioridad": "media"
}
```

**Respuesta exitosa (200):**
```json
{
  "mensaje": "La tarea fue editada correctamente",
  "tarea": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "titulo": "Completar documentación actualizada",
    "descripcion": "Terminar la documentación del proyecto",
    "completada": true,
    "prioridad": "media",
    "categoria": "Desarrollo",
    "fechaVencimiento": "2024-12-31T00:00:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-16T11:45:00.000Z"
  }
}
```

### 7. 🗑️ Eliminar una Tarea
```http
DELETE http://localhost:3000/api/tareas/{id}
```

**Ejemplo:**
```
DELETE http://localhost:3000/api/tareas/65a1b2c3d4e5f6g7h8i9j0k1
```

**Respuesta exitosa (200):**
```json
{
  "mensaje": "La tarea fue eliminada correctamente"
}
```

---

## 📝 Modelo de Datos

### Campos de la Tarea

| Campo | Tipo | Obligatorio | Validaciones | Default |
|-------|------|-------------|--------------|---------|
| `titulo` | String | ✅ Sí | 3-200 caracteres | - |
| `descripcion` | String | ❌ No | máx 1000 caracteres | - |
| `completada` | Boolean | ❌ No | - | `false` |
| `prioridad` | String | ❌ No | "baja", "media", "alta" | `"media"` |
| `categoria` | String | ❌ No | máx 50 caracteres | - |
| `fechaVencimiento` | Date | ❌ No | - | - |
| `createdAt` | Date | - | Auto-generado | - |
| `updatedAt` | Date | - | Auto-generado | - |

---

## 🧪 Pruebas con Postman

### Importar colección

1. Abre Postman
2. Crea una nueva colección llamada "Lista de Tareas"
3. Agrega las siguientes peticiones:

#### Request 1: Prueba del servidor
- **Método:** GET
- **URL:** `http://localhost:3000/api/tareas/test`

#### Request 2: Crear tarea
- **Método:** POST
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

#### Request 3: Listar todas las tareas
- **Método:** GET
- **URL:** `http://localhost:3000/api/tareas/`

#### Request 4: Obtener tarea por ID
- **Método:** GET
- **URL:** `http://localhost:3000/api/tareas/{{id}}`
- **Nota:** Reemplaza `{{id}}` con un ID real de una tarea

#### Request 5: Buscar por nombre
- **Método:** GET
- **URL:** `http://localhost:3000/api/tareas/buscar/primera`

#### Request 6: Editar tarea
- **Método:** PUT
- **URL:** `http://localhost:3000/api/tareas/{{id}}`
- **Headers:** `Content-Type: application/json`
- **Body (raw JSON):**
```json
{
  "completada": true,
  "prioridad": "media"
}
```

#### Request 7: Eliminar tarea
- **Método:** DELETE
- **URL:** `http://localhost:3000/api/tareas/{{id}}`

---

## ✅ Validaciones

### Crear/Editar Tarea

- ✅ `titulo` es obligatorio (3-200 caracteres)
- ✅ `descripcion` máximo 1000 caracteres
- ✅ `prioridad` debe ser: "baja", "media" o "alta"
- ✅ `categoria` máximo 50 caracteres
- ✅ `completada` debe ser boolean

### Códigos de Respuesta

- ✅ `200` - Operación exitosa
- ✅ `201` - Recurso creado exitosamente
- ❌ `400` - Error de validación
- ❌ `404` - Recurso no encontrado
- ❌ `500` - Error del servidor

---

## 🐛 Solución de Problemas

### Error: "MONGODB_URI no definido"
- Verifica que el archivo `.env` exista y tenga la variable `MONGODB_URI`

### Error: "No se pudo conectar a MongoDB"
- Verifica tu cadena de conexión
- Asegúrate de que MongoDB esté ejecutándose
- Si usas MongoDB Atlas, verifica las reglas de firewall

### Puerto ya en uso
- Cambia el puerto en el archivo `.env`: `PORT=3001`

---

## 📚 Estructura del Proyecto

```
lista_tarea_back/
├── src/
│   ├── controllers/
│   │   └── tareas.controllers.js    # Lógica de negocio
│   ├── models/
│   │   └── tarea.js                 # Modelo de datos
│   ├── routes/
│   │   ├── index.routes.js          # Router principal
│   │   └── tareas.routes.js         # Rutas de tareas
│   ├── middleware/
│   │   ├── resultadoValidacion.js   # Validador de errores
│   │   └── validacionTarea.js      # Reglas de validación
│   └── server/
│       ├── config.js                # Configuración del servidor
│       └── dbConfig.js              # Configuración de MongoDB
├── index.js                         # Punto de entrada
├── package.json                     # Dependencias
└── .env                            # Variables de entorno
```

---

¡Listo! Ya tienes tu backend funcionando. 🎉


