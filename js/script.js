// Mobile menu toggle (future support)
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
}

// Simple form validation
function validateForm() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let msg = document.querySelector("#message").value;

    if (name === "" || email === "" || msg === "") {
        alert("Please fill all fields!");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}
