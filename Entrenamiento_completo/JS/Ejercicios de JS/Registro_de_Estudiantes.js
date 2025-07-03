// Diccionario principal
let estudiantes = {};

// Función para agregar un nuevo estudiante
function agregarEstudiante(nombre, edad, calificacion) {
  estudiantes[nombre] = {
    edad: edad,
    calificacion: calificacion
  };
  alert(`Estudiante ${nombre} agregado correctamente.`);
}

// Función para modificar la calificación
function modificarCalificacion(nombre, nuevaCalificacion) {
  if (estudiantes[nombre]) {
    estudiantes[nombre].calificacion = nuevaCalificacion;
    alert(`Calificación de ${nombre} actualizada a ${nuevaCalificacion}.`);
  } else {
    alert(`Estudiante ${nombre} no encontrado.`);
  }
}

// Función para mostrar todos los estudiantes
function mostrarEstudiantes() {
  alert("Lista de estudiantes:");
  for (let nombre in estudiantes) {
    const datos = estudiantes[nombre];
    alert(`- ${nombre}: Edad = ${datos.edad}, Calificación = ${datos.calificacion}`);
  }
}

// Función para eliminar un estudiante
function eliminarEstudiante(nombre) {
  if (estudiantes[nombre]) {
    delete estudiantes[nombre];
    alert(`Estudiante ${nombre} eliminado.`);
  } else {
    alert(`Estudiante ${nombre} no encontrado.`);
  }
}
//Main
function menuPrincipal() {

    // Referencias al select y al párrafo donde se muestra el mensaje
    let seleccionar = document.querySelector("#Menu");
    // Escuchador de eventos para detectar el cambio de selección
    seleccionar.addEventListener("change", menuPrincipal);
    //leer valor de seleccionar
    let eleccion = seleccionar.value;
    // Llamadas a las funciones dependiendo de la opción seleccionada
    if (eleccion === "Agregar") {
        let nombre = prompt("Ingrese el nombre: ");
        let edad = parseInt(prompt("Ingrese la edad: "));
        let calificacion = prompt("Ingrese la calificaion: ");
        agregarEstudiante(nombre, edad, calificacion);
    } else if (eleccion === "modificar_calificaciones") {
        nombre = prompt("Ingrese el nombre: ");
        let nuevaCalificacion = prompt("Ingrese la calificaion: ");
        modificarCalificacion(nombre, nuevaCalificacion);
    } else if (eleccion === "mostrar") {
        mostrarEstudiantes();
    } else if (eleccion === "Eliminar") {
        nombre = prompt("Ingrese el nombre: ");
        eliminarEstudiante(nombre);
    } else if (eleccion ==="cerrar"){
        alert("Programa finalizado.");
    }
}

menuPrincipal()