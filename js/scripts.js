
document.addEventListener('DOMContentLoaded', ()=>{
  AOS.init({once:true,duration:800,offset:80});
  new Typed('#typed',{strings:[
    'AI Engineer','Computer Vision Specialist','PhD Researcher','Software Architect'
  ],typeSpeed:60,backSpeed:30,backDelay:1400,loop:true});

  // Mobile menu
  document.getElementById('menuBtn').addEventListener('click',()=>{
    document.getElementById('navList').classList.toggle('hidden');
  });

  // Toggles
  document.querySelectorAll('.toggle-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      let target=document.getElementById(btn.dataset.target);
      if(!target) return;
      const expanded=target.style.display==='block';
      target.style.display=expanded?'none':'block';
      btn.textContent= expanded? 'Show More' : 'Show Less';
    });
  });
});
