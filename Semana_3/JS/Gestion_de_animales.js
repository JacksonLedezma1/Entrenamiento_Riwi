// Arrays para guardar los datos de las mascotas
let nombres = [];
let edades = [];
let salud = [];

// Referencias al select y al párrafo donde se muestra el mensaje
let seleccionar = document.querySelector("#Menu");

// Escuchador de eventos para detectar el cambio de selección
seleccionar.addEventListener("change", menuPrincipal);

function menuPrincipal() {
    let eleccion = seleccionar.value;

    // Llamadas a las funciones dependiendo de la opción seleccionada
    if (eleccion === "Agregar_una_mascota") {
        agregarMascota();
    } else if (eleccion === "Eliminar_una_mascota") {
        eliminarMascota();
    } else if (eleccion === "Listar_todas_las_mascotas") {
        mostrarMascotas();
    } else if (eleccion === "Salir_del_programa") {
        alert("Programa finalizado.");
    }
}

// Función para agregar una mascota
function agregarMascota() {
    let nombre = prompt("Ingrese el nombre de la mascota:");
    let edad = parseInt(prompt("Ingrese la edad de la mascota:"));
    let estadoSalud = prompt("Ingrese el estado de salud de la mascota:");

    // Guardamos los datos en los arrays
    nombres.push(nombre);
    edades.push(edad);
    salud.push(estadoSalud);

    alert("Mascota agregada con éxito.");
}

// Función para eliminar una mascota
function eliminarMascota() {
    let nombreEliminar = prompt("Ingrese el nombre de la mascota a eliminar:");
    let index = nombres.indexOf(nombreEliminar);

    if (index !== -1) {
        // Eliminamos los datos en los tres arrays
        nombres.splice(index, 1);
        edades.splice(index, 1);
        salud.splice(index, 1);

        alert("Mascota eliminada con éxito.");
    } else {
        alert("Mascota no encontrada.");
    }
}

// Función para listar todas las mascotas
function mostrarMascotas() {
    if (nombres.length === 0) {
        alert("No hay mascotas registradas.");
        return;
    }

    let texto = "Mascotas registradas:\n";
    for (let i = 0; i < nombres.length; i++) {
        texto += `${i + 1}. Nombre: ${nombres[i]}, Edad: ${edades[i]}, Estado de Salud: ${salud[i]}\n`;
    }

    alert(texto); // Muestra todas las mascotas en un solo mensaje
}
