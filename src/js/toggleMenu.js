const toggleMenu = document.querySelector('.toggle-menu');
const btnMenu = document.querySelector('.ph-bold');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', e => {
  menu.classList.toggle('show');
  btnMenu.classList.toggle('ph-x');
});
