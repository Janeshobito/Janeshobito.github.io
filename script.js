// Custom cursor
const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mouseover', e => {
  if(e.target.closest('a, button, .card')) cursor.classList.add('hover');
  else cursor.classList.remove('hover');
});

// Header scroll
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scrolled', scrollY > 50);
});

// Modal functionality
const modalBg = document.getElementById('modal-bg');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modalBg.classList.add('active');
  });
});

modalBg.addEventListener('click', e => {
  if(e.target === modalBg) modalBg.classList.remove('active');
});

// Simple particle background
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<100;i++){
  particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*0.5,dy:(Math.random()-0.5)*0.5});
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
    if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => { canvas.width=window.innerWidth; canvas.height=window.innerHeight; });
