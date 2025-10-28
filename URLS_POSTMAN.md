# 🔗 URLs para Probar con GET en Postman

## 📍 URLs Base
**Servidor local:** `http://localhost:3000`

---

## ✅ Endpoints GET disponibles:

### 1. 🔍 Probar el servidor (Prueba inicial)
```
GET http://localhost:3000/api/tareas/test
```
**Respuesta esperada:**
```
Prueba desde el controlador de tareas
```

---

### 2. 📋 Listar TODAS las tareas
```
GET http://localhost:3000/api/tareas/
```
**Respuesta esperada:**
```json
[]
```
Si no hay tareas, retornará un array vacío.

---

### 3. 🔎 Buscar tareas por NOMBRE
```
GET http://localhost:3000/api/tareas/buscar/{nombre}
```

**Ejemplos:**
```
GET http://localhost:3000/api/tareas/buscar/compras
GET http://localhost:3000/api/tareas/buscar/estudiar
GET http://localhost:3000/api/tareas/buscar/desarrollo
```

---

### 4. 🔢 Obtener tarea por ID
```
GET http://localhost:3000/api/tareas/{id}
```

**Ejemplo (reemplaza el ID con uno real):**
```
GET http://localhost:3000/api/tareas/65a1b2c3d4e5f6g7h8i9j0k1
```

---

## 🚀 Pasos para Probar:

### 1️⃣ Primero, inicia el servidor:
```bash
npm run dev
```

### 2️⃣ Luego, en Postman:

#### Opción A: Probar que el servidor funciona
- **Método:** `GET`
- **URL:** `http://localhost:3000/api/tareas/test`
- Click en **"Send"**

#### Opción B: Listar todas las tareas
- **Método:** `GET`
- **URL:** `http://localhost:3000/api/tareas/`
- Click en **"Send"**

---

## 💡 Nota Importante:
Si recibes un array vacío `[]` al listar tareas, es normal. Primero necesitas crear tareas con el endpoint **POST**.

### Para crear tu primera tarea (POST):
- **Método:** `POST`
- **URL:** `http://localhost:3000/api/tareas/`
- **Headers:** Agrega `Content-Type: application/json`
- **Body:** Selecciona `raw` → `JSON` y pega:
```json
{
  "titulo": "Mi primera tarea",
  "descripcion": "Esta es una tarea de prueba",
  "prioridad": "alta",
  "categoria": "Personal"
}
```

Luego podrás listarla con: `GET http://localhost:3000/api/tareas/`

---

## ⚙️ Si no funciona:

1. **Verifica que el servidor esté corriendo:**
   - Busca en la terminal: "El servidor se está ejecutando en: http://localhost:3000"

2. **Verifica la conexión a MongoDB:**
   - Debes tener configurado el archivo `.env`
   - Debe aparecer en la terminal: "✔ Conectado a MongoDB"

3. **Verifica que uses el puerto correcto:**
   - Por defecto es `3000`, pero puede estar en otro puerto según tu `.env`

