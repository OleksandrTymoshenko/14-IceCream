(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalbuy-open]'),
    closeModalBtn: document.querySelector('[data-modalbuy-close]'),
    modalbuy: document.querySelector('[data-modalbuy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalbuy.classList.toggle('visually-hidden');
  }
})();
