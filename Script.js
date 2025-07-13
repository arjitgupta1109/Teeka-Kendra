document.addEventListener("DOMContentLoaded", function () {
 const themeToggle = document.getElementById("themeToggle");
 const logoutBtn = document.getElementById("logoutBtn");
 if (localStorage.getItem("theme") === "dark") {
 document.body.classList.add("dark-theme");
 }
 themeToggle.addEventListener("click", function () {
 document.body.classList.toggle("dark-theme");
 localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
 });
 logoutBtn.addEventListener("click", function () {
 localStorage.removeItem("loggedInUser");
 window.location.href = "login.html";
 });
});
