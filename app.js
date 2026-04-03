// ─── Language Management ────────────────────────────────────────────────────
let currentLang = localStorage.getItem("lang") || "en";

const langMeta = {
  en: { flag: "🇺🇸", code: "EN" },
  pt: { flag: "🇧🇷", code: "PT" },
  fr: { flag: "🇫🇷", code: "FR" },
  es: { flag: "🇪🇸", code: "ES" },
  ht: { flag: "🇭🇹", code: "HT" },
};

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update placeholder attributes
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update language switcher display
  const meta = langMeta[lang];
  document.getElementById("currentFlag").textContent = meta.flag;
  document.getElementById("currentCode").textContent = meta.code;

  // Mark active option
  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

// ─── Language Dropdown ───────────────────────────────────────────────────────
const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = langDropdown.classList.toggle("open");
  langBtn.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", () => {
  langDropdown.classList.remove("open");
  langBtn.setAttribute("aria-expanded", false);
});

langDropdown.addEventListener("click", (e) => e.stopPropagation());

document.querySelectorAll(".lang-option").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
    langDropdown.classList.remove("open");
    langBtn.setAttribute("aria-expanded", false);
    // Close mobile menu
    document.getElementById("mobileMenu").classList.remove("open");
    document.getElementById("hamburger").classList.remove("active");
  });
});

// ─── Hamburger Menu ──────────────────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("open");
  });
});

// ─── Navbar Scroll ────────────────────────────────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ─── Hero Typewriter ─────────────────────────────────────────────────────────
const phrases = [
  "intelligent systems.",
  "LLM pipelines.",
  "RAG architectures.",
  "AI-powered apps.",
  "the future.",
];
let phraseIdx = 0;
let charIdx = 0;
let deleting = false;
const typedEl = document.getElementById("heroTyped");

function typeLoop() {
  const phrase = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = phrase.slice(0, ++charIdx);
    if (charIdx === phrase.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typedEl.textContent = phrase.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 80);
}
typeLoop();

// ─── Intersection Observer (Animations) ──────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(
    ".project-card, .timeline-item, .cert-card, .skill-category, .edu-card, .contact-card"
  )
  .forEach((el) => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });

// ─── Contact Form ─────────────────────────────────────────────────────────────
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector("button[type=submit]");
  const name = contactForm.querySelector("#formName").value.trim();
  const email = contactForm.querySelector("#formEmail").value.trim();
  const message = contactForm.querySelector("#formMessage").value.trim();

  // Basic validation
  if (!name || !email || !message) return;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

  // Build mailto link
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:delsonysuperdel@gmail.com?subject=${subject}&body=${body}`;

  btn.textContent = "✓ Message Sent!";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = translations[currentLang].form_send || "Send Message";
    btn.disabled = false;
    contactForm.reset();
  }, 3000);
});

// ─── Smooth Scroll ────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

// ─── Active Nav Link ──────────────────────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - navbar.offsetHeight - 80) {
      current = sec.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});

// ─── Initialize Language ─────────────────────────────────────────────────────
setLanguage(currentLang);
