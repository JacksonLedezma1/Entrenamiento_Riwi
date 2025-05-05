/**
 Menú interactivo:
Crea un menú con while que permita al usuario elegir entre opciones 
(por ejemplo, "1. Saludar", "2. Despedirse", "3. Salir") 
y solo termine cuando elija la opción de salir.
 */

let menu=0;

while(menu!=3){
    menu=prompt("1.Saludar, 2. Despedirse, 3. Salir");
    menu=Number(menu)
    
    switch (menu) {
        case 1:
            console.log("holaaaaaaaaa")
            break;
        
        case 2: 
            console.log("Chao")
            break;  
    }
}

console.log("Saliste del ciclo while")