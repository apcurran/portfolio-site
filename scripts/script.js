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

    window.addEventListener("scroll", debounce(checkSlide, 15));

    function checkSlide() {
        // Calculate once before loop, then re-use within loop
        const slideInAt = (window.scrollY + window.innerHeight) - sliders[0].offsetHeight / 2;
        
        for (let i = 0; i < sliders.length; i++) {
            const isHalfShown = slideInAt > sliders[i].offsetTop;
    
            if (isHalfShown) {
                sliders[i].classList.add("appear");
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
                
                if (input.name === "name") {
                    error.textContent = "Please enter your full name.";
                } else if (input.name === "email") {
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