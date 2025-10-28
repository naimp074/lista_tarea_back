# ⚡ PUT - Instrucciones Rápidas

## 📍 Paso a Paso para Editar una Tarea:

### 🎯 Método 1: Si ya tienes tareas creadas

#### Paso 1: Listar todas las tareas para obtener un ID
- **Método:** `GET`
- **URL:** `http://localhost:3000/api/tareas/`
- **Copia el `_id`** de cualquier tarea en la respuesta

#### Paso 2: Editar la tarea
- **Método:** `PUT`  
- **URL:** `http://localhost:3000/api/tareas/{pega_el_id_aqui}`
- **Headers:** `Content-Type: application/json`
- **Body (raw → JSON):**
```json
{
  "completada": true,
  "titulo": "Mi tarea actualizada"
}
```

---

### 🎯 Método 2: Crear una tarea primero

Si NO tienes tareas aún:

#### Paso 1: Crear una tarea
- **Método:** `POST`
- **URL:** `http://localhost:3000/api/tareas/`
- **Body (raw → JSON):**
```json
{
  "titulo": "Tarea de prueba",
  "descripcion": "Esta es mi primera tarea",
  "prioridad": "alta"
}
```

#### Paso 2: Copia el `_id` de la respuesta

#### Paso 3: Edita la tarea
- **Método:** `PUT`
- **URL:** `http://localhost:3000/api/tareas/65a1b2c3d4e5f6g7h8i9j0k1` (usa tu ID)
- **Body (raw → JSON):**
```json
{
  "completada": true,
  "titulo": "Tarea completada",
  "prioridad": "media"
}
```

---

## 📋 Ejemplos de Body para PUT:

### Marcar como completada:
```json
{
  "completada": true
}
```

### Cambiar título:
```json
{
  "titulo": "Nuevo título de la tarea"
}
```

### Cambiar prioridad:
```json
{
  "prioridad": "baja"
}
```

### Actualizar varios campos:
```json
{
  "titulo": "Título actualizado",
  "descripcion": "Nueva descripción",
  "completada": true,
  "prioridad": "media",
  "categoria": "Personal"
}
```

---

## ✅ Respuesta Exitosa:

```json
{
  "mensaje": "La tarea fue editada correctamente",
  "tarea": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "titulo": "Título actualizado",
    "completada": true,
    "prioridad": "media",
    ...
  }
}
```

