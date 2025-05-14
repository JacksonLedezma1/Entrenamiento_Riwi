nombre1=input("Ingrese el nombre de la primera persona: ")
edad1=int(input("Ingrese la edad de la primera persona: "))
if edad1>18:
    nombre2=input("Ingrese el nombre de la segunda persona: ")
    edad2=int(input("Ingrese la edad de la segunda persona: "))

    if edad2>18:
        if nombre1!=nombre2:
            Diferencia_edad=abs(edad1-edad2)
            if Diferencia_edad>10:
                print("Felicitaciones, van a ser la pareja perfecta <3.")
            else:
                print(f"Diferencia de edad({Diferencia_edad} años), es superior a 10 años")
        else:
            print("No se permiten nombres iguales.")
    else:   
        print("Lo siento, no eres mayor de edad.")

else:
    print("Lo siendo, no eres mayor de edad.")        