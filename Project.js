document.addEventListener("DOMContentLoaded", function () {
 let loginForm = document.getElementById("loginForm");
 let signupForm = document.getElementById("signupForm");
 if (loginForm) {
 loginForm.addEventListener("submit", function (event) {
 event.preventDefault();
 login();
 });
 }
 if (signupForm) {
 signupForm.addEventListener("submit", function (event) {
 event.preventDefault();
 signUp();
 });
 }
});
function signUp() {
 let mobileNumber = document.getElementById("newMobile").value;
 let password = document.getElementById("newPassword").value;
 if (!/^\d{10}$/.test(mobileNumber)) {
 alert("Please enter a valid 10-digit mobile number.");
 return;
 }
 if (password.length < 6) {
 alert("Password must be at least 6 characters long.");
 return;
 }
 let users = JSON.parse(localStorage.getItem("users")) || [];
 if (users.some(user => user.mobileNumber === mobileNumber)) {
 alert("Mobile number already registered! Please login.");
 return;
 }
 let newUser = { mobileNumber, password };
 users.push(newUser);
 localStorage.setItem("users", JSON.stringify(users));
 let userDataJSON = JSON.stringify(users, null, 2);
 let blob = new Blob([userDataJSON], { type: "application/json" });
 let url = URL.createObjectURL(blob);
 let a = document.createElement("a");
 a.href = url;
 a.download = "userData.json";
 document.body.appendChild(a);
 a.click();
 document.body.removeChild(a);
 URL.revokeObjectURL(url);
 alert("Signup successful! Please login.");
 window.location.href = "login.html";
}
function saveUserDataToFile(users) {
 let userDataJSON = JSON.stringify(users, null, 2);
 let blob = new Blob([userDataJSON], { type: "application/json" });
 let url = URL.createObjectURL(blob);
 let a = document.createElement("a");
 a.href = url;
 a.download = "userData.json";
 document.body.appendChild(a);
 a.click();
 document.body.removeChild(a);
 URL.revokeObjectURL(url);
}
function login() {
 let mobileNumber = document.getElementById("loginMobile").value;
 let password = document.getElementById("loginPassword").value;
 let users = JSON.parse(localStorage.getItem("users")) || [];
 let user = users.find(user => user.mobileNumber === mobileNumber && user.password === password);
 if (user) {
 alert("Login successful!");
 localStorage.setItem("loggedInUser", mobileNumber);
 window.location.href = "dashboard.html";
 } else {
 alert("Invalid mobile number or password!");
 }
}
function updateDateTime() {
 const now = new Date();
 const options = { 
 weekday: 'long', 
 year: 'numeric', 
 month: 'long', 
 day: 'numeric', 
 hour: '2-digit', 
 minute: '2-digit', 
 second: '2-digit' 
 };
 document.getElementById("datetime").innerHTML = now.toLocaleString('en-US', options);
}
setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call
