// === SCROLL REVEAL ANIMATION ===
const sections = document.querySelectorAll('.section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// === THEME TOGGLE (LIGHT/DARK MODE) ===
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '🌞';
}

// Toggle mode
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  themeToggle.textContent = isDark ? '🌞' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


// === EMAILJS CONTACT FORM ===
(function() {
  emailjs.init("rMpNLXtrScOP6Udp0"); // ✅ Your Public Key
})();

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_6k4c0zv", "template_0w2e7rs", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        this.reset();
      })
      .catch((error) => {
        console.error("❌ Error:", error);
        alert("❌ Message failed to send. Try again later.");
      });
  });
}


// === MOBILE NAVBAR TOGGLE ===
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}
