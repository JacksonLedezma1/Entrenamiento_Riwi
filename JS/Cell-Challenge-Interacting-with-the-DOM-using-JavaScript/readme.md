### Cell Challenge: Interacting with the DOM using JavaScript

## Descripción de las secciones y botones

Este proyecto fue realizado en equipo y cada sección implementa una funcionalidad interactiva diferente usando JavaScript y manipulación del DOM:

- **Conditional Greeting:**
  - Sección reservada para implementar un saludo condicional. Actualmente no tiene funcionalidad, pero está preparada para mostrar un mensaje personalizado según ciertas condiciones.

  **By:** Alejandro Usuga


- **Counter:**
  - Un contador interactivo con botones para incrementar (+), decrementar (-) y reiniciar (Reset) el valor mostrado. Permite practicar el manejo de eventos y la actualización dinámica del DOM.

  **By:** Jackson Ledezma

- **Random Selector:**
  - Al presionar el botón, se muestra un mensaje motivacional aleatorio en pantalla. El sistema evita que se repita el mismo mensaje dos veces seguidas. Esta sección refuerza el uso de arrays, generación de números aleatorios y manipulación de texto en el DOM.

  **By:** Felipe Marin

- **Input Validation:**
  - Un formulario que valida los campos de nombre, correo electrónico y contraseña. Muestra advertencias si los datos no cumplen los requisitos mínimos (nombre de al menos 6 caracteres, email válido, contraseña de al menos 8 caracteres). Si todo es correcto, muestra un mensaje de éxito. Esta sección pone en práctica la validación de formularios y el manejo de eventos submit.

  **By:** Jose Ospina

- **Change Styles:**
  - Permite cambiar la forma y el fondo de un elemento visual mediante dos botones. Se alterna entre diferentes estilos de formas (cuadrado, círculo, rectángulo, etc.) y fondos con gradientes de colores. Refuerza el uso de clases CSS dinámicas y la manipulación de estilos desde JavaScript.

  **By:** Jose Granados

- **Loop Button:**
  - Al presionar el botón, se muestran u ocultan tarjetas de los emperadores romanos del siglo I. Cada tarjeta se genera dinámicamente e incluye imagen, nombre y fechas de reinado. Esta sección practica la creación dinámica de elementos, el uso de arrays de datos y la interacción avanzada con el DOM.

  **By:** Jose Granados

Cada sección fue desarrollada colaborativamente, permitiendo a cada integrante del equipo aportar ideas y soluciones para lograr una experiencia interactiva y didáctica.

## Integración del código JavaScript en el HTML

El archivo principal `index.html` contiene la estructura de la página y define las diferentes secciones (cards) para cada funcionalidad. Cada sección tiene elementos HTML con identificadores (`id`) o clases específicas, lo que permite que el archivo `script.js` los seleccione y manipule dinámicamente.

El archivo `script.js` se enlaza al final del `body` en el HTML con la línea:
```html
<script src="./script.js"></script>
```
Esto asegura que el DOM esté cargado antes de que el JavaScript se ejecute.

### ¿Cómo interactúa cada sección?
- **Conditional Greeting:** El botón ejecuta la función `saludar()` al hacer clic. Esta función obtiene la hora actual y muestra un saludo personalizado ("Good morning!", "Good afternoon!" o "Good evening!") en el elemento correspondiente del DOM, dependiendo del momento del día.
- **Counter, Random Selector, Input Validation, Change Styles y Loop Button**: Cada una tiene botones y/o campos de entrada con un `id` único. El JavaScript utiliza `document.getElementById` o `document.querySelector` para obtener referencias a estos elementos y luego les asigna eventos (`addEventListener` o atributos `onclick`).
- **Manipulación del DOM**: Cuando el usuario interactúa (por ejemplo, hace clic en un botón), el código ejecuta funciones que actualizan el contenido, el estilo o la visibilidad de los elementos en la página, mostrando resultados inmediatos.
- **Creación dinámica**: En el caso del Loop Button, el JavaScript genera tarjetas (cards) de manera dinámica usando `document.createElement` y las inserta en el contenedor correspondiente.
- **Validación de formularios**: El formulario de validación intercepta el evento `submit`, previene el envío por defecto y muestra mensajes de advertencia o éxito según la validación de los campos.

### Estructura de archivos
- `index.html`: Define la estructura y los elementos de la interfaz.
- `styles.css`: Contiene los estilos visuales para toda la página y las secciones.
- `script.js`: Implementa toda la lógica interactiva, seleccionando y manipulando los elementos definidos en el HTML.

Esta integración permite que la página sea completamente interactiva y que cada sección funcione de manera independiente, pero bajo una misma estructura y lógica de trabajo en equipo.
