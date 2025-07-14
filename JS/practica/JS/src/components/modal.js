// Modal básico para formularios
function showModal(content) {
  let modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `<div class='modal-content'>${content}<button id='closeModal'>Cerrar</button></div>`;
  document.body.appendChild(modal);
  document.getElementById('closeModal').onclick = () => modal.remove();
}
window.showModal = showModal;
