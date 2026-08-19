
const menuButton = document.querySelector("#menu-button");
const submenu = document.querySelector("#main-submenu");

function setMenuOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    submenu.hidden = !isOpen;
}