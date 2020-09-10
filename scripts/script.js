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

    window.addEventListener("scroll", debounce(checkSlide, 20));

    function checkSlide(event) {
        for (let slider of sliders) {
            // Half of img
            const slideInAt = (window.scrollY + document.documentElement.clientHeight) - slider.offsetHeight / 2;
            const isHalfShown = slideInAt > slider.offsetTop;

            if (isHalfShown) {
                slider.classList.add("appear");
            }
        }
    }

    function debounce(func, ms) {
        let isCooldown = false;
        
        return function() {
            if (isCooldown) return;
            
            func.apply(this, arguments);
            isCooldown = true;
            
            setTimeout(() => isCooldown = false, ms);
        }
    }
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