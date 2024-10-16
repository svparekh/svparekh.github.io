function toggleMenu() {
    const menu = document.querySelector(".mini-nav-menu-items");
    const icon = document.querySelector(".mini-nav-menu-icon");
    const menu_bg = document.querySelector(".mini-nav-menu-bg");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    menu_bg.classList.toggle("open");
}

// Classes
class BaseElement {
    // Abstract class: https://medium.com/@rheedhar/abstract-classes-in-javascript-d6510afac958
    constructor(_name) {
        if (this.constructor == BaseElement) {
            throw new Error("Class is of abstract type and can't be instantiated");
        };

        if (this.toHTML == undefined) {
            throw new Error("toHTML method must be implemented");
        };
        this.name = _name;
    }
};

// Get container that holds jobs
const footer = document.querySelector("#footer");
footer.innerHTML += '<p class="gray-text">Copyright &#169; ' + new Date().getFullYear().toString() + ' Setul Parekh. All rights reserved.</p>';