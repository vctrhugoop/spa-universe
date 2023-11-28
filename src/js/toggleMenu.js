const toggleMenu = document.querySelector('.toggle-menu');
const btnMenu = document.querySelector('.ph-bold');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', e => {
  menu.classList.toggle('active');
  btnMenu.classList.toggle('ph-x');
});
