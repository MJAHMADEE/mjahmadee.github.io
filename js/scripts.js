
document.addEventListener('DOMContentLoaded', ()=>{
  AOS.init({ once:true, duration:800, offset:80 });
  if(document.getElementById('typed')){
    new Typed('#typed',{
      strings:['AI Engineer','Computer Vision Specialist','PhD Researcher','Software Architect'],
      typeSpeed:60,
      backSpeed:30,
      backDelay:1500,
      loop:true
    });
  }
  // mobile nav
  const btn=document.getElementById('menuBtn');
  const nav=document.getElementById('navList');
  btn.addEventListener('click',()=>nav.classList.toggle('hidden'));
});
