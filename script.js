// Basic GSAP + ScrollTrigger animations
gsap.registerPlugin(ScrollTrigger);

// hero scale-in
gsap.from(".hero-panel", {
  duration: 1.1,
  y: 40,
  opacity: 0,
  ease: "power3.out"
});

// panels entrance stagger with a slight rotation for comic effect
gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    y: 40,
    rotation: gsap.utils.random(-2, 2),
    opacity: 0,
    duration: 0.9,
    delay: i * 0.06,
    ease: "power3.out"
  });

  // tiny hover tilt
  card.addEventListener("mousemove", (e) => {
    let rect = card.getBoundingClientRect();
    let mx = (e.clientX - (rect.left + rect.width/2)) / rect.width;
    let my = (e.clientY - (rect.top + rect.height/2)) / rect.height;
    gsap.to(card, {rotationY: mx * 6, rotationX: my * -4, duration: 0.4, ease:"power2.out"});
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {rotationY: 0, rotationX: 0, duration: 0.6, ease:"power3.out"});
  });
});

// cinematic parallax "camera" on scroll for hero
gsap.to(".hero-panel", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: 0.6,
    start: "top top",
    end: "bottom top"
  },
  y: -80,
  scale: 1.03,
  ease: "none"
});

// example: punchy reveal for a selected project (you can add click handlers)
document.querySelectorAll(".panel").forEach(el=>{
  el.addEventListener("click", ()=> {
    // zoom the clicked panel into view like a 'camera punch'
    gsap.timeline()
      .to(".card", {opacity:0.2, scale:0.98, duration:0.25})
      .to(el, {opacity:1, scale:1.06, duration:0.35})
      .to(el, {scale:1, duration:0.35});
  });
});
