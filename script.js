
const menuButton = document.querySelector("#menu-button");
const submenu = document.querySelector("#main-submenu");

function setMenuOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    submenu.hidden = !isOpen;
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
});

document.addEventListener("click", (event) => {
    const clickedInsideMenu = event.target.closest(".menu-wrapper");

    if (!clickedInsideMenu) {
        setMenuOpen(false);
    }
});

