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
                description: "The task of determining the inference relation between two texts: entailment, contradiction, or neutral.",
                categories: ['featured','dl']
            },
            
            {
                image: 'assets/images/biostatistics-cut.png',
                link: 'https://github.com/YoungheeGGO/R-Shiny-IMa3_dashboard',
                title: 'IMa3 Dashboard',
                /*demo: false*/
                technologies: ['Biostatistics'],
                description: "Dashboard, running with the IMA3 software\'s output, for diagnosing MCMCs and parameter plotting.",
                categories: ['featured','viz']
            },
              {
                image: 'assets/images/apartment.png',
                link: 'https://github.com/YoungheeGGO/TimeSeriesData-Analysis',
                title: 'Prediction Apartment Price',
                /*demo: false*/
                technologies: ['TimeSeries','ARIMA'],
                description: "Prediction of the actual apartment transaction price index in Seoul using time series analysis methods.",
                categories: ['ml']
            },
            {
                image: 'assets/images/handcream.png',
                link: 'https://github.com/YoungheeGGO/Cosmetic-Review-Analysis',
                title: 'Cosmetic Review Analysis',
                /*demo: false*/
                technologies: ['NLP','Word2Vec'],
                description: "Understanding consumption trends through Korean review analysis of Hand Cream.",
                categories: ['dl']
            },
            
            {
                image: 'assets/images/yongin.png',
                link: 'https://github.com/YoungheeGGO/Yong-In-Si-Bigdata-Competition',
                title: 'Local business analysis',
                /*demo: false*/
                technologies: ['GMM'],
                description: "Derivation of measures to support young entrepreneurs through regional commercial district analysis in YongIn-si,South Korea",
                categories: ['ml','featured']
            },
            {
                image: 'assets/images/mobility-cut__.jpg',
                link: 'https://github.com/YoungheeGGO/Seoul_Bigdata_Competition',
                title: 'Policy Proposal through Data analysis',
                /*demo: false*/
                technologies: ['QGIS'],
                description: "An analysis of the location of shared personal mobility parking spaces in Seoul through population analysis",
                categories: ['viz']
            },

            {
                image: 'assets/images/library.png',
                link: 'https://github.com/YoungheeGGO/Library-Bigdata-Competition',
                title: 'Book borrow analysis for kids',
                /*demo: false*/
                technologies: ['Tableau','WordCloud'],
                description: "Grasping the trends of children's books over time from the perspective of parents and children respectively.",
                categories: ['viz']
            },
            
            {
                image: 'assets/images/rgbrand-url.png',
                link: 'https://github.com/YoungheeGGO/RGBrand',
                title: 'RGBrand',
                /*demo: false*/
                technologies: ['K-means','Tableau'],
                description: "Analyzing brand logo colors and adjectives. Logo color was extracted by the k-means method.",
                categories: ['ml']
            },
            
            {
                image: 'assets/images/covid19-re.jpg',
                link: 'https://github.com/YoungheeGGO/COVID19-Classification',
                title: 'Covid19 Classification',
                /*demo: false*/
                technologies: ['Vision','EfficientNet'],
                description: "Classifying the lung CT images between covid19 patients and non.  In the EfficientNet Model, I obtained 82% test accuracy. ",
                categories: ['dl']
            },
           
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
