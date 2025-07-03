// Sistema para agregar productos dinámicamente y gestionar categorías

// Estructuras para almacenar productos y categorías
const appData = {
    productsObj: {},
    productsSet: new Set(),
    productsMap: new Map(),
    categories: new Set(["Electronics", "Accessories"])
};

// Función para renderizar un producto en el DOM
function renderProduct(p, container) {
    const productSection = document.createElement('section');
    productSection.className = 'product-info product-added';
    productSection.innerHTML = `
        <h2>${p.name} <span>(ID: ${p.id})</span></h2>
        <hr>
        <p class="description">${p.desc}</p>
        <div class="specification">
            <strong>Specification:</strong>
            <span>${p.spec}</span>
        </div>
        <div><strong>Price:</strong> $${p.price}</div>
        <div><strong>Category:</strong> ${p.category}</div>
    `;
    container.appendChild(productSection);
}

function updateCategorySelect() {
    const select = document.getElementById('productCategory');
    select.innerHTML = '';

    const fragment = document.createDocumentFragment();

    appData.categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        fragment.appendChild(opt);
    });

    const newOpt = document.createElement('option');
    newOpt.value = 'new';
    newOpt.textContent = 'New category...';
    fragment.appendChild(newOpt);

    select.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addProductForm');
    const productsContainer = document.getElementById('productsContainer');
    const select = document.getElementById('productCategory');
    const newCategoryInput = document.getElementById('newCategory');

    updateCategorySelect();

    // Mostrar productos iniciales
    const initialProducts = {
        1: { id: 1, name: "laptop", price: 1500, spec: "15'' screen, 8GB RAM", desc: "A powerful laptop for work and study.", category: "Electronics" },
        2: { id: 2, name: "mouse", price: 800, spec: "Wireless, ergonomic", desc: "Comfortable wireless mouse.", category: "Accessories" },
        3: { id: 3, name: "teclado", price: 600, spec: "Mechanical, Spanish layout", desc: "Durable mechanical keyboard.", category: "Accessories" }
    };

    for (const id in initialProducts) {
        const p = initialProducts[id];
        appData.productsObj[id] = p;
        appData.productsSet.add(p.name);
        appData.productsMap.set(p.category + '-' + id, p.name);
        renderProduct(p, productsContainer); // Reutilizar la función de renderizado
    }

    select.addEventListener('change', function () {
        if (this.value === 'new') {
            newCategoryInput.style.display = 'block';
            newCategoryInput.required = true;
        } else {
            newCategoryInput.style.display = 'none';
            newCategoryInput.required = false;
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('productName').value.trim();
        const id = parseInt(document.getElementById('ID').value.trim());
        const price = parseFloat(document.getElementById('Price').value.trim());
        const spec = document.getElementById('productSpec').value.trim();
        const desc = document.getElementById('productDesc').value.trim();
        let category = select.value;

        // Validar que los campos no estén vacíos y que ID/Precio sean números válidos
        if (!name || isNaN(id) || isNaN(price) || !spec || !desc || !category) {
            alert('Por favor, asegúrate de llenar todos los campos y que ID/Precio sean números válidos.');
            return;
        }

        // Validar si el ID ya existe
        if (appData.productsObj[id]) {
            alert('Ya existe un producto con este ID. Por favor, usa un ID diferente.');
            return;
        }

        if (category === 'new') {
            category = newCategoryInput.value.trim();
            if (!category) { // Asegurarse de que la nueva categoría no esté vacía
                alert('Por favor, ingresa un nombre para la nueva categoría.');
                return;
            }
            appData.categories.add(category);
            updateCategorySelect(); // Actualizar el select con la nueva categoría
        }

        const newProduct = { id, name, price, spec, desc, category };

        appData.productsObj[id] = newProduct;
        appData.productsSet.add(name);
        appData.productsMap.set(category + '-' + id, name);

        renderProduct(newProduct, productsContainer); // Renderizar el nuevo producto

        form.reset(); // Limpiar el formulario
        newCategoryInput.style.display = 'none';
        newCategoryInput.required = false;

        console.log('Products Object:', appData.productsObj);
        console.log('Products Set:', appData.productsSet);
        console.log('Products Map:', appData.productsMap);
        console.log('Categories:', appData.categories);
    });
});
// Quitar la linea de abajo
/*
// Lo que piden en el moodle
// Funcion para guardar los productos en un set
function saveProducts() {
    console.log("¡Gestion de Datos con Objetos, sets y maps!");
    // Guardar productos en un objeto
    const products = {
        1:{id: 1, name: "laptop", price: 1500},
        2:{id: 2, name: "mouse", price: 800},
        3:{id: 3, name: "teclado", price: 600}
    }
    console.log("Saved Products:", products);
    //  crear set con los nombres de los productos
    const productsSet = new Set(Object.values(products).map(product => product.name));
    console.log("Products Set:", productsSet);
    // crear un map para agregar categorias a los productos
    const productsMap = new Map([
        ["Electronics", "laptop",],
        ["Accessories", "mouse"],
        ["Accessories", "teclado"]
    ]);
    console.log("Products Map:", productsMap);
    // Iterar sobre el obecto de productos
    console.log("Iterating over products:");
    for (const id in products) {
        console.log(`Product: ${id}, Detalles:`,products[id]);
    }
    // Iterar sobre el set de productos
    console.log("Iterating over products set:");
    for (const product of productsSet) {
        console.log(`Product Name: ${product}`);
    }
    // Iterar sobre el map de productos
    console.log("Iterating over products map:");
    productsMap.forEach((value, key) => {
        console.log(`Category: ${key}, Product: ${value}`);
    });
    //validacion de los datos
    console.log("Validating data...");
    console.log("list of products(Objetos): ", products);
    console.log("list of products(Set): ", productsSet);
    console.log("list of products(Map): ", productsMap);

}
saveProducts()
*/
// Fin de lo que piden en el moodle
