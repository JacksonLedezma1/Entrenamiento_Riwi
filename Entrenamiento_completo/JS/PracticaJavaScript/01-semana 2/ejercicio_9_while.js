/**
 Sumar hasta detenerse:
Pide números al usuario y súmalos hasta que ingrese "0",
momento en el que se imprimirá el total.
 */

let numero=0,total=0;

while (true) {

    numero=prompt("Ingrese numeros(cuando quieras salir ingresa 0): ")
    numero=Number(numero)
    total=total+numero
    if (numero==0) {
        console.log("Cuenta Acabada.")
        console.log("La suma total es: ",total)
        break
     }
    
}