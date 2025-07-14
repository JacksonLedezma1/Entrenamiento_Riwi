document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  if (header) {
    const user = JSON.parse(localStorage.getItem('user'));
    header.innerHTML = user ? `Bienvenido, ${user.name} | <button id="logoutBtn">Cerrar sesión</button>` : '';
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.onclick = () => {
        localStorage.removeItem('user');
        window.location.href = 'login.html';
      };
    }
  }
});
