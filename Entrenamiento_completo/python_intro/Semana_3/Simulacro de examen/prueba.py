import re

def validate_letters_numbers_specials():
    pattern = r"^[\wÁÉÍÓÚÜÑáéíóúüñ\s.,@#!$%&()\-]+$"
    while True:
        text = input("Enter text (letters, numbers, accents, and special characters allowed): ")
        if re.fullmatch(pattern, text):
            return text
        else:
            print("Error: Invalid characters detected.")


print(validate_letters_numbers_specials())