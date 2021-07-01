const projectData = [{
  key: 'project1',
  title: 'Multi Post stories - 1',
  imageSrc: '/images/pop-up-menu-image.jpeg',
  projectTextDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum 
  is simply dummy text of the printing and typesetting  ever since the 1500s, 
  when an unknown printer took a galley of type veris lapoa todoe`,
  technoogies: ['Javascript', 'Ruby', 'HTML', 'CSS'],
  links: [
    {
      liveIcon: './images/icons/IconExport.svg',
      liveLink: 'https://github.com/Beardless-sheik',
    },
    {
      sourceIcon: './images/icons/IconGitHub.svg',
      sourceLink: 'https://github.com/Beardless-sheik',
    },
  ],
},
{
  key: 'project2',
  title: 'Multi Post stories - 2',
  imageSrc: './images/pop-up-menu-image.jpeg',
  projectTextDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum 
  is simply dummy text of the printing and typesetting  ever since the 1500s, 
  when an unknown printer took a galley of type veris lapoa todoe`,
  technoogies: ['Javascript', 'Express', 'HTML', 'SQL'],
  links: [
    {
      liveIcon: './images/icons/IconExport.svg',
      liveLink: 'https://github.com/Beardless-sheik',
    },
    {
      sourceIcon: './images/icons/IconGitHub.svg',
      sourceLink: 'https://github.com/Beardless-sheik',
    },
  ],
},
{
  key: 'project3',
  title: 'Multi Post stories - 3',
  imageSrc: './images/pop-up-menu-image.jpeg',
  projectTextDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum 
  is simply dummy text of the printing and typesetting  ever since the 1500s, 
  when an unknown printer took a galley of type veris lapoa todoe`,
  technoogies: ['Javascript', 'Ruby', 'HTML', 'CSS'],
  links: [
    {
      liveIcon: './images/icons/IconExport.svg',
      liveLink: 'https://github.com/Beardless-sheik',
    },
    {
      sourceIcon: './images/icons/IconGitHub.svg',
      sourceLink: 'https://github.com/Beardless-sheik',
    },
  ],
},
{
  key: 'project4',
  title: 'Multi Post stories - 4',
  imageSrc: './images/pop-up-menu-image.jpeg',
  projectTextDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum 
  is simply dummy text of the printing and typesetting  ever since the 1500s, 
  when an unknown printer took a galley of type veris lapoa todoe`,
  technoogies: ['Javascript', 'Ruby', 'HTML', 'CSS'],
  links: [
    {
      liveIcon: './images/icons/IconExport.svg',
      liveLink: 'https://github.com/Beardless-sheik',
    },
    {
      sourceIcon: './images/icons/IconGitHub.svg',
      sourceLink: 'https://github.com/Beardless-sheik',
    },
  ],
},
];

function popUpMobileMenu() {
  document.querySelector('#mobile-container').classList.toggle('hide-main-mobile-content');
  document.querySelector('#mobile-menu').classList.toggle('show-mobile-menu');
}

function removeMobileMenu() {
  document.querySelector('#mobile-container').classList.toggle('hide-main-mobile-content');
  document.querySelector('#mobile-menu').classList.toggle('show-mobile-menu');
}

function implementMobilePopUp(projectId) {
  const headerTitle = document.querySelector('.pop-up-header-text');
  const projectImage = document.querySelector('.pop-up-image');
  const projectDescription = document.querySelector('.pop-up-text-description');
  const projectSkills = document.querySelector('.pop-up-skill-item-container');
  const projectButtons = document.querySelector('.pop-up-button-container');
  projectData.forEach((project) => {
    if (projectId === project.key) {
      headerTitle.textContent = project.title;
      projectImage.src = project.imageSrc;
      projectDescription.textContent = project.projectTextDescription;
      project.technoogies.forEach((technologies) => {
        projectSkills.innerHTML += `<li>
          <p class="skill-item-language pop-up-skill-border">${technologies}</p>
        </li>`;
      });
      projectButtons.innerHTML = `
      <li class="pop-up-button-background">
        <a href="${project.links[0].liveLink}" class="pop-up-button-text">
          <p>See Live</p> <img src="${project.links[0].liveIcon}" alt="">
        </a>
      </li>
      <li class="pop-up-button-background-2">
        <a href="${project.links[1].sourceLink}" class="pop-up-button-text">
          <p>See Source</p> <img src="${project.links[1].sourceIcon}" alt="">
        </a>
      </li>`;
    }
  });
}

function popUpProject() {
  document.querySelector('#mobile-container').classList.toggle('hide-main-mobile-content');
  document.querySelector('#project').classList.toggle('hide-project');
  implementMobilePopUp(this.id);
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

// Implementation of Events on Project Buttons
const projectButton1 = document.querySelector('#project1');
projectButton1.addEventListener('click', popUpProject);
const projectButton2 = document.querySelector('#project2');
projectButton2.addEventListener('click', popUpProject);
const projectButton3 = document.querySelector('#project3');
projectButton3.addEventListener('click', popUpProject);
const projectButton4 = document.querySelector('#project4');
projectButton4.addEventListener('click', popUpProject);
const popUpPojectCloseIcon = document.querySelector('.pop-up-project-close-icon');
popUpPojectCloseIcon.addEventListener('click', removeProject);

/* Implementation of custom error message if "lowercase-email" according to RegEx pattern in
email input isn't inputed */
const email = document.querySelector('input[type="email"]');
email.addEventListener('invalid', () => {
  if (!email.validity.valid) {
    email.setCustomValidity('Please use a lowercase  e-mail address!');
  } else {
    email.setCustomValidity('');
  }
});