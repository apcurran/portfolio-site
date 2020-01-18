"use strict";

{
    window.onload = () => {
        const aboutSubMenu = document.querySelector(".nav-list-about");
        setTimeout(aboutSubMenu.classList.remove("hide"), 1000);
    };
}

{
    // Nav link highlighter
    const pageSections = document.querySelectorAll(".section");
    const navbarHeight = document.querySelector(".nav").clientHeight;
    const floater = document.querySelector(".floater");

    const options = {
        root: null,
        threshold: 0,
        rootMargin: `-${navbarHeight}px 0px -60% 0px`
    };

    function navHighlighter(entries, observer) {
        for (const entry of entries) {
            const currentPanelData = entry.target.dataset.section;
            const activeAnchor = document.querySelector(`[data-page=${currentPanelData}]`);

            const coords = activeAnchor.getBoundingClientRect();
            const directions = {
                height: coords.height,
                width: coords.width,
                top: coords.top,
                left: coords.left
            }

            if (entry.isIntersecting) {
                // debugger;

                floater.style.setProperty("width", `${directions.width}px`);
                floater.style.setProperty("height", `${directions.height}px`);
                floater.style.setProperty("left", `${directions.left}px`);
                floater.style.setProperty("transform", `translateY(${directions.top}px)`);
            }

        }
    }

    const observer = new IntersectionObserver(navHighlighter, options);

    for (const section of pageSections) {
        observer.observe(section);
    }
}

{
    // Fade in images
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
}

{
    // Form Validation
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
}

{
    // Copyright year
    const yearSpan = document.querySelector(".copyright-year");
    const date = new Date().getFullYear();

    yearSpan.textContent = date;
}