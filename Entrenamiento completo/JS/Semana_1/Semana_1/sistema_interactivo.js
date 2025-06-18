let resultMessage = document.getElementById('resultMessage');

boton.addEventListener("click", function(event) {

    event.preventDefault();
    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("Edad").value;
    let mensaje = "";

    // Validar que los campos no estén vacíos y que la edad sea un número válido
    if (nombre === "" || edad === "") {
        mensaje = "Por favor, completa todos los campos con un valor valido.";
    } else if (isNaN(edad) || edad < 0 || edad > 120) {
        mensaje = "Por favor, ingresa una edad válida entre 0 y 120.";
    } else if (edad < 18) {
        mensaje = `Hola ${nombre}, tienes menos de 18 años, ¡Sigue aprendiendo y disfrutando del codigo! `;
    } else if (edad >= 18) {
        mensaje = `Hola ${nombre}, tienes mas de 18 años, ¡Preparate para grandes oportunidades en el mundo de la programacion! `;
    }
    resultMessage.textContent = mensaje;
});
