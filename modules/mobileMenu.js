function toogleMobileMenu() {
  document.querySelector('#mobile-container').classList.toggle('hide-main-mobile-content');
  document.querySelector('#mobile-menu').classList.toggle('show-mobile-menu');
}

function addEventListenersOnLinks(...linkElements) {
  linkElements.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector('#mobile-container').classList.toggle('hide-main-mobile-content');
      document.querySelector('#mobile-menu').classList.toggle('show-mobile-menu');
      console.log('clicked');
      if (element.id === 'mobile-work-link') {
        document.getElementById('works-section').scrollIntoView();
      }
      if (element.id === 'mobile-about-link') {
        document.getElementById('about-section').scrollIntoView();
      }
      if (element.id === 'mobile-contact-link') {
        document.getElementById('contact-section').scrollIntoView();
      }
    });
  });
}

export { toogleMobileMenu, addEventListenersOnLinks };