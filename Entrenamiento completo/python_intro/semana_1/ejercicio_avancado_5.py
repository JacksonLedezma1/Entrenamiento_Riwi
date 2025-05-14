num1=int(input("Ingrese el primer numero: "))
if num1>0:
    num2=int(input("Ingrese el segundo numero: "))
    if num2>0:
        Comparacion=bool(num1%num2)
        print(f"{num1} es multiplo de {num2} -> {Comparacion}")
    else:
        print("Error, numero menor que 0")
else:
    print("Error, numero menor que 0")