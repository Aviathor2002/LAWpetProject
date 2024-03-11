const modalWindow = document.querySelector('[data-modal]');
const openModal = document.querySelector('[data-modal-open]');
const closeModal = document.querySelector('[data-modal-close]');

openModal.addEventListener('click', togglemodal);
closeModal.addEventListener('click', togglemodal);

function togglemodal() {
  modalWindow.classList.toggle('is-hidden');
}
