// (() => {
(() => {
  const mobileMenu = document.querySelector('.js-menu');
  const openMenuBtn = document.querySelector('.js-menu');
  const closeMenuBtn = document.querySelector('.js-menu');

  // const closeMenuLink = function () {
  //   return document.querySelector('.js-menu-close');
  // };

  // const menuClose = closeMenuLink('.js-menu-close');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('menu-is-open');

    // const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  // const closeMenu = () => {
  //   mobileMenu.classList.toggle('is-open');
  //   document.body.classList.toggle('menu-is-open');
  // };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
