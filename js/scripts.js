
document.addEventListener('DOMContentLoaded', ()=>{
  AOS.init({ once:true, duration:800, offset:80 });
  new Typed('#typed',{ strings:['AI Engineer','Computer Vision Specialist','PhD Researcher'], typeSpeed:60, backSpeed:30, backDelay:1400, loop:true });
  document.getElementById('menuBtn').addEventListener('click',()=> document.getElementById('navList').classList.toggle('hidden'));
  document.querySelectorAll('.toggle-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const det = document.getElementById(btn.dataset.target);
      det.style.display = det.style.display==='block'?'none':'block';
      btn.textContent = det.style.display==='block'?'Show Less':'Show More';
    });
  });
});
