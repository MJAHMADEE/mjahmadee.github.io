
document.addEventListener('DOMContentLoaded',()=>{
  AOS.init({once:true,duration:800,offset:80});
  new Typed('#typed',{strings:['AI Engineer','Computer Vision Specialist','PhD Researcher','Software Architect'],typeSpeed:60,backSpeed:30,backDelay:1400,loop:true});
  document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('navList').classList.toggle('hidden'));
});
