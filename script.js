// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%"
  }
});

gsap.from(".metric-card", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#metrics",
    start: "top 80%"
  }
});

gsap.from("header h1, header p, header a", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.3,
  delay: 0.5
});
