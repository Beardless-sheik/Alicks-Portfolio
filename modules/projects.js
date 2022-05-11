const toggleProjectsView = () => {
  document.querySelector('#mobile-container').classList.toggle('hide-main-mobile-content');
  document.querySelector('#project').classList.toggle('hide-project');
};

const implementMobilePopUp = (projectId, projectData) => {
  const headerTitle = document.querySelector('.pop-up-header-text');
  const projectImage = document.querySelector('.pop-up-image');
  const projectDescription = document.querySelector('.pop-up-text-description');
  const projectSkills = document.querySelector('.pop-up-skill-item-container');
  const projectButtons = document.querySelector('.pop-up-button-container');

  const index = projectData.findIndex((project) => project.key === projectId);

  headerTitle.textContent = projectData[index].title;
  projectImage.src = projectData[index].imageSrc;
  projectDescription.textContent = projectData[index].projectTextDescription;
  projectSkills.innerHTML = ''; 
  projectData[index].technoogies.forEach((technologies) => {
    projectSkills.innerHTML += `<li>
          <p class="skill-item-language pop-up-skill-border">${technologies}</p>
        </li>`;
  });
  projectButtons.innerHTML = `
      <li class="pop-up-button-background">
        <a href="${projectData[index].links[0].liveLink}" class="pop-up-button-text">
          <p>See Live</p> <img src="${projectData[index].links[0].liveIcon}" alt="">
        </a>
      </li>
      <li class="pop-up-button-background-2">
        <a href="${projectData[index].links[1].sourceLink}" class="pop-up-button-text">
          <p>See Source</p> <img src="${projectData[index].links[1].sourceIcon}" alt="">
        </a>
      </li>`;
};

const populateWorkProjects = (containerElement, projectData) => {
  projectData.forEach((project, index) => {
    let technologies = '';
    project.technoogies.forEach((technology) => {
      technologies += `<li class="work-card-skills-description">${technology}</li>`;
    });

    if (index % 2 === 1) {
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
									<a id=${project.key} class="see-project-text">
										See Project
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>`;
    } else {
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
									<a id=${project.key} class="see-project-text">
										See Project
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>`;
    }
  });

  // Add Event Listeners to Show Project Details and Close Them
  containerElement.addEventListener('click', (element) => {
    if (element.target.classList.contains('see-project-text')) {
      toggleProjectsView();
      implementMobilePopUp(element.target.id, projectData);
    }
  });
  document.querySelector('#close-icon-pop-up').addEventListener('click', (element) => {
    if (element.target.id === 'close-icon-pop-up') {
      toggleProjectsView();
    }
  });
};

export default populateWorkProjects;