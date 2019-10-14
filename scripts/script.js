"use strict";

const navLinkHighlighter = (() => {
    // Caching DOM
    const pageSections = document.querySelectorAll(".section");
    const navbarHeight = document.querySelector(".nav").clientHeight;

    const options = {
        root: null,
        threshold: 0,
        rootMargin: `-${navbarHeight}px 0px -60% 0px`
    };

    const observerCb = (entries, observer) => {
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