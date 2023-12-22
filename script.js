function toggleMenu() {
    const menu = document.querySelector(".mini-nav-menu-items");
    const icon = document.querySelector(".mini-nav-menu-icon");
    const menu_bg = document.querySelector(".mini-nav-menu-bg");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    menu_bg.classList.toggle("open");
}