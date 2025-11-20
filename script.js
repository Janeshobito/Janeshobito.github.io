// Animate progress bars and circles on scroll/view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.progress-bar, .circle-progress');
      bars.forEach(bar => {
        if (bar.style.width) bar.style.width = bar.style.width;
        else bar.style.setProperty('--progress', bar.style.getPropertyValue('--progress'));
      });
    }
  });
});

document.querySelectorAll('.skills-card, .languages-section').forEach(el => observer.observe(el));
