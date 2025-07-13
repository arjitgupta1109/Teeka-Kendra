document.addEventListener("DOMContentLoaded", function () {
 const taglines = [
 "Stay Safe, Get Vaccinated Today!",
 "Your Health, Your Protection, Your Future!",
 "One Shot Closer to a Healthier Tomorrow!"
 ];
 let taglineIndex = 0;
 const taglineElement = document.getElementById("animatedTagline");
 function animateTagline() {
 taglineElement.style.opacity = "0"; // Start fade-out
 setTimeout(() => {
 taglineElement.textContent = ""; // Clear previous text
 let words = taglines[taglineIndex].split(" ");
 let wordIndex = 0;
 function typeNextWord() {
 if (wordIndex < words.length) {
 taglineElement.textContent += words[wordIndex] + " ";
 wordIndex++;
 setTimeout(typeNextWord, 200); // Typing speed
 } else {
 setTimeout(() => {
 taglineElement.style.opacity = "1"; // Fade-in effect
 taglineIndex = (taglineIndex + 1) % taglines.length;
 setTimeout(animateTagline, 3000); // Wait before next tagline
 }, 300);
 }
 }
 typeNextWord();
 }, 300); // Pause before typing the next tagline
 }
 animateTagline();
});
