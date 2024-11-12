// Classes
class PElement {
    // Abstract class: https://medium.com/@rheedhar/abstract-classes-in-javascript-d6510afac958
    constructor(_name) {
        if (this.constructor == PElement) {
            throw new Error("Class is of abstract type and can't be instantiated");
        };

        if (this.toHTML == undefined) {
            throw new Error("toHTML method must be implemented");
        };
        this.name = _name;
    }
};

// Project Tags [Tag Name, Tag Style]
class PTag extends PElement {
    constructor(_name, _style) {
        super(_name);
        this.style = _style;
    }

    toHTML() {
        return '<span class="project-tag ' + this.style + '">' + this.name + '</span>';
    }
};

// Languages [Name, Percent, Color]
class PLanguage extends PElement {
    constructor(_name, _color, _percent) {
        super(_name);
        this.color = _color;
        this.percent = _percent;
    }

    toHTML() {
        return '<span style="\
        width: ' + this.percent + '%;\
        height: 100%;\
        background-color: ' + this.color + 'bb;\
        float: left;\
        "></span>';
    }
    // margin-right: var(--base-size-16, 16px) !important;
    toHTMLText() {
        return '<li style="display: inline !important;">\
            <span style="align-items: center !important; display: inline-flex !important; font-size: 12px; ">\
                <svg style="color: ' + this.color + 'bb; display: inline-block; overflow: visible; vertical-align: text-bottom;\
                    fill: ' + this.color + 'bb;"\
                    aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-dot-fill mr-2">\
                    <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>\
                </svg>\
                <span class="color-fg-default text-bold mr-1">' + this.name + '</span>\
                <span>&nbsp;' + this.percent.toFixed(1) + '%</span>\
            </span>\
        </li>'
    }
};

// Projects [Name, Image, URL, Tags, Code Breakdown]
class Project extends PElement {
    constructor(_name, _img, _url, _tags, _languages, _description) {
        super(_name);
        this.img = _img;
        this.url = _url;
        this.tags = _tags;
        this.languages = _languages;
        this.description = _description;
    }

    toHTML() {
        // Create tags
        var tags_html = '';
        for (const tag of this.tags) {
            tags_html += tag.toHTML();
        }
        // Create code breakdown
        var code_html = '';
        var sum_bytes = 0.0;
        var code_legend = '';

        for (const language of this.languages) {
            sum_bytes += language[1];
        }
        for (const language of this.languages) {
            var percent = 100.0 * language[1] / sum_bytes;
            console.log(typeof (language[0]));
            var new_language = new PLanguage(language[0].name, language[0].color, percent);
            code_html += new_language.toHTML();
            code_legend += new_language.toHTMLText();
        }
        // Add project to container
        return '<!-- ' + this.name + ' -->\
        <div class="swiper-slide project-card-slide">\
            <div class="project-card-container" href="' + this.url + '" target="_blank">\
                <!-- Title, Tags, Thumbnail -->\
                <div class="project-card-top">\
                    <!-- Title -->\
                    <h2 class="project-title no-animate-on-view">' + this.name + '</h2>\
                    <!-- Thumbnail -->\
                    <img src="./assets/' + this.img + '" alt="' + this.name + ' Thumbnail" class="project-thumbnail">\
                </div>\
                <!-- Tags -->\
                <div class="project-tags-container">\
                ' + tags_html + '\
                </div>\
                <!-- Text -->\
                <div class="project-card-text">' + this.description + '</div>\
                <!-- Code Breakdown -->\
                <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%;">\
                    <div style="margin-top: 1rem; justify-content: center; display:flex;">\
                        <span class="code-breakdown-bar">\
                            ' + code_html + '\
                        </span>\
                    </div>\
                    <ul style="padding-left: 0; margin-bottom: 0.5rem; margin-top: 0.25rem; ">\
                        ' + code_legend + '\
                    </ul>\
                </div>\
            </div >\
        </div > ';
        // return '<!-- ' + this.name + ' -->\
        // <div class="swiper-slide project-card-slide">\
        //     <div class="project-card-container" style="transform: rotate(' + randomRotationDeg + 'deg);">\
        //         <!-- Thumbnail -->\
        //         <div class="article-container">\
        //             <img src="./assets/' + this.img + '" alt="' + this.name + ' Thumbnail" class="project-thumbnail">\
        //         </div>\
        //         <!-- Code Breakdown -->\
        //         <div style="margin-top: 1rem; justify-content: center; display:flex;">\
        //             <span class="code-breakdown-bar">\
        //                 ' + code_html + '\
        //             </span>\
        //         </div>\
        //         <ul style="padding-left: 0; margin-bottom: 0.5rem; margin-top: 0.25rem; ">\
        //             ' + code_legend + '\
        //         </ul>\
        //         <!-- Tags -->\
        //         <div class="project-tags-container">\
        //         ' + tags_html + '\
        //         </div>\
        //         <!-- Title -->\
        //         <h2 class="experience-subtitle project-title">' + this.name + '</h2>\
        //         <!-- View button -->\
        //         <div class="btn-container">\
        //             <button class="btn btn-style1 project-btn" href="' + this.url + '" target="_blank">View</button>\
        //         </div>\
        //     </div>\
        // </div>';
    }
};

function generateProjects() {
    // Get container that holds each project
    const project_container = document.querySelector("#projects-container");

    // For every project we have defined, create a component

    for (const project of projects) {
        // Add project to container
        project_container.innerHTML += project.toHTML();
    }

    const projectCards = document.querySelectorAll(".project-card-container");
    for (const projectCard of projectCards) {
        // Set random rotation of card
        const randomRotationDeg = Math.floor((Math.random() - 0.5) * 12.5);
        projectCard.style.setProperty("--rotation", randomRotationDeg + "deg");
    }
}