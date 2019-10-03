"use strict";

const menuModule = (() => {
    const aboutSpan = document.querySelector(".nav-list-about-span");
    const aboutSubMenu = document.querySelector(".nav-list-about");
    
    function toggleSubMenu(event) {
        aboutSubMenu.classList.toggle("show-sub-menu");
    }

    aboutSpan.addEventListener("click", toggleSubMenu);
})();