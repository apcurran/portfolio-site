export function initNavMenu() {
    const navSubMenuBtn = document.querySelector(".nav-sub-menu__title");
    const navSubMenu = document.querySelector(".nav-list-about");

    if (!navSubMenuBtn || !navSubMenu) {
        console.error("Could not retrieve nav menu or sub menu btn");

        return;
    }

    function handleNavMenuClick() {
        if (!navSubMenu.classList.contains("nav-list-about--show")) {
            openNavMenu();
        } else {
            closeNavMenu();
        }
    }

    function handleNavMenuOutsideClick(event) {
        if (event.target === navSubMenuBtn) return;

        const isOutside = !event.target.closest(".nav-list-about");

        if (isOutside) closeNavMenu();
    }

    function openNavMenu() {
        navSubMenu.classList.add("nav-list-about--show");
        navSubMenuBtn.classList.add("nav-sub-menu__title--rotate");
        navSubMenuBtn.ariaExpanded = "true";
    }

    function closeNavMenu() {
        navSubMenu.classList.remove("nav-list-about--show");
        navSubMenuBtn.classList.remove("nav-sub-menu__title--rotate");
        navSubMenuBtn.ariaExpanded = "false";
    }

    navSubMenuBtn.addEventListener("click", handleNavMenuClick);
    document.addEventListener("click", handleNavMenuOutsideClick);
}
