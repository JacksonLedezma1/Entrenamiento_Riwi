edad=int(input("Ingrese la edad: "))
G=input("Ingrese su genero(M=mujer, H=hombre): ")
G.lower()

if G=="h":
    if edad>=65:
        print("Felicidades, te has jubilado")
    else:
        print(f"Lo siento, aunnte faltan {65-edad} años para jubilarte.")
elif G=="m":
    if edad>=60:
        print("Felicidades, te has jubilado")
    else:
        print(f"Lo siento, aunnte faltan {60-edad} años para jubilarte.")    
else: 
    print("Genero invalido.")