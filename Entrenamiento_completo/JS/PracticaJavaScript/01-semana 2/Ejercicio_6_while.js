/**
 Adivina el número:
Genera un número secreto (puedes usar una variable fija) 
y usa un while para pedirle al usuario que lo adivine. 
Da pistas si el número es mayor o menor.
 */

let numeroSecreto=5, num=0;
let gano=true;

while (gano) {

    //ingreso de informacion
    num=prompt("Ingrese un numero: ")
    num=Number(num)

    //intentar adivinar
    if (num>numeroSecreto) {
        console.log("El numero secreto es mayor");     
    } else if (num<numeroSecreto) {
        console.log("El numero secreto es menor");
    }

    //condicion ganadora
    if (num==numeroSecreto) {
        gano=false
    }
    
}

console.log("El numero secreto es: ",numeroSecreto)


