function popUpMenu() {
  document.querySelector('#mobile-container').classList.toggle('hide-mobile-content');
  document.querySelector('#mobile-menu').classList.toggle('show-mobile-menu');
}

function removeMenu() {
  document.querySelector('#mobile-container').classList.toggle('hide-mobile-menu');
  document.querySelector('#mobile-menu').classList.toggle('show-mobile-menu');
}
const hamburger = document.querySelector('.header-icon-nav');
hamburger.addEventListener('click', popUpMenu);
const closeIcon = document.querySelector('.remove-menu');
closeIcon.addEventListener('click', removeMenu);
