
const menuButton = document.querySelector("#menu-button");
const submenu = document.querySelector("#main-submenu");
const searchButton = document.querySelector("#search-button");
const searchPopup = document.querySelector("#site-search");
const searchCloseButton = document.querySelector("#search-close-button");

function setMenuOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    submenu.hidden = !isOpen;
}

function setSearchOpen(isOpen) {
    searchButton.setAttribute("aria-expanded", String(isOpen));
    searchPopup.hidden = !isOpen;

    if (isOpen) {
        setMenuOpen(false);
        searchInput.focus();
    }
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

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.focus();
    }
});

submenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        setMenuOpen(false);
    });
});