const mobileMenu = document.querySelector('.mobile-menu');
const openMenu = document.querySelector('.header--open');
const closeMenu = document.querySelector('.header--close');

function toggleMenu() {
  const isMenuOpen = openMenu.getAttribute('aria-expanded') === 'true' || false;
  openMenu.setAttribute('aria-expanded', !isMenuOpen);

  mobileMenu.classList.toggle('is-open');
  console.log('Listener work!');
}

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 480px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenu.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
});
