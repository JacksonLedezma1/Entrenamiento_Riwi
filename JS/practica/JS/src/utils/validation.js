// Validaciones básicas
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function validatePassword(password) {
  return password.length >= 6;
}
window.validateEmail = validateEmail;
window.validatePassword = validatePassword;
