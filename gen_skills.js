// Classes
class SElement {
    // Abstract class: https://medium.com/@rheedhar/abstract-classes-in-javascript-d6510afac958
    constructor(_name) {
       if(this.constructor == SElement) {
          throw new Error("Class is of abstract type and can't be instantiated");
       };
 
       if(this.toHTML == undefined) {
           throw new Error("toHTML method must be implemented");
       };
       this.name = _name;
    }
};

const ExpLevels = {
	high: "Experienced",
	med: "Intermediate",
	low: "Basic",
}

// Skills [Name, Experience Level]
class Skill extends SElement{
    constructor(_name, _experience,) {
        super(_name);
        this.experience = _experience;
    }

    toHTML() {
        return '<!-- Skill: ' + this.name + ' -->\
        <article>\
            <img src="./assets/checkmark.png" alt="Skills Checkmark" class="icon">\
            <div>\
            <h3>' + this.name + '</h3>\
            <p>' + this.experience + '</p>\
            </div>\
        </article>';
    }
};

// Skills
const b_skills = [
    new Skill("Python", ExpLevels.high),
    new Skill("Algorithms", ExpLevels.high),
    new Skill("Data Structures", ExpLevels.high),
    new Skill("Cloud Computing", ExpLevels.med),
    new Skill("Git", ExpLevels.high),
    new Skill("Agile", ExpLevels.med),
    new Skill("Scrum", ExpLevels.med),
    new Skill("REST", ExpLevels.med),
    new Skill("AWS", ExpLevels.med), // Amazon Web Services?
    new Skill("Azure", ExpLevels.low), // Microsoft Azure?
    new Skill("GCP", ExpLevels.low), // Google Cloud Platform?
    new Skill("Terraform", ExpLevels.low),
    new Skill("Docker", ExpLevels.low),
    new Skill("Firebase", ExpLevels.med),
    new Skill("MongoDB", ExpLevels.low),
];

const f_skills = [
    new Skill("Flutter", ExpLevels.high),
    new Skill("HTML", ExpLevels.low),
    new Skill("CSS", ExpLevels.low),
    new Skill("UI/UX", ExpLevels.med),
    new Skill("JavaScript", ExpLevels.low),
    new Skill("OpenGL", ExpLevels.med),
    new Skill("GLSL", ExpLevels.med),
];

// Get container that holds skills
const skills_container = document.querySelector("#skills-container");
// Add backend containers
var skills_html = '<!-- Backend Development -->\
<div class="details-container">\
    <h2 class="experience-subtitle">Backend Development</h2>\
    <div class="article-container">';
// For every skill we have defined for backend, create a component
for (const skill of b_skills) {
    // Add skill to container
    skills_html += skill.toHTML();
}
// Close backend containers
skills_html += '</div></div>';
// Add frontend containers
skills_html += '<!-- Frontend Development -->\
<div class="details-container">\
  <h2 class="experience-subtitle">Frontend Development</h2>\
  <div class="article-container">';
// For every skill we have defined for frontend, create a component
for (const skill of f_skills) {
    // Add skill to container
    skills_html += skill.toHTML();
}
// Close frontend containers
skills_html += '</div></div>';
// Add both skill sections to container
skills_container.innerHTML += skills_html