import projectData from './project_data.json' assert {type: 'json'};
import populateWorkProjects from './modules/projects';
import { toogleMobileMenu, addEventListenersOnLinks } from './modules/mobileMenu';

window.addEventListener('DOMContentLoaded', () => {
  // Implements Mobile Menu Actions
  const hamburger = document.querySelector('.header-icon-nav');
  const closeIcon = document.querySelector('.remove-menu');
  const mobileLinkElements = [
    document.querySelector('#mobile-work-link'),
    document.querySelector('#mobile-about-link'),
    document.querySelector('#mobile-contact-link'),
  ];
  hamburger.addEventListener('click', toogleMobileMenu);
  closeIcon.addEventListener('click', toogleMobileMenu);
  addEventListenersOnLinks(...mobileLinkElements);

  // Implements dynamic addition of projects from data in 'project_data.json'
  const projectUlContainer = document.querySelector('#projects-list-container');
  populateWorkProjects(projectUlContainer, projectData);
});