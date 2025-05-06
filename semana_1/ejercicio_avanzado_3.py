print(" ")
sueldo_bruto=float(input("Ingrese su sueldo neto: "))
if sueldo_bruto>0:
    
    descuento=float(input("Ingrese el descuento del sueldo: "))
    if descuento>0:
        

        sueldo_neto = sueldo_bruto - (sueldo_bruto * descuento / 100)
        print(" ")
        print("Sueldo bruto: ",sueldo_bruto, ", Descuento: ",descuento, ", Sueldo neto: ",sueldo_neto)
    else: 
        print("Descuento invalido.")
else:
    print("Error, sueldo invalido.")