/**
 Número de intentos:
Pide al usuario que ingrese un número entre 1 y 10. 
Si no lo hace, sigue pidiéndolo hasta que lo haga correctamente.
 */

let numero=0,intentos=true,contador=0;
gano=true

while (gano) {
    numero=prompt("Ingrese un numero del 1 al 10: ");
    numero=Number(numero);

    if (numero>=0 && numero<=10) {
        console.log("Numero ingresado correctamente.");
        gano=false;
        break
    } else {
        console.log("Numero incorrecto!!")
        contador++
    }
    console.log("Intento #",contador)
}
console.log("El numero de intentos total fue: ", contador)