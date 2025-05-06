
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({ once: true, duration: 800 });

  // Typed.js
  new Typed('#typed-text', {
    strings: ['AI Engineer', 'Computer Vision Specialist', 'PhD Researcher', 'Software Architect'],
    typeSpeed: 60, backSpeed: 30, backDelay: 1400, loop: true
  });

  // Mobile menu toggle
  document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('hidden');
  });

  // Toggle extra details
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const isHidden = target.classList.contains('hidden');
      target.classList.toggle('hidden', !isHidden);
      btn.textContent = isHidden ? 'Show Less' : 'Show More';
    });
  });
});
