// Classes
class JElement {
    // Abstract class: https://medium.com/@rheedhar/abstract-classes-in-javascript-d6510afac958
    constructor(_name) {
        if (this.constructor == JElement) {
            throw new Error("Class is of abstract type and can't be instantiated");
        };

        if (this.toHTML == undefined) {
            throw new Error("toHTML method must be implemented");
        };
        this.name = _name;
    }
};

// Jobs [Title (name), Location, Timeframe (Length), Description]
class Job extends JElement {
    constructor(_name, _company, _timeframe, description = null, logo = null) {
        super(_name);
        this.company = _company;
        this.timeframe = _timeframe;
        this.description = description;
        this.logo = logo
    }

    toHTML() {
        return '<!-- Job as a ' + this.name + ' -->\
        <div class="details-container translate2-container">\
          <div style="display:flex;flex-direction: row;">\
            <!-- Thumbnail -->\
            <div style="text-align: center;">\
                <img src="./assets/' + this.logo + '" alt="' + this.company + ' Logo" class="job-thumbnail">\
            </div>\
            <!-- Details -->\
            <div style="text-align: left;">\
                <h2>' + this.name + '</h2>\
                <h4 style="font-weight: 400; font-size:medium;">at ' + this.company + '</h4>\
                <p class="gray-text" style="font-weight: 300;">' + this.timeframe + '</p>\
                ' + (this.description ? '<p class="gray-text">' + this.description + '</p>' : '') + '\
            </div>\
          </div>\
        </div>';
    }
};

function addLinkToBottom() {
    return '<div style="border-left: 3px \
    solid rgba(0, 0, 0, 0.1); \
    height: 100px;\
    position: relative;\
    left: 50%;\
    margin-left: -1.5px;\
    top: 0;">\
    </div>'
}

const jobs = [
    new Job("IT Backend Apps Programmer Associate", "Progressive Insurance", "July 2024 to Present", '', 'prog_logo.png'),
    new Job("Software Developer Intern", "Progressive Insurance", "May 2023 to August 2023", '', 'prog_logo.png'),
    new Job("Computer Engineer Intern", "Aurora Circuits", "May 2021 to August 2021", '', 'ac_logo.png')

];

// Get container that holds jobs
const jobs_container = document.querySelector("#jobs-container");

last = jobs[jobs.length - 1]
for (const job of jobs) {
    // Add job to container
    jobs_container.innerHTML += job.toHTML();
    if (job != last) {
        jobs_container.innerHTML += addLinkToBottom()
    }
}