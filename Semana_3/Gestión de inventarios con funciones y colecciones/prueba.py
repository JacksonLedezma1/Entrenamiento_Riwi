productos = [
    {'Nombre': "Laptop", 'Precio': 800, 'Cantidad': 5},
    {'Nombre': "Mouse", 'Precio': 20, 'Cantidad': 50},
    {'Nombre': "Teclado", 'Precio': 30, 'Cantidad': 30}
]

# Función para validación de número entero positivo
def ValidarNumINT():
    while True:
        try:
            num = int(input())
            if num > 0:
                return num
            else:
                print("El valor debe ser mayor que 0. Intenta de nuevo.")
        except ValueError:
            print("Entrada no válida. Por favor ingrese un número entero.")

# Función para validación de número flotante positivo
def ValidarNumFLOAT():
    while True:
        try:
            num = float(input())
            if num > 0:
                return num
            else:
                print("El valor debe ser mayor que 0. Intenta de nuevo.")
        except ValueError:
            print("Entrada no válida. Por favor ingrese un número válido.")

# Validar respuesta sí/no
def Validarsn():
    while True:
        respuesta = input("\n¿Desea agregar más productos? (s/n): ").strip().lower()
        if respuesta in ('s', 'n'):
            return respuesta
        else:
            print("Respuesta no válida. Por favor ingrese 's' o 'n'.")

# Función de añadir productos
def Añadir_productos(nombre, precio, cantidad):
    producto = {'Nombre': nombre, 'Precio': precio, 'Cantidad': cantidad}
    productos.append(producto)

# Función de consultar productos
def consultar_productos():
    for producto in productos:
        print("\nEl producto que consultó es:\n")
        print(f"Nombre: {producto['Nombre']}, Precio: ${producto['Precio']}, Cantidad: {producto['Cantidad']}")
        print("-" * 30)

# Función de eliminar producto
def eliminar_producto(nombre):
    for producto in productos:
        if producto['Nombre'].lower() == nombre.lower():
            productos.remove(producto)
            print(f"Producto '{nombre}' eliminado correctamente.")
            return
    print(f"El producto '{nombre}' no se encontró en el inventario.")

# Función de calcular valor total del inventario
def calcular_valor_total_del_inventario():
    valor_producto = lambda producto: producto['Precio'] * producto['Cantidad']
    valor_total = sum(map(valor_producto, productos))
    print(f"\nEl valor total del inventario es: ${valor_total}")

##################################################################################################
# Main, base del programa
nombre_funcionario = input("Ingrese su nombre: ")
print("\nBuenos días", nombre_funcionario)

while True:
    print("\nLista de funciones")
    print("1. Añadir productos")
    print("2. Consultar productos")
    print("3. Eliminar productos")
    print("4. Calcular valor total del inventario")
    print("5. Cerrar programa")

    print("Elige una opción (1-5): ")
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
        print(f"\nHola {nombre_funcionario}, bienvenido a la función de eliminar productos")
        print("\nInventario actual:")
        for i, producto in enumerate(productos, start=1):
            print(f"{i}. {producto['Nombre']} - Precio: ${producto['Precio']} - Cantidad: {producto['Cantidad']}")
        print("\nIngrese el nombre del producto a eliminar: ")
        nombre = input().strip()
        eliminar_producto(nombre)
    elif opcion == 4:
        print(f"\nHola {nombre_funcionario}, bienvenido a la función de calcular el total")
        calcular_valor_total_del_inventario()
    elif opcion == 5:
        print("\nHasta luego.....")
        break

