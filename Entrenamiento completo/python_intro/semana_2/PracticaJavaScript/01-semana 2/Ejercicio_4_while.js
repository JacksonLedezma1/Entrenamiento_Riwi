/**
 Solicitar número positivo:
Pide al usuario un número y usa un while para seguir pidiendo hasta que ingrese un número positivo
 */

let num=0
num=prompt("Ingrese un numero positivo")

while(num<0){
    num=prompt("ingrese un numero positivo")
}

console.log("numero positivo <3")