$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

        let projects_obj = [
            {
                image: 'assets/images/statistics-Jornal-cut.jpg',
                link: 'https://github.com/YoungheeGGO/Social_Isolation_for_20s',
                title: 'Social Isolation for 20\'s',
                /*demo: false*/
                technologies: ['Catboost', 'XAI'],
                description: "Prediction of Social Isolation in the 20s using machine learning and deep learning.",
                categories: ['featured', 'paper']
            },
            {
                image: 'assets/images/bert.png',
                link: 'https://github.com/YoungheeGGO/Dacon_koreanNLP',
                title: 'Korean NLP Inference',
                /*demo: false*/
                technologies: ['NLP', 'BERT'],
                description: "Recognizing Textual Entailment for Korean - the task of determining the inference relation between two texts: entailment, contradiction, or neutral",
                categories: ['dl']
            }
 
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">
                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}
        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                        <br/>
                    </article>
                             
                    
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
