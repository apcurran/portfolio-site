"use strict";

const sectionHighlight = (() => {
    // const pageSections = document.querySelectorAll(".section");

    // function checkSection(event) {
    //     for (const section of pageSections) {
    //         const scrolledFromTop = window.pageYOffset;

    //         const sectionTop = section.getBoundingClientRect().top + scrolledFromTop;

    //         const sectionBottom = sectionTop + section.clientHeight;
    //         const isShown = scrolledFromTop >= sectionTop;
    //         const isNotScrolledPast = scrolledFromTop < sectionBottom;
            
    //         // Grab link
    //         const currentPanelData = section.dataset.section;
    //         const link = document.querySelector(`.${currentPanelData}`);

    //         if (isShown && isNotScrolledPast) {
    //             link.classList.add("active");
    //         } else {
    //             link.classList.remove("active");
    //         }
    //     }
    // }

    // function debounce(func, wait = 20, immediate = true) { // Debounce from Underscore.js
    //     var timeout;
    //     return function() {
    //       var context = this, args = arguments;
    //       var later = function() {
    //         timeout = null;
    //         if (!immediate) func.apply(context, args);
    //       };
    //       var callNow = immediate && !timeout;
    //       clearTimeout(timeout);
    //       timeout = setTimeout(later, wait);
    //       if (callNow) func.apply(context, args);
    //     };
    // }

    // window.addEventListener("scroll", debounce(checkSection));

    // Intersection Observer API //
    // Caching DOM els
    const pageSections = document.querySelectorAll(".section");
    const navbarHeight = document.querySelector(".nav").clientHeight;

    const options = {
        root: null,
        threshold: 0,
        rootMargin: `-${navbarHeight}px 0px -65% 0px`
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