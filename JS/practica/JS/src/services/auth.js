// Registro y login
const API = 'http://localhost:3000';

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const res = await fetch(`${API}/users?email=${email}&password=${password}`);
  const users = await res.json();
  if (users.length) {
    localStorage.setItem('user', JSON.stringify(users[0]));
    window.location.href = users[0].role === 'admin' ? 'dashboard.html' : 'public.html';
  } else {
    document.getElementById('loginError').textContent = 'Credenciales incorrectas';
  }
});

document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;
  const user = { name, email, password, role: 'visitor', phone };
  const res = await fetch(`${API}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  if (res.ok) {
    window.location.href = 'login.html';
  } else {
    document.getElementById('registerError').textContent = 'Error al registrar';
  }
});
