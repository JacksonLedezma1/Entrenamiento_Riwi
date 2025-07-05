const URL = 'http://localhost:3000/products';
const productosDiv = document.getElementById('productos');
const carritoUL = document.getElementById('carrito');
const totalSpan = document.getElementById('total');

const elemento = document.getElementById('divProductos');
const vaciarCarritoBtn = document.getElementById('vaciarCarrito');
const agregarAlCarritoBtn = document.getElementById('agregarProducto');
const actualizarProductoBtn = document.getElementById('actualizarProducto');
const eliminarProductoBtn = document.getElementById('eliminarProducto');

// Leer eventos del DOM
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
agregarAlCarritoBtn.addEventListener('click', agregarProducto);
actualizarProductoBtn.addEventListener('click', actualizarProducto);
eliminarProductoBtn.addEventListener('click', eliminarProducto);
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
    const idNum = String(prod.id);
    const div = document.createElement('div');
    div.className = 'producto-card';
    div.innerHTML = `
      <p class="producto-nombre"><strong>${prod.nombre}</strong> - $${prod.precio}</p>
      <div class="stock-info">Disponibles: <span id="stock-${idNum}">${prod.stock}</span></div>
      <div class="cantidad-menu" style="display:flex;align-items:center;justify-content:center;gap:8px;margin:10px 0;">
        <button class="button cantidad-btn" id="restar-${idNum}" style="width:32px;height:32px;padding:0;">-</button>
        <span id="cantidad-${idNum}" style="min-width:24px;display:inline-block;text-align:center;">1</span>
        <button class="button cantidad-btn" id="sumar-${idNum}" style="width:32px;height:32px;padding:0;">+</button>
      </div>
      <button class="button agregar-carrito-btn" id="agregarCarrito-${idNum}">Agregar al carrito</button>
    `;
    productosDiv.appendChild(div);

    // Lógica para aumentar/restar cantidad y agregar al carrito
    let cantidad = 1;
    const cantidadSpan = div.querySelector(`#cantidad-${idNum}`);
    const stock = prod.stock;
    div.querySelector(`#sumar-${idNum}`).addEventListener('click', function() {
      cantidad++;
      cantidadSpan.textContent = cantidad;
    });
    div.querySelector(`#restar-${idNum}`).addEventListener('click', function() {
      cantidad--;
      cantidadSpan.textContent = cantidad;
    });
    div.querySelector(`#agregarCarrito-${idNum}`).addEventListener('click', function() {
      agregarAlCarrito(idNum, prod.nombre, prod.precio, stock, cantidad);
      cantidad = 1;
      cantidadSpan.textContent = cantidad;
    });
  });
}

