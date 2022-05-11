import projectData from './project_data.json' assert {type: 'json'}
import populateWorkProjects from './modules/projects.js';
import { toogleMobileMenu, addEventListenersOnLinks } from './modules/mobileMenu.js';

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

// Implementatuon of a DRY implementation: 

// Implementation of Events on Project Buttons
// const projectButton1 = document.querySelector('#project1');
// projectButton1.addEventListener('click', popUpProject);
// const projectButton2 = document.querySelector('#project2');
// projectButton2.addEventListener('click', popUpProject);
// const projectButton3 = document.querySelector('#project3');
// projectButton3.addEventListener('click', popUpProject);
// const projectButton4 = document.querySelector('#project4');
// projectButton4.addEventListener('click', popUpProject);
// const popUpPojectCloseIcon = document.querySelector('.pop-up-project-close-icon');
// popUpPojectCloseIcon.addEventListener('click', removeProject);

window.addEventListener('DOMContentLoaded', (event) => {
  // Implements Mobile Menu Actions
  const hamburger = document.querySelector('.header-icon-nav');
  const closeIcon = document.querySelector('.remove-menu');
  const mobileLinkElements = [
    document.querySelector('#mobile-work-link'),
    document.querySelector('#mobile-about-link'),
    document.querySelector('#mobile-contact-link')
  ]
  hamburger.addEventListener('click', toogleMobileMenu);
  closeIcon.addEventListener('click', toogleMobileMenu);
  addEventListenersOnLinks(...mobileLinkElements)

  // Implements dynamic addition of projects from data in 'project_data.json'
  const projectUlContainer = document.querySelector('#projects-list-container')
  populateWorkProjects(projectUlContainer, projectData)
});