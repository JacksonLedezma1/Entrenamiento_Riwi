## Curso Completo de HTML y CSS — Versión Detallada por Módulos

Este curso está diseñado para personas con conocimientos previos en programación que deseen dominar HTML y CSS desde sus fundamentos hasta técnicas avanzadas de desarrollo web moderno. Cada módulo está estructurado en:

1. Introducción
2. Teoría detallada
3. Ejemplos explicados
4. Ejercicios prácticos

---

### Módulo 1: Introducción y Fundamentos de HTML

#### 🎯 Objetivos:

* Entender qué es HTML y cómo funciona.
* Conocer la estructura de un documento HTML5.
* Aprender las etiquetas semánticas fundamentales.

#### 📚 Teoría Detallada:

HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. Describe la estructura del contenido mediante "etiquetas".

Estructura básica de un documento HTML5:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la página</title>
</head>
<body>
  <h1>¡Hola, mundo!</h1>
</body>
</html>
```

Etiquetas semánticas importantes:

* `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

#### 🧪 Ejemplo:

```html
<main>
  <section>
    <h2>Sobre nosotros</h2>
    <p>Somos una empresa dedicada al desarrollo web.</p>
  </section>
</main>
```

#### 📝 Ejercicios sugeridos:

1. Crea una página HTML con `<header>`, `<nav>`, `<main>`, y `<footer>`.
2. Usa etiquetas semánticas para estructurar una noticia.

---

### Módulo 2: Texto, Enlaces, Imágenes y Multimedia

#### 🎯 Objetivos:

* Dominar etiquetas de texto.
* Insertar enlaces, imágenes y videos.

#### 📚 Teoría Detallada:

**Texto:** `<h1>` a `<h6>`, `<p>`, `<strong>`, `<em>`, `<br>`, `<hr>`

**Enlaces:** `<a href="url">Texto</a>`

**Imágenes:** `<img src="ruta" alt="Descripción">`

**Multimedia:**

* `<video src="video.mp4" controls></video>`
* `<audio src="audio.mp3" controls></audio>`

#### 🧪 Ejemplo:

```html
<p>Visita nuestro <a href="https://www.ejemplo.com">sitio web</a>.</p>
<img src="logo.png" alt="Logo de la empresa">
```

#### 📝 Ejercicios sugeridos:

1. Crea una página con títulos y párrafos variados.
2. Inserta una imagen con descripción alternativa.
3. Agrega un enlace a una página externa.
4. Reproduce un video y audio embebido.

---

### Módulo 3: Listas, Tablas y Estructura HTML Avanzada

#### 🎯 Objetivos:

* Crear listas ordenadas y desordenadas.
* Dominar las tablas en HTML.
* Usar `div`, `span`, y comentarios.

#### 📚 Teoría Detallada:

**Listas:**

* `<ul>`: desordenada
* `<ol>`: ordenada
* `<li>`: ítem de lista

**Tablas:**

* `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`

**Otras etiquetas útiles:**

* `<div>`: contenedor genérico (bloque)
* `<span>`: contenedor genérico (línea)
* `<!-- comentario -->`

#### 🧪 Ejemplo:

```html
<table>
  <thead>
    <tr><th>Nombre</th><th>Edad</th></tr>
  </thead>
  <tbody>
    <tr><td>Juan</td><td>30</td></tr>
  </tbody>
</table>
```

#### 📝 Ejercicios sugeridos:

1. Crea una lista de tareas.
2. Construye una tabla de productos.
3. Usa `div` para agrupar secciones visuales.

---

### Módulo 4: Selectores CSS y Modelo de Caja (Box Model)

#### 🎯 Objetivos:

* Conocer los diferentes tipos de selectores en CSS.
* Comprender cómo funciona el modelo de caja (Box Model).
* Aplicar márgenes, rellenos y bordes correctamente.

#### 📚 Teoría Detallada:

##### Selectores comunes:

* Universal: `*`
* Etiqueta: `p`, `h1`, `div`, etc.
* Clase: `.nombre`
* ID: `#nombre`
* Combinadores: `div > p`, `ul li`, etc.

##### Box Model:

Cada elemento en CSS es una caja con:

* `content`: el contenido
* `padding`: espacio entre contenido y borde
* `border`: contorno del elemento
* `margin`: espacio fuera del borde

#### 🧪 Ejemplo:

```css
.caja {
  width: 200px;
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}
```

```html
<div class="caja">Contenido dentro de una caja</div>
```

#### 📝 Ejercicios sugeridos:

