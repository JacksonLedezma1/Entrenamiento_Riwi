# 🛍️ Mini Online Store

Welcome to the Mini Online Store! This project is a simple web application to manage products and simulate shopping with a cart, using HTML, CSS, and JavaScript. Product data is stored and managed through a REST API simulated with **json-server**.

---

## 🧩 About the Code and Its Features

The core of the application is in the `gestion_api.js` file, which handles all the logic for interacting between the interface and the simulated database. Below are the main features of the code:

- **Product loading:** On startup, a GET request is made to the API to display all available products in the store.
- **Add products:** Shows a form to enter a new product. Validates the data and makes a POST request to save it in the database.
- **Update products:** Shows a form to select and edit an existing product. Makes a PUT/PATCH request to update the data in the database.
- **Delete products:** Allows you to select a product and, after confirmation, deletes it from the database with a DELETE request.
- **Shopping cart:** Lets you add products to the cart, control the quantity (without exceeding stock), display the total, and clear the cart.
- **Validations and messages:** The code includes validations to prevent incorrect data and displays error or success messages according to the action performed.

The code is commented and structured to make it easy to understand and modify. You can explore each function in `gestion_api.js` to see how each action is handled and how the interface is updated in real time.

## 🚀 How to Run the Project?

1. **Clone or download this repository.**
2. Make sure you have [Node.js](https://nodejs.org/) installed.
3. Install **json-server** globally (if you don't have it):
   ```bash
   npm install -g json-server
   ```
4. From the `Entregable_semana_3` folder, run the server:
   ```bash
   json-server --watch db.json --port 3000
   ```
5. Open the `index.html` file in your favorite browser.

---

## 📝 Main Features

### 1. **Product display**
- Shows all available products, their price, and stock.
- Allows you to select the quantity to add to the cart (respecting stock).

### 2. **Shopping cart**
- Add products to the cart with the desired quantity.
- Shows the list of products in the cart and the total to pay.
- Allows you to clear the cart with a button.

### 3. **Add product**
- "Add Product" button to show a form.
- Allows you to enter name, price, and stock.
- Validates the data before saving.
- When saved, the product is added to the database and the list is updated.

### 4. **Update product**
- "Update Product" button to show an edit form.
- Select an existing product and allows you to modify its name, price, or stock.
- Validates the data before updating.
- When saved, the changes are reflected in the database and the list.

### 5. **Delete product**
- "Delete Product" button to show the list of products.
- Select a product and confirm its deletion.
- The product is removed from the database and the list.

---

## 📁 File Structure

- `index.html` — Main interface of the store.
- `styles.css` — Modern and responsive styles.
- `gestion_api.js` — Logic for interacting with the API and the DOM.
- `db.json` — Simulated product database (used by json-server).

---

## 💡 Additional Notes
- The project is for educational purposes only and does not make real purchases.
- You can modify `db.json` to add products manually if you wish.
- If you change the json-server port, update the `URL` variable in `gestion_api.js`.

---

Enjoy programming and learning with your Mini Online Store! 😃
