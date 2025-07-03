Heroe=0 
villano= 280
puntos=0

p_acompañado=30
p_fuerza=50
p_estado_fisico=50
P_refuerzo= 20
p_Batalla= 30

#Estado fisico s
estado_fisico= input("¿El heroe está cansado? (s/n): ")
if estado_fisico == "s":
    puntos=puntos+p_estado_fisico-50
    #acompañado s
    Acompañado= input("¿Está solo? (s/n): ")
    if Acompañado== "s":
        puntos=puntos+p_acompañado-20
        #Fuerza F
        fuerzaV= input("¿El super villano está fuerte o débil?: (f/d) ")
        if fuerzaV == "f":
            puntos=puntos+p_fuerza+30 
            refuerzos=input("Desea llamar refuerzos?(s/n):")
            if refuerzos=="s":
                puntos=puntos+P_refuerzo+50
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            elif refuerzos=="n":
                puntos=puntos+P_refuerzo-30
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            else:
                print("Error, entrada no valida.")
        elif fuerzaV == "d":
            villano=villano-70
            puntos=puntos+p_fuerza-20
            refuerzos=input("Desea llamar refuerzos?(s/n):")
            if refuerzos=="s":
                puntos=puntos+P_refuerzo+50
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            elif refuerzos=="n":
                puntos=puntos+P_refuerzo-30
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            else:
                print("Error, entrada no valida.")
        else:
             print("Error, entrada no valida.")
            
    #acompañado n
    elif Acompañado== "n":
        puntos=puntos+p_acompañado+30
        #Fuerza F
        fuerzaV= input("¿El super villano está fuerte o débil?: (f/d) ")
        if fuerzaV == "f":
            puntos=puntos+p_fuerza+30 
            refuerzos=input("Desea llamar refuerzos?(s/n):")
            if refuerzos=="s":
                puntos=puntos+P_refuerzo+50
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            elif refuerzos=="n":
                puntos=puntos+P_refuerzo-30
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            else:
                print("Error, entrada no valida.")
        elif fuerzaV == "d":
            villano=villano-70
            puntos=puntos+p_fuerza-20
            refuerzos=input("Desea llamar refuerzos?(s/n):")
            if refuerzos=="s":
                puntos=puntos+P_refuerzo+50
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            elif refuerzos=="n":
                puntos=puntos+P_refuerzo-30
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            else:
                print("Error, entrada no valida.")
            
        else:
             print("Error, entrada no valida.")
#estado fisico n
elif estado_fisico == "n":
    puntos=puntos+p_estado_fisico+50
    #acompañado s
    Acompañado= input("¿Está solo? (s/n): ")
    if Acompañado== "s":
        puntos=puntos+p_acompañado-20
        #Fuerza F
        fuerzaV= input("¿El super villano está fuerte o débil?: (f/d) ")
        if fuerzaV == "f":
            puntos=puntos+p_fuerza+30 
            refuerzos=input("Desea llamar refuerzos?(s/n):")
            if refuerzos=="s":
                puntos=puntos+P_refuerzo+50
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            elif refuerzos=="n":
                puntos=puntos+P_refuerzo-30
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            else:
                print("Error, entrada no valida.")
        elif fuerzaV == "d":
            villano=villano-70
            puntos=puntos+p_fuerza-20
            refuerzos=input("Desea llamar refuerzos?(s/n):")
            if refuerzos=="s":
                puntos=puntos+P_refuerzo+50
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            elif refuerzos=="n":
                puntos=puntos+P_refuerzo-30
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            else:
                print("Error, entrada no valida.")
        else:
             print("Error, entrada no valida.")
            
    #acompañado n
    elif Acompañado== "n":
        puntos=puntos+p_acompañado+30
        #Fuerza F
        fuerzaV= input("¿El super villano está fuerte o débil?: (f/d) ")
        if fuerzaV == "f":
            puntos=puntos+p_fuerza+30 
            refuerzos=input("Desea llamar refuerzos?(s/n):")
            if refuerzos=="s":
                puntos=puntos+P_refuerzo+50
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            elif refuerzos=="n":
                puntos=puntos+P_refuerzo-30
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            else:
                print("Error, entrada no valida.")
        elif fuerzaV == "d":
            villano=villano-70
            puntos=puntos+p_fuerza-20
            refuerzos=input("Desea llamar refuerzos?(s/n):")
            if refuerzos=="s":
                puntos=puntos+P_refuerzo+50
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            elif refuerzos=="n":
                puntos=puntos+P_refuerzo-30
                Batalla=input("Desea pelear con el villano?(s/n): ")
                if Batalla=="s":
                    puntos=puntos+p_Batalla+20
                    print(f"Tus puntos son: {puntos},")
                    print(f"Puntos del villano: {villano}")
                elif Batalla=="n":
                    print("El villano no te dejo ir")
                    print("Aura=-100000000")
                else:
                    print("Error, entrada no valida.")
            else:
                print("Error, entrada no valida.")
            
        else:
             print("Error, entrada no valida.")
