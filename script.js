let currentPage = 1;
function flipTo(pageNum) {
  document.querySelector('.page.active').classList.remove('active');
  document.getElementById(`page${pageNum}`).classList.add('active');
  currentPage = pageNum;
  playSound('whoosh'); // Page flip sound
  if (pageNum === 1) document.querySelector('.comic-nav').style.display = 'flex'; else document.querySelector('.comic-nav').style.display = 'none';
}

// Play sounds (free from Pixabay/SoundBible)
function playSound(type) {
  const audio = document.getElementById(type);
  audio.currentTime = 0;
  audio.play().catch(() => {}); // Silent fail if no audio
}

// Keyboard nav for fun (arrow keys flip pages)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' && currentPage < 5) flipTo(currentPage + 1);
  if (e.key === 'ArrowLeft' && currentPage > 1) flipTo(currentPage - 1);
});

// Easter egg: Click hero for confetti (using canvas for fun)
document.querySelector('.hero-panel').addEventListener('click', () => {
  playSound('pow');
  // Simple confetti burst
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const star = document.createElement('div');
      star.style.cssText = 'position:fixed;top:50%;left:50%;width:10px;height:10px;background:#ff0;border-radius:50%;pointer-events:none;animation:confetti 1s forwards;z-index:100;';
      star.style.transform = `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px) rotate(${Math.random()*360}deg)`;
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 1000);
    }, i * 50);
  }
});
