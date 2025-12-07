// Select hamburger and nav links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle active class on click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate hamburger into X
    hamburger.classList.toggle('open');
});