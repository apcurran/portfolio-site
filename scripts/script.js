"use strict";

const removeAboutHide = (() => {
    window.onload = () => {
        const aboutSubMenu = document.querySelector(".nav-list-about");
        setTimeout(aboutSubMenu.classList.remove("hide"), 1000);
    };
})();

const navLinkHighlighter = (() => {
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

const formValidation = (() => {
    const form = document.forms.contact;
    const nameInput = form.elements.name;
    const emailInput = form.elements.email;
    const messageInput = form.elements.message;
    const allUserInputs = form.querySelectorAll(".contact-user-input");

    function checkValidity(event) {
        if (event.currentTarget.validity.valid) {
            const currentEl = event.currentTarget;
            const error = currentEl.nextElementSibling;
            error.textContent = "";
            error.classList.remove("error-active");
        }
    }

    function finalValidity(event) {
        allUserInputs.forEach(input => {
            if (!input.validity.valid || input.value === "") {
                event.preventDefault();
                const error = input.nextElementSibling;
                
                if (input === nameInput) {
                    error.textContent = "Please enter your full name.";
                } else if (input === emailInput) {
                    error.textContent = "Please enter a valid email address.";
                } else if (input === messageInput) {
                    error.textContent = "Please include a message before submitting.";
                }

                error.classList.add("error-active");
            }
        });

    }

    nameInput.addEventListener("blur", checkValidity);
    emailInput.addEventListener("blur", checkValidity);
    messageInput.addEventListener("blur", checkValidity);
    form.addEventListener("submit", finalValidity);
})();