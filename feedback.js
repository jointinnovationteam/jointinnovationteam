// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Star rating logic
const stars = document.querySelectorAll('.rating-stars label');
const starInputs = document.querySelectorAll('.rating-stars input');

stars.forEach((star, idx) => {
  star.addEventListener('click', () => {
    for (let i = 0; i < starInputs.length; i++) {
      starInputs[i].checked = false;
    }
    for (let i = starInputs.length - 1; i >= starInputs.length - (idx + 1); i--) {
      starInputs[i].checked = true;
    }
  });
});
