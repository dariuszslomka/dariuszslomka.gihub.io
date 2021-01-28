import '../scss/main.scss';

fetch("https://api.github.com/users/dariuszslomka/repos?per_page=50")
.then(response => response.json())
.then(response => {
	console.log(response);
	let repoList = document.querySelector('.projects-grid');
	for(let repo of response)
	{
		const {name, html_url, description} = repo;
        let template = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src='img/github.png' alt="github-logo" class="project__github-logo">
          <h3 class="project__title project__grid">
            <span class="project__label">project:</span> 
            <span class="project__name">${name}</span>
          </h3>
          <p class="project__description project__grid project__grid--biggest-margin">
            <span class="project__label">description: </span> 
            <span class="project__about">${description}</span>
          </p>
          <p class="project__demo project__grid">
            <span class="project__label">demo: </span> 
            <a href="${html_url}" class="project__url">see here</a>
          </p>
          <p class="project__adress project__grid">
            <span class="project__label">github: </span> 
            <a href="${html_url}" class="project__url">source code</a>
          </p>
        </div>
      </article>`;
        repoList.innerHTML += template; 
	}
})
.catch(err => {
	console.error(err);
});