// تسجيل ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// حركة Hero Section
gsap.timeline()
  .from("nav", { y: -100, opacity: 0, duration: 1, ease: "power2.out" })
  .from(".hero-section h1", { y: 50, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5")
  .from(".hero-section p", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.3")
  .to(".hero-section button", { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }, "+=0.2");

// حركة About Section
gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  }
})
.from(".about-images", { x: -100, opacity: 0, duration: 1, ease: "power2.out" })
.from(".about-img-1", { scale: 0.8, rotation: -5, duration: 0.8 }, "-=0.5")
.from(".about-img-2", { scale: 0.8, rotation: 5, duration: 0.8 }, "-=0.6")
.from(".about-badge", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
.from(".about-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.3")
.from(".about-text", { y: 20, opacity: 0, duration: 0.6 }, "-=0.2");

// عداد الأرقام
function animateCounter() {
  const counter = document.querySelector('.counter');
  const target = parseInt(counter.getAttribute('data-target'));
  let current = 0;
  const increment = target / 50;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    counter.textContent = Math.floor(current);
  }, 40);
}

// تشغيل عداد الأرقام عند الوصول للقسم
ScrollTrigger.create({
  trigger: ".stats-container",
  start: "top 80%",
  onEnter: animateCounter
});

// حركة الإحصائيات
gsap.timeline({
  scrollTrigger: {
    trigger: ".stats-container",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
})
.from(".stats-number", { scale: 0, rotation: 360, duration: 1, ease: "back.out(1.7)" })
.from(".stats-text", { x: 50, opacity: 0, duration: 0.8 }, "-=0.5");

// حركة Why Us Section
gsap.timeline({
  scrollTrigger: {
    trigger: "#why-us",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
})
.from(".why-us-image-container", { x: 100, opacity: 0, duration: 1 })
.from(".service-card", { 
  y: 50, 
  opacity: 0, 
  duration: 0.6, 
  stagger: 0.1,
  ease: "power2.out"
}, "-=0.5");

// تأثيرات hover للكاردات
document.querySelectorAll('.service-card, .branch-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
  });
});

// تأثير parallax للخلفيات
gsap.to(".hero-section", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

// حركة النقاط المتحركة
gsap.to(".animate-pulse", {
  scale: 1.2,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
  stagger: 0.1
});