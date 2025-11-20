function flipTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page'+page).classList.add('active');
  playSound('whoosh');
}

function playSound(id) {
  const sounds = {
    pow: 'https://assets.codepen.io/605876/pow-sound.mp3',
    zap: 'https://assets.codepen.io/605876/zap-sound.mp3',
    boom: 'https://assets.codepen.io/605876/boom-sound.mp3',
    whoosh: 'https://assets.codepen.io/605876/page-flip.mp3'
  };
  new Audio(sounds[id] || sounds.whoosh).play();
}

// Auto-play background comic sound on first interaction
document.body.addEventListener('click', () => {
  document.body.removeEventListener('click', arguments.callee);
  new Audio('https://assets.codepen.io/605876/comic-bg-music.mp3').play().then(() => {}).catch(() => {});
}, { once: true });
