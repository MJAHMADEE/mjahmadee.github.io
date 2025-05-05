
// Init AOS
AOS.init({
  once: true,
  duration: 800,
  offset: 120,
});

// Typed.js for hero tagline
var typed = new Typed('#typed', {
  strings: ['AI Engineer', 'Computer Vision Specialist', 'Software Architect'],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});
