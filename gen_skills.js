// Classes
class SElement {
    // Abstract class: https://medium.com/@rheedhar/abstract-classes-in-javascript-d6510afac958
    constructor(_name) {
        if (this.constructor == SElement) {
            throw new Error("Class is of abstract type and can't be instantiated");
        };

        if (this.toHTML == undefined) {
            throw new Error("toHTML method must be implemented");
        };
        this.name = _name;
    }
};

const ExpLevels = {
    high: "Experienced",
    med: "Intermediate",
    low: "Basic",
    none: ""
}

// Skills [Name, Experience Level]
class Skill extends SElement {
    constructor(_name, _experience, _style) {
        super(_name);
        this.experience = _experience;
        this.style = _style;
    }
    toHTML() {
        var style_val = "tag-style" + Math.max(Math.floor((Math.random() - 0.0001) * 4), 1)

        return '<div class="skill-tag ' + style_val + '">\
        <p class="tag-title">' + this.name + '</p>\
        <p class="tag-subtitle">' + this.experience + '</p>\
        </div>';
    }
    // toHTML() {
    //     return '<!-- Skill: ' + this.name + ' -->\
    //     <article>\
    //         <img src="./assets/checkmark.png" alt="Skills Checkmark" class="icon">\
    //         <div>\
    //         <h3>' + this.name + '</h3>\
    //         <p>' +  + '</p>\
    //         </div>\
    //     </article>';
    // }
};

// Skills
const skills = [
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
    new Skill("Docker", ExpLevels.med),
    new Skill("Firebase", ExpLevels.med),
    new Skill("MongoDB", ExpLevels.low),
];

// Get container that holds skills
const skills_container = document.querySelector("#skills-container");

var skills_html = '';
// For every skill we have defined, create a component
for (const skill of skills) {
    // Add skill to container
    skills_html += skill.toHTML();
}
skills_html += new Skill('+' + skills.length + '', ExpLevels.none).toHTML()
// Add both skill sections to container
skills_container.innerHTML += skills_html