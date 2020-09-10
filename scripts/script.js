"use strict";

{
    const nav = document.querySelector(".nav");
    
    nav.addEventListener("mouseenter", () => {
        const aboutSubMenu = nav.querySelector(".nav-list-about");
        aboutSubMenu.classList.remove("hide");
    });
}

{
    // Fade in images
    const sliders = document.querySelectorAll(".slider");
    const options = {
        threshold: 0.4,
    };

    function fadeUp(entries, observer) {
        for (let i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.add("appear");
                observer.unobserve(entries[i].target);
            }
        }
    }

    const sliderObserver = new IntersectionObserver(fadeUp, options);
    
    sliders.forEach(slider => sliderObserver.observe(slider));
}

{
    // Form Validation
    const form = document.forms.contact;
    const [name, email, message] = form.elements;
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
                
                if (input === name) {
                    error.textContent = "Please enter your full name.";
                } else if (input === email) {
                    error.textContent = "Please enter a valid email address.";
                } else {
                    error.textContent = "Please include a message before submitting.";
                }

                error.classList.add("error-active");
            }
        });

    }

    name.addEventListener("blur", checkValidity);
    email.addEventListener("blur", checkValidity);
    message.addEventListener("blur", checkValidity);
    form.addEventListener("submit", finalValidity);
}

{
    // Copyright year
    const yearSpan = document.querySelector(".copyright-year");
    const date = new Date().getFullYear();

    yearSpan.textContent = date;
}