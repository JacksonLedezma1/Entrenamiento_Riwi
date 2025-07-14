// CRUD de usuarios para admin
const API = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', async () => {
  if (window.location.pathname.includes('dashboard.html')) {
    const usersTable = document.getElementById('usersTable');
    const res = await fetch(`${API}/users`);
    const users = await res.json();
    let html = '<table><tr><th>Nombre</th><th>Email</th><th>Rol</th><th>Acciones</th></tr>';
    users.forEach(u => {
      html += `<tr><td>${u.name}</td><td>${u.email}</td><td>${u.role}</td><td><button onclick="editUser(${u.id})">Editar</button><button onclick="deleteUser(${u.id})">Eliminar</button></td></tr>`;
    });
    html += '</table>';
    usersTable.innerHTML = html;
  }
});

window.editUser = function(id) {
  showModal(`Editar usuario ${id}`);
};
window.deleteUser = async function(id) {
  await fetch(`${API}/users/${id}`, { method: 'DELETE' });
  location.reload();
};
