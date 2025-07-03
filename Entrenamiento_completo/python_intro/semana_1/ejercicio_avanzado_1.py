nota1=float(input("Agregue la primera nota: "))
if nota1>=0 and nota1<=10:
    nota2=float(input("Agregue la segunda nota: "))
    if nota2>=0 and nota2<=10:
        nota3=float(input("Agregue la tercera nota: "))
        if nota3>=0 and nota3<=10:
            nota_final=(nota1+nota2+nota3)/3
            if nota_final>=6:
                
                print("Aprobo, nota: ", nota_final)
            else:
                print("reporbo, nota: ", nota_final)
        else:
            print("Error, nota invalida")
    else:
        print("Error, nota invalida")
else:
    print("Error, nota invalida")