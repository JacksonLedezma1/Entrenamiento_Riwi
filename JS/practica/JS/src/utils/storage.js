// Manejo de localStorage
function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}
window.setUser = setUser;
window.getUser = getUser;
