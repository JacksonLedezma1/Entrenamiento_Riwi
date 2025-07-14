document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.innerHTML = `<nav>
      <ul>
        <li><a href="dashboard.html">Usuarios</a></li>
        <li><a href="dashboard.html#coursesSection">Cursos</a></li>
      </ul>
    </nav>`;
  }
});
