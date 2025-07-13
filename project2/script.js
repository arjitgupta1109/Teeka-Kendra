document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const logoutBtn = document.getElementById("logoutBtn");

    // Load and apply saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }

    // Toggle Theme and Save Preference
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });

    // Logout Functionality
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    });
});