"use strict";

const nav = document.querySelector(".nav");

function handleNav() {
    const aboutSubMenu = nav.querySelector(".nav-list-about");
    aboutSubMenu.classList.remove("hide");
}

nav.addEventListener("mouseenter", handleNav, { once: true });

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

// Copyright year
const yearSpan = document.querySelector(".copyright-year");
const date = new Date().getFullYear();

yearSpan.textContent = date;