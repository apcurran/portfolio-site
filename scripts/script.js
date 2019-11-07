"use strict";

const removeAboutHide = (() => {
    window.onload = () => {
        const aboutSubMenu = document.querySelector(".nav-list-about");
        aboutSubMenu.classList.remove("hide");
    };
})();

const navLinkHighlighter = (() => {
    // Caching DOM
    const pageSections = document.querySelectorAll(".section");
    const navbarHeight = document.querySelector(".nav").clientHeight;

    const options = {
        root: null,
        threshold: 0,
        rootMargin: `-${navbarHeight}px 0px -60% 0px`
    };

    function observerCb(entries, observer) {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const currentPanelData = entry.target.dataset.section;
                const currentlyActive = document.querySelector(".nav-list-main-item-link.active");
                const shouldBeActive = document.querySelector(`.${currentPanelData}`);
                
                if (currentlyActive) {
                    currentlyActive.classList.remove("active");
                }
    
                if (shouldBeActive) {
                    shouldBeActive.classList.add("active");
                }
            }

        }
    }

    const observer = new IntersectionObserver(observerCb, options);

    for (const section of pageSections) {
        observer.observe(section);
    }
})();

const fadeInImages = (() => {
    const sliders = document.querySelectorAll(".slider");

    const fadeOptions = {
        threshold: 0,
        rootMargin: "0px 0px -60px 0px"
    };

    function observerCb(entries, observer) {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        }
    }

    const sliderObserver = new IntersectionObserver(observerCb, fadeOptions);

    for (const slider of sliders) {
        sliderObserver.observe(slider);
    }
})();