
function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    // Extracts HH:MM:SS
    utcTimeElement.textContent = utcTime;
}

// Update the time every second 
setInterval(updateUTCTime, 1000);

// Inital call to set the time immediately
updateUTCTime();

// code for form input
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    const errors = {
        name: document.getElementById("error-name"),
        email: document.getElementById("error-email"),
        subject: document.getElementById("error-subject"),
        message: document.getElementById("error-message"),
    };

    //reset the form
    Object.values(errors).forEach((err) => {
        err.style.display = "none";
        err.textContent = "";
    });
    successMessage.style.display = "none";

    //validation rules
    if (!name) {
        errors.name.textContent = "Please enter your Full name.";
        errors.name.style.display = "block";
        valid = false;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email || !emailPattern.test(email)) {
        errors.email.textContent = "Please enter a valid email.";
        errors.email.style.display = "block";
        valid = false;
    }

    if (!subject) {
        errors.subject.textContent = "Please subject is required.";
        errors. subject.style.display = "block";
        valid = false;
    }

    if (!message || message.length < 10) {
        errors.message.textContent = "Message must be at least 10 characters.";
        errors.message.style.display = "block";
        valid = false;
    }

    //success
    if (valid) {
        successMessage.textContent = "Your message has been sent successfully!";
        successMessage.style.display = "block";
        form.reset();
    }      
});