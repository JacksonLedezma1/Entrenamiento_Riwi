import re
productos = [
    {'Nombre': "Laptop", 'Precio': 800, 'Cantidad': 5},
    {'Nombre': "Mouse", 'Precio': 20, 'Cantidad': 50},
    {'Nombre': "Teclado", 'Precio': 30, 'Cantidad': 30}
]

# Validación de número entero positivo
def ValidarNumINT():
    while True:
        entrada = input()
        if entrada.isdigit():
            num = int(entrada)
            if num > 0:
                return num
            else:
                print("El valor debe ser mayor que 0. Intenta de nuevo.")
        else:
            print("Entrada no válida. Por favor ingrese un número entero positivo.")

# Validación de número flotante positivo
def ValidarNumFLOAT():
    while True:
        entrada = input()
        if entrada.replace('.', '', 1).isdigit() and entrada.count('.') <= 1:
            num = float(entrada)
            if num > 0:
                return num
            else:
                print("El valor debe ser mayor que 0. Intenta de nuevo.")
        else:
            print("Entrada no válida. Por favor ingrese un número válido positivo.")

# Validar respuesta sí/no
def Validarsn():
    while True:
        respuesta = input("\n¿Desea continuar? (s/n): ").strip().lower()
        if respuesta in ('s', 'n'):
            return respuesta
        else:
            print("Respuesta no válida. Por favor ingrese 's' o 'n'.")


def validar_letras():
    patron = r"^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$"
    while True:
        texto = input("")
        if re.fullmatch(patron, texto):
            return texto
        else:
            print("Error: Solo se permiten letras.")


# Verifica si el producto ya existe
def producto_existe(nombre):
    return any(p['Nombre'].lower() == nombre.lower() for p in productos)

# Añadir productos con validación para evitar duplicados
def Añadir_productos(nombre, precio, cantidad):
    if producto_existe(nombre):
        print(f"El producto '{nombre}' ya existe en el inventario. No se puede duplicar.")
    else:
        producto = {'Nombre': nombre, 'Precio': precio, 'Cantidad': cantidad}
        productos.append(producto)
        print(f"Producto '{nombre}' añadido exitosamente.")

# Consultar productos
def consultar_productos():
    if not productos:
        print("No hay productos en el inventario.")
        return
    for producto in productos:
        print("\nEl producto que consultó es:\n")
        print(f"Nombre: {producto['Nombre']}, Precio: ${producto['Precio']}, Cantidad: {producto['Cantidad']}")
        print("-" * 40)
    

# Actualizar precios
def actualizarPrecios(nombre, precio):
    for producto in productos:
        if producto['Nombre'].lower() == nombre.lower():
            producto['Precio'] = precio
            print(f"Precio del producto '{nombre}' actualizado a ${precio}.")
            return
    print(f"El producto '{nombre}' no se encontró en el inventario.")

# Eliminar producto
def eliminar_producto(nombre):
    for producto in productos:
        if producto['Nombre'].lower() == nombre.lower():
            productos.remove(producto)
            print(f"Producto '{nombre}' eliminado correctamente.")
            return
    print(f"El producto '{nombre}' no se encontró en el inventario.")

# Calcular valor total
def calcular_valor_total_del_inventario():
    valor_producto = lambda producto: producto['Precio'] * producto['Cantidad']
    valor_total = sum(map(valor_producto, productos))
    print(f"\nValor total del inventario: ${valor_total}")

##################################################################################################

# Main
nombre_funcionario = input("Ingrese su nombre: ")
print("\nBuenos días", nombre_funcionario)

while True:
    print("\nLista de funciones")
    print("1. Añadir productos")
    print("2. Consultar productos")
    print("3. Actualizar precio")
    print("4. Eliminar productos")
    print("5. Calcular valor total del inventario")
    print("6. Cerrar programa")

    print("Elige una opción (1-6): ")
    opcion = ValidarNumINT()

    if opcion == 1:
        while True:
            print(f"Hola {nombre_funcionario}, bienvenido a la función de agregar productos")
            print("Ingrese el nombre del producto: ")
            nombre = input().strip()
            print("Ingrese el valor del producto: ")
            precio = ValidarNumFLOAT()
            print("Ingrese la cantidad de producto: ")
            cantidad = ValidarNumINT()
            Añadir_productos(nombre, precio, cantidad)
            if Validarsn() == 'n':
                break
    elif opcion == 2:
        print(f"\nHola {nombre_funcionario}, bienvenido a la función de consultar productos")
        consultar_productos()
    elif opcion == 3:
        print("Ingrese el nombre del producto: ")
        nombre = input().strip()
        print("Ingrese el nuevo valor del producto: ")
        precio = ValidarNumFLOAT()
        actualizarPrecios(nombre, precio)
    elif opcion == 4:
        print(f"\nHola {nombre_funcionario}, bienvenido a la función de eliminar productos")
        print("\nInventario actual:")
        for i, producto in enumerate(productos, start=1):
            print(f"{i}. {producto['Nombre']} - Precio: ${producto['Precio']} - Cantidad: {producto['Cantidad']}")
        print("\nIngrese el nombre del producto a eliminar: ")
        nombre = input().strip()
        eliminar_producto(nombre)
    elif opcion == 5:
        print(f"\nHola {nombre_funcionario}, bienvenido a la función de calcular el total")
        calcular_valor_total_del_inventario()
    elif opcion == 6:
        print("\nHasta luego.....")
        break
    else:
        print("Opción no válida. Intente de nuevo.")
        