function popUpMobileMenu() {
  document.querySelector('#mobile-container').classList.toggle('hide-main-mobile-content');
  document.querySelector('#mobile-menu').classList.toggle('show-mobile-menu');
}

function removeMobileMenu() {
  document.querySelector('#mobile-container').classList.toggle('hide-main-mobile-content');
  document.querySelector('#mobile-menu').classList.toggle('show-mobile-menu');
}

function popUpProject() {
  document.querySelector('#mobile-container').classList.toggle('hide-main-mobile-content');
  document.querySelector('#project').classList.toggle('hide-project');
}

function removeProject() {
  document.querySelector('#mobile-container').classList.toggle('hide-main-mobile-content');
  document.querySelector('#project').classList.toggle('hide-project');
}
// Implementation of Including Mobile Menu & Closing it
const hamburger = document.querySelector('.header-icon-nav');
hamburger.addEventListener('click', popUpMobileMenu);
const closeIcon = document.querySelector('.remove-menu');
closeIcon.addEventListener('click', removeMobileMenu);

// Implementation of PopUp Window and Closing it
const seeProjectButton = document.querySelector('.see-project-text');
seeProjectButton.addEventListener('click', popUpProject);
const popUpClosIcon = document.querySelector('close-icon-pop-up');
popUpClosIcon.addEventListener('click', removeProject);



