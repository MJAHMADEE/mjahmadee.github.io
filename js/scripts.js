
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, duration: 800 });
  new Typed('#typed-text', {
    strings: ['AI Engineer', 'Computer Vision Specialist', 'PhD Researcher', 'Software Architect'],
    typeSpeed: 60, backSpeed: 30, backDelay: 1400, loop: true
  });
  document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('hidden');
  });
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if(!target) return;
      target.classList.toggle('hidden');
      btn.textContent = btn.textContent.includes('Show More') ? 'Show Less' : 'Show More';
    });
  });
});
