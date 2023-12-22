// Classes
class PElement {
    // Abstract class: https://medium.com/@rheedhar/abstract-classes-in-javascript-d6510afac958
    constructor(_name) {
       if(this.constructor == PElement) {
          throw new Error("Class is of abstract type and can't be instantiated");
       };
 
       if(this.toHTML == undefined) {
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
        return '<span class="project-tag ' + this.style + '">• ' + this.name + '</span>';
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
        background-color: ' + this.color + ';\
        float: left;\
        "></span>';
    }
    // margin-right: var(--base-size-16, 16px) !important;
    toHTMLText() {
        return '<li style="display: inline !important;">\
            <span style="align-items: center !important; display: inline-flex !important; font-size: 12px; ">\
                <svg style="color: ' + this.color + '; display: inline-block; overflow: visible; vertical-align: text-bottom;\
                    fill: ' + this.color + ';"\
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
    constructor(_name, _img, _url, _tags, _languages) {
        super(_name);
        this.img = _img;
        this.url = _url;
        this.tags = _tags;
        this.languages = _languages;
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
            console.log(typeof(language[0]));
            var new_language = new PLanguage(language[0].name, language[0].color, percent);
            code_html += new_language.toHTML();
            code_legend += new_language.toHTMLText();
        }
        // Add project to container
        return '<!-- ' + this.name + ' -->\
        <div class="details-container color-container">\
          <!-- Thumbnail -->\
          <div class="article-container">\
            <img src="./assets/' + this.img + '" alt="' + this.name + ' Thumbnail" class="project-img">\
          </div>\
          <!-- Code Breakdown -->\
          <ul style="margin-top: 1rem; padding-left: 0; margin-bottom: 0;">\
            ' + code_legend + '\
          </ul>\
          <div style="justify-content: center; display:flex;">\
            <span class="code-breakdown-bar">\
                ' + code_html + '\
            </span></div>\
          <!-- Tags -->\
          <div class="project-tags-container">\
          ' + tags_html + '\
          </div>\
          <!-- Title -->\
          <h2 class="experience-subtitle project-title">' + this.name + '</h2>\
          <!-- View button -->\
          <div class="btn-container">\
            <button class="btn btn-style1-1 project-btn" onclick="location.href=\'' + this.url + '\'">View</button>\
          </div>\
        </div>';
    }
};

// Tags
const t_aws = new PTag("AWS", "tag-style1");
const t_rest_api = new PTag("REST API", "tag-style1");
const t_cli = new PTag("CLI", "tag-style1");
const t_opengl = new PTag("OpenGL", "tag-style1");
const t_flutter = new PTag("Flutter", "tag-style1");
const t_freeglut = new PTag("FreeGLUT", "tag-style1");
const t_raymarching = new PTag("Ray Marching", "tag-style1");
const t_sdf = new PTag("Signed Distance Fields", "tag-style1");
const t_perlin = new PTag("Perlin Noise", "tag-style1");
const t_phong = new PTag("Phong Shading", "tag-style1");
const t_esp32 = new PTag("ESP32", "tag-style1");
const t_espidf = new PTag("ESP IDF", "tag-style1");
const t_pcb = new PTag("PCB", "tag-style1");
const t_modular = new PTag("Software Modularization", "tag-style1");
const t_firebase = new PTag("Firebase", "tag-style1");
const t_firestore = new PTag("Firestore", "tag-style1");
const t_gcpstorage = new PTag("GCP Cloud Storage", "tag-style1");
const t_html = new PTag("HTML", "tag-style1");
const t_css = new PTag("CSS", "tag-style1");
const t_js = new PTag("JavaScript", "tag-style1");
const t_python = new PTag("Python", "tag-style1");
const t_pyqt = new PTag("PyQt", "tag-style1");
const t_regex = new PTag("RegEx", "tag-style1");
// Programming Languages 
const l_rust = new PLanguage("Rust", "#dea584");
const l_hmtl = new PLanguage("HTML", "#e34c26");
const l_css = new PLanguage("CSS", "#563d7c");
const l_js = new PLanguage("JavaScript", "#f1e05a");
const l_makefile = new PLanguage("Makefile", "#427819");
const l_cpp = new PLanguage("C++", "#f34b7d");
const l_c = new PLanguage("C", "#555555");
const l_python = new PLanguage("Python", "#3572A5");
const l_glsl = new PLanguage("GLSL", "#5686a5"); 
const l_dart = new PLanguage("Dart", "#00B4AB");  
const l_shell = new PLanguage("Shell", "#89e051");
const l_cmake = new PLanguage("CMake", "#DA3434");
const l_swift = new PLanguage("Swift", "#F05138");
const l_other = new PLanguage("Other", "#ffffff"); 
// Projects
const projects = [
    new Project("Internal Package Registry", "project-1.png", "https://github.com", 
        [t_aws, t_rest_api, t_cli], [[l_rust, 37.0], [l_dart, 32.7], [l_python, 26.6], [l_shell, 2.4], [l_other, 1.3]]),
    new Project("Procedural Terrain", "project-2.png", "https://github.com", 
        [t_opengl, t_freeglut, t_raymarching, t_sdf, t_perlin, t_phong], [[l_cpp, 84.6], [l_c, 13.6], [l_glsl, 1.7], [l_other, 0.1]]),
    new Project("Cloud-Enabled Fingerprint Scanner", "project-3.png", "https://github.com", 
        [t_aws, t_rest_api, t_esp32, t_espidf, t_pcb, t_modular], [[l_c, 99.9], [l_other, 0.1]]),
    new Project("Cloud-Enabled TaskApp", "project-1.png", "https://github.com", 
        [t_firebase, t_firestore, t_flutter, t_gcpstorage], [[l_dart, 80.0], [l_cpp, 9.8], [l_cmake, 8.0], [l_c, 0.6]]),
    new Project("This Website", "project-2.png", "https://github.com", 
        [t_html, t_css, t_js], [[l_css, 41.2], [l_hmtl, 36.6], [l_js, 22.2]]),
    new Project("Flutter Package: SMenus", "project-3.png", "https://github.com", 
        [t_flutter], [[l_dart, 100.0]]),
    new Project("Client Quote Generator", "project-1.png", "https://github.com", 
        [l_python, t_pyqt, t_regex], [[l_python, 80.0], [l_cpp, 20.0]]),
        
];

// Get container that holds each project
const project_container = document.querySelector(".project-container");

// For every project we have defined, create a component

for (const project of projects) {
    // Add project to container
    project_container.innerHTML += project.toHTML();
}

