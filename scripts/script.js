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

    
    let windowHeight = window.innerHeight;
    let halfSliderHeight = sliders[0].offsetHeight / 2;
    
    function recacheSliderVars() {
        // Re-cache above vars if user has resized the window.
        windowHeight = window.innerHeight;
        halfSliderHeight = sliders[0].offsetHeight / 2;
    }
    
    window.addEventListener("scroll", () => requestAnimationFrame(checkSlide));
    window.onresize = recacheSliderVars; // Only execute on resize event.

    function checkSlide() {
        // Calculate once before loop, then re-use within loop
        const slideInAt = (window.scrollY + windowHeight) - halfSliderHeight;
        
        for (let i = 0; i < sliders.length; i++) {
            // Is half the card showing?
            if (slideInAt > sliders[i].offsetTop) {
                sliders[i].classList.add("appear");
            }
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