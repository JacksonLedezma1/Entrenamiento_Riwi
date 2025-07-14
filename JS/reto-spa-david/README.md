# Reto SPA – David
Una Single Page Application (SPA) creada con HTML, CSS y JavaScript modular, con sistema de autenticación y control de roles (admin vs usuario). Basado en JSON Server como backend mock.

##  Comenzar

### 1. Clonar el repositorio

```bash
git clone https://github.com/reto-spa-david
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Levantar el servidor de desarrollo

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo usando **Vite**. Puedes abrir la app en tu navegador en:

```
http://localhost:5173
```

##  Estructura del proyecto

```
/
│
├── src/
│   ├── html/
│   │   ├── login.html
│   │   ├── users.html
│   │   ├── newuser.html
│   │   └── about.html
│   ├── js/
│   │   ├── script.js      ← Router+auth+logout (ES module)
│   │   ├── login.js       ← Login y form
│   │   ├── users.js       ← CRUD admin / lectura usuarios
│   │   └── newuser.js     ← Registro de nuevos usuarios
│   └── style/
│       └── style.css
│
├── imgs/                 ← Imágenes (avatar, UI etc.)
├── db.json               ← Base de datos para JSON Server
└── README.md
```
##🛠 Personalización
En db.json, definí al menos un usuario admin:
```Json
{
  "id": 1,
  "name": "Admin David",
  "email": "david@admin.com",
  "password": "1234",
  "role": "admin"
}

```

##  Tecnologías usadas

- **JavaScript**: Lógica principal de la SPA
- **Vite**: Empaquetador rápido para desarrollo moderno
- **HTML y CSS**: Estructura y estilos de la interfaz

##  🧠 ¿Cómo funciona localStorage en este proyecto?
En esta app se usa localStorage para guardar temporalmente al usuario que ha iniciado sesión. Esto permite que el usuario pueda navegar entre páginas sin tener que volver a loguearse cada vez.
```Js
localStorage.setItem("loggedUser", JSON.stringify(found));

```
El valor guardado (loggedUser) contiene datos como id, name, email y role. Luego, en cualquier parte de la app, se puede obtener con:

```
const user = JSON.parse(localStorage.getItem("loggedUser"));
```
Este almacenamiento persiste incluso si se recarga la página, hasta que el usuario cierre sesión.

##  🔐 Roles: Admin vs Usuario
Los usuarios en esta app pueden tener un campo role que define sus permisos:

admin:
Tiene acceso total. Puede:

Ver todos los usuarios.

Crear nuevos usuarios.

Editar y eliminar usuarios desde la lista.

Acceder a la ruta /newuser.

user:
Tiene acceso limitado. Solo puede:

Ver la lista de usuarios.

No puede editar, eliminar ni acceder a /newuser.

La lógica de los roles se aplica tanto visualmente (ocultando botones y enlaces), como funcionalmente (bloqueando rutas protegidas).
