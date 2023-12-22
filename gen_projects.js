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
        return '<div style="background: ' + this.color + ';"></div>';
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

        for (const [lang, l_bytes] of Object.entries(this.languages)) {
            sum_bytes += l_bytes;
        }
        for (const [lang, l_bytes] of Object.entries(this.languages)) {
            var percent = 100.0 * l_bytes / sum_bytes;
            code_html += new PLanguage(lang.name, lang.color, percent).toHTML();
        }
        // Add project to container
        return '<!-- ' + this.name + ' -->\
        <div class="details-container color-container">\
          <!-- Thumbnail -->\
          <div class="article-container">\
            <img src="./assets/' + this.img + '" alt="' + this.name + ' Thumbnail" class="project-img">\
          </div>\
          <!-- Code Breakdown -->\
          <div class="code-breakdown-bar">\
            ' + code_html + '\
          </div>\
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
const l_rust = new PLanguage("Rust", "#fffff");
const l_cpp = new PLanguage("C++", "#fffff");
const l_c = new PLanguage("C", "#fffff");
const l_python = new PLanguage("Python", "#fffff");
const l_glsl = new PLanguage("GLSL", "#fffff");
// Projects
const projects = [
    new Project("Internal Package Registry", "project-1.png", "https://github.com", 
        [t_aws, t_rest_api, t_cli], {l_rust: 50.0, l_c: 50.0}),
    new Project("Procedural Terrain", "project-2.png", "https://github.com", 
        [t_opengl, t_freeglut, t_raymarching, t_sdf, t_perlin, t_phong], {l_cpp : 100.0}),
    new Project("Cloud-Enabled Fingerprint Scanner", "project-2.png", "https://github.com", 
        [t_aws, t_rest_api, t_esp32, t_espidf, t_pcb, t_modular], {l_rust: 100.0}),
    new Project("Cloud-Enabled TaskApp", "project-2.png", "https://github.com", 
        [t_firebase, t_firestore, t_flutter, t_gcpstorage], {l_rust: 100.0}),
    new Project("This Website", "project-2.png", "https://github.com", 
        [t_html, t_css, t_js], {l_rust: 100.0}),
    new Project("Flutter Package: SMenus", "project-2.png", "https://github.com", 
        [t_flutter], {l_rust: 100.0}),
    new Project("Client Quote Generator", "project-2.png", "https://github.com", 
        [l_python, t_pyqt, t_regex], {l_rust: 100.0}),
        
];

// Get container that holds each project
const project_container = document.querySelector(".project-container");

// For every project we have defined, create a component
for (const project of projects) {
    // Add project to container
    project_container.innerHTML += project.toHTML();
}

