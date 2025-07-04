const URL = 'http://localhost:3000/productos';
const productosDiv = document.getElementById('productos');
const carritoUL = document.getElementById('carrito');
const totalSpan = document.getElementById('total');
const vaciarCarritoBtn = document.getElementById('vaciarCarrito');

// Leer eventos del DOM
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
// Inicializar carrito
let carrito = [];

// Obtener productos (GET)
fetch(URL)
  .then(res => res.json())
  .then(data => mostrarProductos(data))
  .catch(error => console.error("Error al cargar productos:", error));

function mostrarProductos(productos) {
  productosDiv.innerHTML = "";
  productos.forEach(prod => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p><strong>${prod.nombre}</strong> - $${prod.precio}</p>
      <button onclick="agregarAlCarrito(${prod.id}, '${prod.nombre}', ${prod.precio}, ${prod.stock})">Agregar al carrito</button>
    `;
    productosDiv.appendChild(div);
  });
}

function agregarAlCarrito(id, nombre, precio, stock) {
  const existente = carrito.find(p => p.id === id);
  if (existente) {
    existente.cantidad += 1;
    if (existente.cantidad > stock) {
      alert(`No puedes agregar más de ${stock} unidades de ${nombre}.`);
      existente.cantidad = stock; // Limitar a la cantidad en stock
    }
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  carritoUL.innerHTML = "";
  let total = 0;
  carrito.forEach(prod => {
    const li = document.createElement('li');
    li.textContent = `${prod.nombre} x${prod.cantidad} = $${(prod.precio * prod.cantidad).toFixed(2)}`;
    carritoUL.appendChild(li);
    total += prod.precio * prod.cantidad;
  });
  totalSpan.textContent = total.toFixed(2);
}

// Funcion para vaciar el carrito
function vaciarCarrito() {
    if (carrito.length === 0) {
      alert("El carrito ya está vacío.");
      return;
    }
    carrito = [];
    carritoUL.innerHTML = "";
    totalSpan.textContent = "0.00";
    actualizarCarrito();
}

