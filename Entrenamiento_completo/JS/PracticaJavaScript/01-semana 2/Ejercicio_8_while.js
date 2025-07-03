/**
 Validar contraseña:
Pide al usuario una contraseña y usa un while para seguir pidiendo hasta que ingrese "python123".
 */

let contraseña="python123", ingcontraseña;

while (ingcontraseña!=contraseña) {
    ingcontraseña=prompt("Ingrese la contraseña").toLowerCase()
    if (ingcontraseña!=contraseña) {
        console.log("Contraseña Incorrecta.")
    } else {
        console.log("Contraseña correcta. ")
    }
}
