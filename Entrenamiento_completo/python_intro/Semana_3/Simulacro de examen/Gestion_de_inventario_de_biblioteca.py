import re
inventory = [
    {"title": "Cien años de Soledad", "price": 10.0, "quantity": 100},
    {"title": "El Codigo Da Vinci", "price": 15.0, "quantity": 50},
    {"title": "Los Juegos Del Hambre", "price": 20.0, "quantity": 30},
    {"title": "La Odisea", "price": 25.0, "quantity": 10},
    {"title": "La Divina Comedia", "price": 30.0, "quantity": 70}
]

def validate_letters():
    pattern = r"^[\wÁÉÍÓÚÜÑáéíóúüñ\s.,@#!$%&()\-]+$"
    while True:
        text = input()
        if re.fullmatch(pattern, text):
            return text
        else:
            print("Error: Only letters and spaces are allowed.")

# Validation of positive integer
def ValidationNumINT():
    while True:
        number = input()
        if number.isdigit():
            number = int(number)
            if number > 0:
                return number
            else:
                print("The value must be greater than 0. Try again.")
        else:
            print("Invalid entry. Please enter a positive valid number.")

# Positive floating number validation
def ValidatioNumFLOAT():
    while True:
        number = input()
        if number.replace('.', '', 1).isdigit() and number.count('.') <= 1:
            number = float(number)
            if number > 0:
                return number
            else:
                print("The value must be greater than 0. Try again.")
        else:
            print("Invalid entry. Please enter a positive valid number.")

#Validate answer yes/no
def Validationsn():
    while True:
        respuesta = input().strip().lower()
        if respuesta in ('s', 'n'):
            return respuesta
        else:
            print("Invalid response. Please enter 's' or 'n'.")

# Check if the product already exists
def exists_book(title):
    return any(book['title'].lower() == title.lower() for book in inventory)

# Funtion to add books to the inventory 
def AddBook(title,price,quality):
    book={"title": title, "price": price, "quantity": quality}
    inventory.append(book)

# Consult books
def consultBooks():
    if not inventory:
        print("There are no products in stock.")
        return
    for Book in inventory:
        print("\nThe product you are interested in is:\n")
        print(f"Title: {Book['title']}, Price: ${Book['price']}, quantity: {Book['quantity']}")
        print("-" * 50)

#Update Price
def UpdatePrice(title,price):
    for book in inventory:
        if book["title"].lower()==title.lower():
            book["price"]=price
            print(f"The book with the name {title}, the price has been update({price}).")
            return
    print(f"The book({title}) was not found")

#Delete books
def BookDelete(title):
    for book in inventory:
        if book["title"].lower()==title.lower():
            print(f"Are you sure to delete this book?({title})(s/n)");Confirmation=Validationsn()
            if Confirmation=="s":
                inventory.remove(book)
                print("The book is delete.")
                return
    print(f"The book({title}) was not found")

#Calculate total
def CalculateTotal():
    value_total = sum(book['price'] * book['quantity'] for book in inventory)
    print(f"\nTotal value of the inventory: ${value_total}")

#menu
def menu():
    while True:
        print("""
            list of funtions
            
            1. Add books to inventory
            2. Consult books in inventory
            3. Update price list
            4. remove books from inventory
            5. Calculate the total value of the inventory
            6. Exit
            """)
        print("\nenter one option(1-6): "); option=ValidationNumINT()
        
        if option==1:
            while True:
                print("Enter the book name: "); title=validate_letters()
                if not exists_book(title):
                    print("Enter the book price: "); price=ValidatioNumFLOAT()
                    print("Enter the quality of book: "); quality=ValidationNumINT()
                    AddBook(title,price,quality)
                    print("\nDo you want to continue? (s/n):")
                    if Validationsn() == 'n':
                        break
                else:
                    print("The book already exists.")
        elif option==2:
            consultBooks()
        elif option==3:
            while True:
                print("Entry the book name: "); title=validate_letters()
                print("Entry the new price: "); price=ValidatioNumFLOAT()
                UpdatePrice(title,price)
                print("\nDo you want continue?(s/n): ")
                if Validationsn() == 'n':
                        break
        elif option==4:
            while True:
                print("Entry the title of the book you want to delete: ");title=validate_letters()
                BookDelete(title)
                print("\nDo you want continue?(s/n): ")
                if Validationsn() == 'n':
                        break
        elif option==5:
            CalculateTotal()
        elif option==6:
            print("GoodBye.....")
            break
        else:
            print("Please use a correct option, thx.")
            
menu()