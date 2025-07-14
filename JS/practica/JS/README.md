# Panel de Administración y Gestión de Cursos (SPA)

## Descripción
Este proyecto es una Single Page Application (SPA) desarrollada con HTML5, CSS3 y JavaScript Vanilla. Permite la gestión de usuarios y cursos, con autenticación y roles diferenciados (administrador y visitante). Utiliza `json-server` para simular una API REST.

## Características
- **Administrador:**
  - CRUD de usuarios y cursos.
  - Acceso a panel administrativo.
- **Visitante:**
  - Registro e inicio de sesión.
  - Visualización de cursos disponibles.
  - Inscripción a cursos.
- **Autenticación:**
  - Validación de credenciales.
  - Almacenamiento de sesión en localStorage.
- **Interfaz:**
  - Pantallas de login, registro, dashboard y vista pública.
  - Sidebar y header dinámicos.
  - Tablas y formularios responsivos.

## Estructura de Carpetas
```
/src
  /assets         # Estilos CSS
  /components     # Header, Sidebar, Modal
  /pages          # login.html, register.html, dashboard.html, public.html
  /services       # auth.js, users.js, courses.js, enrollments.js
  /utils          # validation.js, storage.js
  main.js         # Lógica principal y enrutamiento
README.md         # Este archivo
index.html        # Entrada principal
```

## Instalación y Uso

1. **Clona el repositorio o copia la carpeta del proyecto.**
2. **Instala json-server:**
   ```bash
   npm install -g json-server
   ```
3. **Inicia el servidor de la API:**
   ```bash
   json-server --watch db.json --port 3000
   ```
4. **Abre `index.html` en tu navegador.**

## Cómo funciona la página web

- Al abrir la página, se muestra una introducción y un botón para entrar.
- El usuario puede registrarse o iniciar sesión.
- Según el rol:
  - **Administrador:** Accede al dashboard, donde puede gestionar usuarios y cursos (crear, editar, eliminar).
  - **Visitante:** Ve los cursos disponibles y puede inscribirse en ellos.
- El header muestra el usuario logueado y permite cerrar sesión.
- El sidebar permite navegar entre usuarios y cursos (solo admin).
- Los datos se guardan y consultan usando la API simulada por json-server.

## Estructura de la base de datos (`db.json`)
```json
{
  "users": [ ... ],
  "courses": [ ... ],
  "enrollments": [ ... ]
}
```

## Tecnologías utilizadas
- HTML5
- CSS3 (Flexbox/Grid)
- JavaScript ES6+
- json-server

## Notas
- No se usan frameworks ni librerías externas (excepto json-server).
- La interfaz es responsiva y accesible.
- Puedes modificar `db.json` para agregar datos de prueba.
