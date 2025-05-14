/**
 Contar vocales en una palabra:
 Pide al usuario una palabra y usa un while para contar cuántas vocales tiene.
*/

let palabra = prompt("Escribe una palabra:").toLowerCase();
let contador = 0, i = 0;

console.log("La palabra es:", palabra);
console.log("Número de caracteres:", palabra.length);

while (i < palabra.length) {
    let letra = palabra[i];
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        contador++;
    }
    i++;
}

console.log("La cantidad de vocales es:", contador);
