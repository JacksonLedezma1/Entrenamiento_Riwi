// CRUD de cursos para admin y listado para visitantes
// Servicio de gestión de cursos (CRUD) para el panel de administración y vista pública
// Permite listar, crear, editar y eliminar cursos desde el dashboard y mostrar cursos a visitantes
// Utiliza la API simulada por json-server
const API = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', async () => {
  if (window.location.pathname.includes('dashboard.html')) {
    const coursesTable = document.getElementById('coursesTable');
    // Obtener todos los cursos
    const res = await fetch(`${API}/courses`);
    const courses = await res.json();
    // Construir la tabla HTML con los datos y botones de acción
    let html = '<table><tr><th>Título</th><th>Descripción</th><th>Inicio</th><th>Duración</th><th>Acciones</th></tr>';
    courses.forEach(c => {
      html += `<tr><td>${c.title}</td><td>${c.description}</td><td>${c.startDate}</td><td>${c.duration}</td><td><button onclick="editCourse(${Number(c.id)})">Editar</button><button onclick="deleteCourse(${Number(c.id)})">Eliminar</button></td></tr>`;
    });
    html += '</table>';
    coursesTable.innerHTML = html;
  }
  if (window.location.pathname.includes('public.html')) {
    const coursesList = document.getElementById('coursesList');
    // Obtener todos los cursos
    const res = await fetch(`${API}/courses`);
    const courses = await res.json();
    // Mostrar los cursos con botón de inscripción
    let html = '';
    courses.forEach(c => {
      html += `<div class='course'><h4>${c.title}</h4><p>${c.description}</p><button onclick="enrollCourse(${c.id})">Inscribirse</button></div>`;
    });
    coursesList.innerHTML = html;
  }
});


window.editCourse = async function(id) {
  // Obtener datos del curso por ID
  const res = await fetch(`${API}/courses/${id}`);
  const course = await res.json();
  showModal(`
    <h3>Editar Curso</h3>
    <form id='editCourseForm'>
      <input type='text' id='editTitle' value='${course.title}' required />
      <input type='text' id='editDescription' value='${course.description}' required />
      <input type='text' id='editStartDate' value='${course.startDate}' required />
      <input type='text' id='editDuration' value='${course.duration}' required />
      <button type='submit'>Guardar</button>
    </form>
    <div id='editCourseError' class='error'></div>
  `);
  // Al enviar el formulario, actualiza el curso en la API
  document.getElementById('editCourseForm').onsubmit = async function(e) {
    e.preventDefault();
    const updated = {
      title: document.getElementById('editTitle').value,
      description: document.getElementById('editDescription').value,
      startDate: document.getElementById('editStartDate').value,
      duration: document.getElementById('editDuration').value
    };
    const resp = await fetch(`${API}/courses/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
    if (resp.ok) {
      location.reload();
    } else {
      document.getElementById('editCourseError').textContent = 'Error al guardar';
    }
  };
};

document.getElementById('addCourseBtn')?.addEventListener('click', () => {
  showModal(`
    <h3>Agregar Curso</h3>
    <form id='addCourseForm'>
      <input type='text' id='addTitle' placeholder='Título' required />
      <input type='text' id='addDescription' placeholder='Descripción' required />
      <input type='text' id='addStartDate' placeholder='Fecha de inicio' required />
      <input type='text' id='addDuration' placeholder='Duración' required />
      <button type='submit'>Crear</button>
    </form>
    <div id='addCourseError' class='error'></div>
  `);
  const addCourseForm = document.getElementById('addCourseForm');
  if (addCourseForm) {
    addCourseForm.onsubmit = async function(e) {
      e.preventDefault();
      const nuevo = {
        title: document.getElementById('addTitle').value,
        description: document.getElementById('addDescription').value,
        startDate: document.getElementById('addStartDate').value,
        duration: document.getElementById('addDuration').value
      };
      const resp = await fetch(`${API}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevo)
      });
      if (resp.ok) {
        location.reload();
      } else {
        document.getElementById('addCourseError').textContent = 'Error al crear';
      }
    };
  }
});

window.deleteCourse = async function(id) {
  // Eliminar curso: elimina el curso por ID y recarga la tabla
  await fetch(`${API}/courses/${id}`, { method: 'DELETE' });
  location.reload();
};
