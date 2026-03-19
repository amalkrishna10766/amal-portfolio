const typedText = document.getElementById("typedText");
const text = "SOC • THREAT MONITORING • SYSTEM ANALYSIS • CYBERSECURITY";
let idx = 0;

setInterval(() => {
  idx = (idx + 1) % (text.length + 1);
  if (typedText) typedText.textContent = text.slice(0, idx);
}, 70);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const bg = document.getElementById("bg");
if (bg) {
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = 2 + Math.random() * 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${4 + Math.random() * 5}s`;
    particle.style.animationDelay = `${Math.random() * 4}s`;
    bg.appendChild(particle);
  }
}

const glow = document.getElementById("cursorGlow");
window.addEventListener("mousemove", (e) => {
  if (!glow) return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (scrollProgress) scrollProgress.style.width = `${progress}%`;
});

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
}