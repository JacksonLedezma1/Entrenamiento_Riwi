// Inscripción a cursos para visitantes
const API = 'http://localhost:3000';


window.enrollCourse = async function(courseId) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    alert('Debes iniciar sesión para inscribirte');
    return;
  }
  // Verificar si ya está inscrito
  const res = await fetch(`${API}/enrollments?userId=${user.id}&courseId=${courseId}`);
  const exists = await res.json();
  if (exists.length > 0) {
    alert('Ya estás inscrito en este curso');
    return;
  }
  const enrollment = { userId: Number(user.id), courseId: Number(courseId) };
  const resp = await fetch(`${API}/enrollments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(enrollment)
  });
  if (resp.ok) {
    alert('Inscripción exitosa');
  } else {
    alert('Error al inscribirse');
  }
};
