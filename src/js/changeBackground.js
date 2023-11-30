const pageHome = document.querySelector('.home');
const pageExplore = document.querySelector('.explore');
const pageUniverse = document.querySelector('.universe');
const body = document.querySelector('body');

pageHome.addEventListener('click', () => {
  body.style.backgroundImage = "url('/assets/bg-page-home.png')";
});
pageExplore.addEventListener('click', () => {
  body.style.backgroundImage = "url('/assets/bg-page-explore.png') ";
});
pageUniverse.addEventListener('click', () => {
  body.style.backgroundImage = "url('/assets/bg-page-universe.png')";
});
