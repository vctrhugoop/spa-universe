const toggleMenu = document.querySelector('.toggle-menu');
const btnMenu = document.querySelector('.ph-bold');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menuItem');

toggleMenu.addEventListener('click', e => {
  menu.classList.toggle('show');
  btnMenu.classList.toggle('ph-x');
});

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', () => {
    menu.classList.remove('show');
  });
}
