const populateWorkProjects = (containerElement, projectData) => {
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

export default populateWorkProjects;