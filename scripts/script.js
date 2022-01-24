"use strict";

const nav = document.querySelector(".nav");

function handleNav() {
    const aboutSubMenu = nav.querySelector(".nav-list-about");
    aboutSubMenu.classList.remove("hide");
}

nav.addEventListener("mouseenter", handleNav, { once: true });

// Form Validation
const form = document.forms.contact;
const username = form.querySelector(".contact-input--username");
const email = form.querySelector(".contact-input--email");
const message = form.querySelector(".contact-input--message");
const allUserInputs = form.querySelectorAll(".contact-user-input");

function checkValidity(event) {
    if (event.currentTarget.validity.valid && event.currentTarget.value !== "") {
        const currentEl = event.currentTarget;
        const error = currentEl.nextElementSibling;

        error.textContent = "";
        error.classList.remove("error-active");
    }
}

function finalValidity(event) {
    allUserInputs.forEach((input) => {
        if (!input.validity.valid || input.value === "") {
            event.preventDefault();

            const error = input.nextElementSibling;
            
            if (input.name === "name") {
                error.textContent = "Please enter your full name.";
            } else if (input.name === "email") {
                error.textContent = "Please enter a valid email address.";
            } else if (input.name === "message") {
                error.textContent = "Please include a message before submitting.";
            }

            error.classList.add("error-active");
        }
    });

}

username.addEventListener("blur", checkValidity);
username.addEventListener("keyup", checkValidity);
email.addEventListener("blur", checkValidity);
email.addEventListener("keyup", checkValidity);
message.addEventListener("blur", checkValidity);
message.addEventListener("keyup", checkValidity);
form.addEventListener("submit", finalValidity);

// Copyright year
const yearSpan = document.getElementById("copyright-year");
const date = new Date().getFullYear();

yearSpan.textContent = date;