1. Crea tres tipos de selectores: por etiqueta, clase e ID.
2. Diseña una caja con distintos márgenes, bordes y rellenos.
3. Anida elementos y aplica selectores combinados.

---

### Módulo 5: Posicionamiento y Display

#### 🎯 Objetivos:

* Controlar la disposición de los elementos.
* Usar propiedades como `display`, `position`, `z-index`, `float`.

#### 📚 Teoría Detallada:

##### Tipos de `display`:

* `block`: ocupa toda la línea.
* `inline`: dentro de una línea.
* `inline-block`: mezcla de ambos.
* `none`: oculta el elemento.

##### `position`:

* `static` (por defecto), `relative`, `absolute`, `fixed`, `sticky`.
* Acompañado de `top`, `right`, `bottom`, `left`.

#### 🧪 Ejemplo:

```css
.fixed-banner {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: yellow;
}
```

#### 📝 Ejercicios sugeridos:

1. Crea un menú fijo en la parte superior.
2. Usa `relative` y `absolute` para colocar cajas dentro de un contenedor.
3. Prueba distintos valores de `display`.

---

### Módulo 6: Flexbox

#### 🎯 Objetivos:

* Dominar el sistema de distribución flexible de CSS.
* Alinear elementos horizontal y verticalmente.

#### 📚 Teoría Detallada:

##### Propiedades clave:

* Contenedor: `display: flex;`, `flex-direction`, `justify-content`, `align-items`
* Ítems: `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`

#### 🧪 Ejemplo:

```css
.contenedor {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

```html
<div class="contenedor">
  <div>Caja 1</div>
  <div>Caja 2</div>
</div>
```

#### 📝 Ejercicios sugeridos:

1. Crea una barra de navegación con `flex`.
2. Distribuye tarjetas de producto con espacio uniforme.

---

### Módulo 7: Grid CSS

#### 🎯 Objetivos:

* Organizar elementos en filas y columnas.
* Aprender a usar `grid-template`, `gap`, `grid-area`.

#### 📚 Teoría Detallada:

##### Propiedades importantes:

* `display: grid;`
* `grid-template-columns`, `grid-template-rows`
* `gap`, `grid-column`, `grid-row`

#### 🧪 Ejemplo:

```css
.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

```html
<div class="grid-layout">
  <div>Caja 1</div>
  <div>Caja 2</div>
  <div>Caja 3</div>
</div>
```

#### 📝 Ejercicios sugeridos:

1. Crea un diseño de galería de imágenes con Grid.
2. Organiza una página con cabecera, contenido y pie.

---

### Módulo 8: Formularios en HTML y su Estilo

#### 🎯 Objetivos:

* Crear formularios accesibles y funcionales.
* Estilizar formularios con CSS.

#### 📚 Teoría Detallada:

##### Elementos de formulario:

* `<form>`, `<input>`, `<textarea>`, `<select>`, `<label>`, `<button>`

##### Tipos de `input`:

* `text`, `email`, `password`, `checkbox`, `radio`, `submit`, etc.

#### 🧪 Ejemplo:

```html
<form action="#" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Enviar</button>
</form>
```

#### 📝 Ejercicios sugeridos:

1. Crea un formulario con nombre, email y mensaje.
2. Estílizalo para que sea atractivo visualmente.

---

### Módulo 9: Animaciones y Transiciones

#### 🎯 Objetivos:

* Usar `transition`, `transform` y `animation` para crear efectos visuales.

#### 📚 Teoría Detallada:

* `transition`: cambio suave entre estilos.
* `transform`: rotar, escalar, mover.
* `animation`: ciclos completos con `@keyframes`.

#### 🧪 Ejemplo:

```css
.boton {
  background-color: blue;
  transition: background-color 0.3s;
}
.boton:hover {
  background-color: red;
}
```

#### 📝 Ejercicios sugeridos:

1. Crea una animación que haga que un div rebote.
2. Añade transición a botones al pasar el mouse.

---

### Módulo 10: Proyecto Final

#### 🎯 Objetivo:

Aplicar todo lo aprendido en una sola página web completa.

#### 📝 Requisitos del proyecto:

* Página con estructura completa HTML5.
* Navegación entre secciones.
* Uso de CSS, Flexbox o Grid.
* Formulario funcional (sin backend).
* Diseño adaptable y animaciones.

---

### 🏁 Conclusión

Has finalizado el curso completo de HTML y CSS. Ya tienes las herramientas para desarrollar páginas web modernas y visualmente atractivas. ¡Ahora practica y experimenta por tu cuenta!
