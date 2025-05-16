// Changing Text
const texts = ["INNOVATE. INSPIRE. IMPACT", "EMPOWERING IDEAS REMOTELY", "CODE. BUILD. LAUNCH"];
let textIndex = 0;

setInterval(() => {
  document.getElementById("changingText").textContent = texts[textIndex];
  textIndex = (textIndex + 1) % texts.length;
}, 3000);

// Profile Auto Slider
let slider = document.getElementById("slider");
let profileIndex = 0;
const profiles = slider.children.length;

setInterval(() => {
  profileIndex = (profileIndex + 1) % profiles;
  slider.style.transform = `translateX(-${profileIndex * 100}%)`;
}, 4000);
