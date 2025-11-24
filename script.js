gsap.registerPlugin(ScrollTrigger);

// Animate all text elements
gsap.utils.toArray('.animate-text').forEach((elem) => {
  gsap.fromTo(elem,
    { opacity:0, y:50 },
    { opacity:1, y:0, duration:1, ease:"power3.out",
      scrollTrigger: {
        trigger: elem,
        start: "top 80%"
      }
    }
  );
});

// Highlight navbar on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) { current = section.getAttribute('id'); }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current){
      link.classList.add('active');
    }
  });
});
