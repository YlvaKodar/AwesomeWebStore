/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//variabler hämtade från index
const modal=document.getElementById("checkout");
const openModal=document.querySelectorAll(".checkoutPress");
const closeModal = document.querySelector(".close");
const submitOrder=document.getElementById("orderDone")

//bara error testing på hemsidan (tryck f12 och välj console)
console.log("Connection ESTABLISHED", modal, openModal);
console.log("Number of buttons found:", openModal.length);

//actionlistener till "köp" knapparna via variabeln ovan
openModal.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });
});

//actionlistener till krysset på popup
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

//actionlistener till hela sidan, om click != popup, displaya den inte
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

//actionlistener till fullname
document.getElementById("fullName").addEventListener("input", function() {
    let errorMessage = "";

    if (!this.value.includes(" ")) {
        errorMessage = "Please enter both first and last name.";
    } else if (this.value.length < 3 || this.value.length>50) {
        errorMessage = "Unsupported length";
    }

    this.setCustomValidity(errorMessage);
});

//actionlistener till phonenumber
document.getElementById("phoneNumber").addEventListener("input", function() {
    let errorMessage = "";

    //regex
    let phonePattern = /^[0-9\s\-()]+$/

    if (!phonePattern.test(this.value)) {
        errorMessage = "Please enter a valid phone number";
    } else if (this.value.length>50) {
        errorMessage = "Unsupported length";
    }

    this.setCustomValidity(errorMessage);
});

// address: Min 2 tecken och Max 50 tecken
document.getElementById(("address")).addEventListener("input", function() {
    let errorMessage = "";

    let postalPattern = /^.{2,50}$/;

    if (!postalPattern.test(this.value)) {
        errorMessage = "Please enter a valid address"
    }

    this.setCustomValidity(errorMessage);
});

// ii. postalCode: Exakt 5 siffror
document.getElementById(("postalCode")).addEventListener("input", function() {
    let errorMessage = "";

    let postalPattern = /^\d{5}$/;

    if (!postalPattern.test(this.value)) {
        errorMessage = "Please enter a valid postal number"
    }

    this.setCustomValidity(errorMessage);
});
// iii. city: Min 2 tecken och Max 50 tecken
document.getElementById(("city")).addEventListener("input", function() {
    let errorMessage = "";

    let postalPattern = /^[a-zA-Z\s]{2,50}$/;

    if (!postalPattern.test(this.value)) {
        errorMessage = "Please enter a valid city"
    }

    this.setCustomValidity(errorMessage);
});

const eggs = document.querySelectorAll(".hidden-egg");
const totalEggs = eggs.length;
let foundCount = 0;

// gör så det går att klicka på äggen
eggs.forEach(egg => {
    egg.addEventListener("click", function() {
        if (this.style.opacity !== "1") {
            this.style.opacity = "1";
            foundCount++;
            document.getElementById("eggCounter").innerText = `Found ${foundCount}/${totalEggs} Easter Eggs!`;
        }
        if (foundCount === totalEggs) {
            document.getElementById("eggCounter").innerText = 'Congratulations! You found all of the eggs! \n' +
                'You get 15% discount with code: EASTER15';
        }
    });
});


