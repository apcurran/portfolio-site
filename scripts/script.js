"use strict";

{
    window.onload = () => {
        const aboutSubMenu = document.querySelector(".nav-list-about");
        setTimeout(aboutSubMenu.classList.remove("hide"), 1000);
    };
}

{
    // Fade in images
    const sliders = document.querySelectorAll(".slider");
    const options = {
        threshold: 0.15,
    };

    function fadeUp(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        })
    }

    const sliderObserver = new IntersectionObserver(fadeUp, options);

    sliders.forEach(slider => sliderObserver.observe(slider));
}

{
    // Form Validation
    const form = document.forms.contact;
    const [nameInput, emailInput, messageInput] = form.elements;
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