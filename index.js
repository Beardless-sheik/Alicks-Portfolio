import projectData from './project_data.json' assert {type: 'json'}

// const projectData = JSON.parse(projectDataJson);
console.log(projectData)

function populateWorkProjects(containerElement, projectData) {
  projectData.forEach((project, index) => {
    let technologies = '';
    project.technoogies.forEach((technology) => {
      technologies +=`<li class="work-card-skills-description">${technology}</li>`
    })
    
    if(index % 2 === 1) {
    containerElement.innerHTML += `<li>
					<ul class="work-card-container-outer">
						<li class="grid-order-last"><img src=${project.imageSrc} alt="image placeholder" class="image-placeholder"></li>
						<li class="grid-order-first">
							<ul class="work-card-container-inner">
								<li>
									<h4 class="work-card-heading">${project.title}</h4></li>
								<li>
									<div class="elipse-multi-post-3"></div>
								</li>
								<li>
									<p class="work-card-description">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
								</li>
								<li class="work-card-skills-container">
									<ul class="work-card-skills-container">
                  ${technologies}
									</ul>
								</li>
								<li class="see-project-button">
									<a id=${project.key} href="#" class="see-project-text project3">
										<p>See Project</p>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>` } else {
          containerElement.innerHTML += `<li>
					<ul class="work-card-container-outer">
            <li class="grid-order-first"><img src=${project.imageSrc} alt="image placeholder" class="image-placeholder"></li>
						<li class="grid-order-last">
							<ul class="work-card-container-inner">
								<li>
									<h4 class="work-card-heading">${project.title}</h4></li>
								<li>
									<div class="elipse-multi-post-3"></div>
								</li>
								<li>
									<p class="work-card-description">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
								</li>
								<li class="work-card-skills-container">
									<ul class="work-card-skills-container">
                  ${technologies}
									</ul>
								</li>
								<li class="see-project-button">
									<a id=${project.key} href="#" class="see-project-text project3">
										<p>See Project</p>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>`          
        }
  })
}

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
  const projectUlContainer = document.querySelector('#projects-list-container')
  populateWorkProjects(projectUlContainer, projectData)
});