// Agregar producto al carrito
function agregarProducto(){
  elemento.classList.toggle('oculto');
  divProductos.innerHTML = "";
  const div= document.createElement('div');
  div.innerHTML = ` 
  <h2>Agregar Producto</h2>
  <form id="productForm">
    <div>
      <label for="productName">Nombre:</label>
      <input type="text" id="productName" name="productName" required>
      <div id="errorNombre" class="error-message" style="color:red;font-size:0.9em;"></div>
    </div>
    <div>
      <label for="productPrice">Precio:</label>
      <input type="number" step="0.01" id="productPrice" name="productPrice" required>
      <div id="errorPrecio" class="error-message" style="color:red;font-size:0.9em;"></div>
    </div>
    <div>
      <label for="productStock">Stock:</label>
      <input type="number" id="productStock" name="productStock" required>
      <div id="errorStock" class="error-message" style="color:red;font-size:0.9em;"></div>
    </div>
    <div>
      <button type="submit">Guardar Producto</button>
    </div>
  </form> `;
  divProductos.appendChild(div);
  const productForm = document.getElementById('productForm');
  productForm.addEventListener('submit', function(event) {

    event.preventDefault();
    // Limpiar mensajes de error
    document.getElementById('errorNombre').textContent = '';
    document.getElementById('errorPrecio').textContent = '';
    document.getElementById('errorStock').textContent = '';

    const nombre = document.getElementById('productName').value.trim();
    const precioValue = document.getElementById('productPrice').value;
    const stockValue = document.getElementById('productStock').value;

    let valido = true;
    if (!nombre) {
      document.getElementById('errorNombre').textContent = 'Por favor, ingresa un nombre válido.';
      valido = false;
    }
    if (!precioValue || isNaN(precioValue) || parseFloat(precioValue) <= 0) {
      document.getElementById('errorPrecio').textContent = 'Por favor, ingresa un precio válido y mayor a 0.';
      valido = false;
    }
    if (!stockValue || isNaN(stockValue) || parseInt(stockValue) < 0) {
      document.getElementById('errorStock').textContent = 'Por favor, ingresa un stock válido (0 o mayor).';
      valido = false;
    }
    if (!valido) return;

    const precio = parseFloat(precioValue);
    const stock = parseInt(stockValue);

    // Obtener el siguiente ID disponible automáticamente
    fetch(`${URL}`)
      .then(res => res.json())
      .then(data => {
        let maxId = 0;
        if (Array.isArray(data) && data.length > 0) {
          maxId = Math.max(...data.map(item => parseInt(item.id)));
        }
        const id = String(maxId + 1);
        fetch(URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, nombre, precio, stock })
        })
        .then(res => res.json())
        .then(data => {
          mostrarProductos([data]);
          productForm.reset();
        });
      })
      .catch(error => {
        // Mostrar error general debajo del formulario
        let form = document.getElementById('productForm');
        let errorDiv = document.getElementById('errorGeneral');
        if (!errorDiv) {
          errorDiv = document.createElement('div');
          errorDiv.id = 'errorGeneral';
          errorDiv.style.color = 'red';
          errorDiv.style.fontSize = '0.95em';
          form.appendChild(errorDiv);
        }
        errorDiv.textContent = error.message;
      });
  }); 

}

