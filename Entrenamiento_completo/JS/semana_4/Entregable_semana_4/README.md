# Interfaz Interactiva con Persistencia de Datos

Este proyecto es una pequeña aplicación web que permite al usuario ingresar su nombre y edad, guardar estos datos en el almacenamiento local del navegador (localStorage), y ver cuántas veces ha interactuado con la aplicación durante la sesión actual (sessionStorage).

## ¿Cómo funciona?

- **Formulario de usuario:** El usuario ingresa su nombre y edad en el formulario.
- **Validación:** El formulario valida que el nombre no esté vacío y que la edad sea un número entre 1 y 120.
- **Guardar datos:** Al hacer clic en "Guardar", los datos se almacenan en localStorage y se muestran en pantalla.
- **Contador de interacciones:** Cada vez que se guarda información, se incrementa un contador de interacciones usando sessionStorage, mostrando cuántas veces se ha interactuado en la sesión actual.
- **Limpiar datos:** El botón "Limpiar Datos" elimina el nombre y la edad almacenados en localStorage y actualiza la vista.

## Archivos principales

- `index.html`: Estructura de la página y el formulario.
- `styles.css`: Estilos visuales para la interfaz.
- `script.js`: Lógica de validación, almacenamiento y contador de interacciones.

## Explicación técnica

- **localStorage:** Permite guardar datos que persisten incluso si se cierra el navegador.
- **sessionStorage:** Guarda datos solo durante la sesión actual (se borra al cerrar la pestaña).
- **Validación:** Se asegura que los datos sean correctos antes de guardarlos.
- **Eventos:** Se usan eventos para manejar el envío del formulario y el botón de limpiar datos.

## ¿Cómo usar la aplicación?

1. Abre el archivo `index.html` en tu navegador.
2. Ingresa tu nombre y edad en el formulario.
3. Haz clic en "Guardar" para almacenar los datos y verlos en pantalla.
4. El contador mostrará cuántas veces has guardado datos en la sesión actual.
5. Si quieres borrar los datos almacenados, haz clic en "Limpiar Datos".

## ¿Cómo se hizo?

- Se creó un formulario en HTML con campos para nombre y edad.
- Se aplicaron estilos con CSS para mejorar la apariencia.
- Se implementó la lógica en JavaScript para:
  - Validar los datos ingresados.
  - Guardar y mostrar los datos usando localStorage.
  - Contar las interacciones usando sessionStorage.
  - Limpiar los datos almacenados.
- Se documentó el código JavaScript para facilitar su comprensión.

## Requisitos

- Un navegador web moderno (Chrome, Firefox, Edge, etc.).
- No se requiere instalación ni servidor, solo abrir el archivo `index.html`.

---

