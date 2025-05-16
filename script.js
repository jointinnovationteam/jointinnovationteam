// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlides, 4000);

// Changing words
const words = ["begins", "scales", "grows", "thrives", "arrives"];
let wordIndex = 0;
const changingWord = document.getElementById("changing-word");

setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  changingWord.textContent = words[wordIndex];
}, 2000);

// Toggle Menu
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
}
