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

const projectData = [{
  key:'pro1',
  title:'Multi Post stories - 1',
  imageSrc:`./images/pop-up-menu-image.jpeg',
  projectTextDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum 
  is simply dummy text of the printing and typesetting  ever since the 1500s, 
  when an unknown printer took a galley of type veris lapoa todoe`,
  technoogies:[ 'Javascript','Ruby','HTML','CSS'],
  links:[
    {
      liveIcon:'./images/icons/IconExport.svg',
      liveLink:'https://github.com/Beardless-sheik'
    },
    {
      sourceIcon:'./images/icons/IconGitHub.svg',
      sourceLink:'https://github.com/Beardless-sheik'
    }
  ]
}
]
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



