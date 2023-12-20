function toggleMenu() {
    const menu = document.querySelector(".mini-nav-menu-items");
    const icon = document.querySelector(".mini-nav-menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}