function actualizarProducto() {
  elemento.classList.toggle('oculto');
  divProductos.innerHTML = "";
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>Actualizar Producto</h2>
    <label for="productoSelect">Selecciona un producto:</label>
    <select id="productoSelect" name="productoSelect" size="5" style="width: 100%; margin-bottom: 1em;"></select>
    <form id="updateForm" style="display:none; margin-top:1em;">
      <div>
        <label for="updateName">Nombre:</label>
        <input type="text" id="updateName" name="updateName" required>
        <div id="errorUpdateNombre" class="error-message" style="color:red;font-size:0.9em;"></div>
      </div>
      <div>
        <label for="updatePrice">Precio:</label>
        <input type="number" step="0.01" id="updatePrice" name="updatePrice" required>
        <div id="errorUpdatePrecio" class="error-message" style="color:red;font-size:0.9em;"></div>
      </div>
      <div>
        <label for="updateStock">Stock:</label>
        <input type="number" id="updateStock" name="updateStock" required>
        <div id="errorUpdateStock" class="error-message" style="color:red;font-size:0.9em;"></div>
      </div>
      <div>
        <button type="submit">Actualizar Producto</button>
      </div>
    </form>
    <div id="updateSuccess" style="color:green;font-size:0.95em;"></div>
  `;
  divProductos.appendChild(div);

  // Cargar productos en el select
  fetch(`${URL}`)
    .then(response => response.json())
    .then(data => {
      const select = document.getElementById('productoSelect');
      select.innerHTML = '';
      data.forEach(prod => {
        const option = document.createElement('option');
        option.value = String(prod.id);
        option.textContent = `${prod.nombre}`;
        select.appendChild(option);
      });
      // Mostrar formulario al seleccionar un producto
      select.addEventListener('change', function() {
        const selectedId = String(this.value);
        const producto = data.find(p => String(p.id) === selectedId);
        if (producto) {
          document.getElementById('updateForm').style.display = 'block';
          document.getElementById('updateName').value = producto.nombre;
          document.getElementById('updatePrice').value = producto.precio;
          document.getElementById('updateStock').value = producto.stock;
          document.getElementById('updateSuccess').textContent = '';
          // Limpiar errores
          document.getElementById('errorUpdateNombre').textContent = '';
          document.getElementById('errorUpdatePrecio').textContent = '';
          document.getElementById('errorUpdateStock').textContent = '';
        }
      });
    })
    .catch(error => {
      console.error('Error cargando productos:', error);
    });

  // Manejar submit del formulario de actualización
  div.addEventListener('submit', function(event) {
    if (event.target && event.target.id === 'updateForm') {
      event.preventDefault();
      // Limpiar errores
      document.getElementById('errorUpdateNombre').textContent = '';
      document.getElementById('errorUpdatePrecio').textContent = '';
      document.getElementById('errorUpdateStock').textContent = '';
      document.getElementById('updateSuccess').textContent = '';

      const nombre = document.getElementById('updateName').value.trim();
      const precioValue = document.getElementById('updatePrice').value;
      const stockValue = document.getElementById('updateStock').value;
      const select = document.getElementById('productoSelect');
      const id = String(select.value);

      let valido = true;
      if (!nombre) {
        document.getElementById('errorUpdateNombre').textContent = 'Por favor, ingresa un nombre válido.';
        valido = false;
      }
      if (!precioValue || isNaN(precioValue) || parseFloat(precioValue) <= 0) {
        document.getElementById('errorUpdatePrecio').textContent = 'Por favor, ingresa un precio válido y mayor a 0.';
        valido = false;
      }
      if (!stockValue || isNaN(stockValue) || parseInt(stockValue) < 0) {
        document.getElementById('errorUpdateStock').textContent = 'Por favor, ingresa un stock válido (0 o mayor).';
        valido = false;
      }
      if (!valido) return;

      const precio = parseFloat(precioValue);
      const stock = parseInt(stockValue);

      // Actualizar producto vía PUT
      // Buscar el producto actual antes de actualizar
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          const productoActual = data.find(item => String(item.id) === String(id));
          if (!productoActual) {
            document.getElementById('updateSuccess').textContent = 'No se encontró el producto a actualizar.';
            return;
          }
          fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: String(id), nombre, precio, stock })
          })
            .then(res => res.json())
            .then(data => {
              document.getElementById('updateSuccess').textContent = 'Producto actualizado correctamente.';
              // Refrescar la lista completa de productos
              fetch(URL)
                .then(res => res.json())
                .then(productos => mostrarProductos(productos));
            })
            .catch(error => {
              document.getElementById('updateSuccess').textContent = 'Error al actualizar el producto.';
            });
        });
    }
  });
}

function eliminarProducto() {
  elemento.classList.toggle('oculto');
  divProductos.innerHTML = "";
  const div = document.createElement('div');
  div.innerHTML = `
    <h2 class="form-title delete-title">Eliminar Producto</h2>
    <div class="delete-container">
      <label for="productoSelect" class="form-label delete-label">Selecciona un producto:</label>
      <select id="productoSelect" name="productoSelect" size="5" class="select-producto" style="width: 100%; max-width: 320px; min-width: 180px; margin-bottom: 1em;"></select>
      <button id="btnEliminarSeleccionado" class="button delete-btn">Eliminar Producto</button>
      <div id="confirmBtns" class="confirm-dialog">
        <p class="confirm-text">¿Estás seguro de que deseas eliminar este producto?</p>
        <button id="btnConfirmarEliminar" class="button confirm-btn">Sí, eliminar</button>
        <button id="btnCancelarEliminar" class="button cancel-btn">Cancelar</button>
      </div>
      <div id="deleteSuccess" class="success-message"></div>
    </div>
  `;
  divProductos.appendChild(div);
  const select = document.getElementById('productoSelect');
  const btnEliminar = document.getElementById('btnEliminarSeleccionado');
  // Cargar productos en el select
  fetch(`${URL}`)
    .then(res => res.json())
    .then(data => {
      select.innerHTML = '';
      data.forEach(item => {
        const option = document.createElement('option');
        option.value = String(item.id);
        option.textContent = item.nombre;
        select.appendChild(option);
      });
    });
  // Mostrar confirmación al seleccionar un producto
  select.addEventListener('change', function() {
    const id = String(select.value);
    if (id) {
      document.getElementById('confirmBtns').style.display = 'block';
      btnEliminar.disabled = true;
      document.getElementById('deleteSuccess').textContent = '';
      // Manejar confirmación
      const btnConfirmar = document.getElementById('btnConfirmarEliminar');
      const btnCancelar = document.getElementById('btnCancelarEliminar');
      // Remover listeners previos para evitar duplicados
      btnConfirmar.replaceWith(btnConfirmar.cloneNode(true));
      btnCancelar.replaceWith(btnCancelar.cloneNode(true));
      const btnConfirmarNuevo = document.getElementById('btnConfirmarEliminar');
      const btnCancelarNuevo = document.getElementById('btnCancelarEliminar');
      btnConfirmarNuevo.addEventListener('click', function() {
        fetch(`${URL}/${id}`, {
          method: 'DELETE'
        })
        .then(res => {
          if (res.ok) {
            document.getElementById('deleteSuccess').textContent = 'Producto eliminado correctamente.';
            // Refrescar la lista completa de productos
            fetch(URL)
              .then(res => res.json())
              .then(productos => mostrarProductos(productos));
            // Quitar opción eliminada del select
            const opt = select.querySelector(`option[value='${id}']`);
            if (opt) opt.remove();
          } else {
            document.getElementById('deleteSuccess').textContent = 'Error al eliminar el producto.';
          }
        })
        .catch(error => {
          console.error('Error al eliminar el producto:', error);
          document.getElementById('deleteSuccess').textContent = 'Error al eliminar el producto.';
        });
        document.getElementById('confirmBtns').style.display = 'none';
        btnEliminar.disabled = false;
      });
      btnCancelarNuevo.addEventListener('click', function() {
        document.getElementById('confirmBtns').style.display = 'none';
        btnEliminar.disabled = false;
      });
    }
  });
  // Mostrar confirmación solo cuando el usuario seleccione manualmente
  document.getElementById('confirmBtns').style.display = 'none';
  btnEliminar.disabled = false;
  // Si el usuario da click en el botón eliminar sin seleccionar, no hacer nada
  btnEliminar.addEventListener('click', function() {
    // No hacer nada, la confirmación sale al seleccionar
  });
}


function agregarAlCarrito(id, nombre, precio, stock, cantidadAgregar = 1) {
  const existente = carrito.find(p => String(p.id) === String(id));
  if (typeof mensajeCarrito !== 'undefined') {
    mensajeCarrito.innerHTML = ""; // Always clear previous error message
  }
  if (existente) {
    existente.cantidad += cantidadAgregar;
    if (existente.cantidad > stock) {
      existente.cantidad = stock;
      if (typeof mensajeCarrito !== 'undefined') {
        const div = document.createElement('div');
        div.className = 'error-message';
        div.innerHTML = `<p>No puedes agregar más de ${stock} unidades de ${nombre}.</p>`;
        mensajeCarrito.appendChild(div);
        setTimeout(() => { mensajeCarrito.innerHTML = ""; }, 2000);
      }
    } else if (existente.cantidad <= 0) {
      existente.cantidad -= cantidadAgregar; // revert change
      if (typeof mensajeCarrito !== 'undefined') {
        const div = document.createElement('div');
        div.className = 'error-message';
        div.innerHTML = `<p>No puedes tener cantidades negativas o cero en el carrito.</p>`;
        mensajeCarrito.appendChild(div);
        setTimeout(() => { mensajeCarrito.innerHTML = ""; }, 2000);
      }
      actualizarCarrito();
      return;
    }
  } else {
    if (cantidadAgregar > 0) {
      carrito.push({ id: String(id), nombre, precio, cantidad: Math.min(cantidadAgregar, stock) });
    } else {
      if (typeof mensajeCarrito !== 'undefined') {
        const div = document.createElement('div');
        div.className = 'error-message';
        div.innerHTML = `<p>No puedes tener cantidades negativas o cero en el carrito.</p>`;
        mensajeCarrito.appendChild(div);
        setTimeout(() => { mensajeCarrito.innerHTML = ""; }, 2000);
      }
      actualizarCarrito();
      return;
    }
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

