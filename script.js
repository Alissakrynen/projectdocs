
// muis interactie
document.addEventListener('mousemove',e=>{
const x=(e.clientX/window.innerWidth)*100;
const y=(e.clientY/window.innerHeight)*100;
document.body.style.setProperty('--x',x+'%');
document.body.style.setProperty('--y',y+'%');

document.querySelectorAll('.eye').forEach(eye=>{
const rect=eye.getBoundingClientRect();
const dx=e.clientX-(rect.left+rect.width/2);
const dy=e.clientY-(rect.top+rect.height/2);
const angle=Math.atan2(dy,dx);
eye.style.transform=`translate(${Math.cos(angle)*3}px,${Math.sin(angle)*3}px)`;
});
});

// knipperen
setInterval(()=>{
document.querySelectorAll('.eye').forEach(e=>e.classList.add('blink'));
setTimeout(()=>{
document.querySelectorAll('.eye').forEach(e=>e.classList.remove('blink'));
},150);
},4000);

// scroll animatie
const cards=document.querySelectorAll('.week-card');
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')});
});
cards.forEach(c=>observer.observe(c));

// actieve navigatie
document.querySelectorAll('.navigation a').forEach(link=>{
if(link.href===window.location.href)link.classList.add('active');
});

// dark mode
const toggle=document.querySelector('.toggle');
if(toggle){
toggle.addEventListener('click',()=>{
document.body.classList.toggle('dark');
toggle.textContent=document.body.classList.contains('dark')?'☀️ Light':'🌙 Dark';
});
}
