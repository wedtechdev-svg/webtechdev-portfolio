/*// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');

//Load saved theme
const savedTheme = localStorage.getItem('theme');
//if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
} else {
  toggleBtn.textContent = '🌙';
}

// Toggle theme on click
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
});

// Hero Background Transition
const hero = document.querySelector('.hero');
const images = [
  'https://media.istockphoto.com/id/1445483931/photo/gas-hob-burner.webp?a=1&b=1&s=612x612&w=0&k=20&c=pNZem7kXh_MGeP5iJsT0tRJukcDr_Ita-H14dNom3ik=',
  'https://media.istockphoto.com/id/1325047322/photo/liquefied-gas-storage-workers-carrying-gas-cylinder-on-staircase.webp?a=1&b=1&s=612x612&w=0&k=20&c=-dU7aXM83EPSL20CXvu5LiEWTV9hFrprc7Y3KkwNu5k=',
  'https://images.unsplash.com/photo-1625753121973-60a989f07bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvb2tlcnxlbnwwfHwwfHx8MA%3D%3D',
  'https://media.istockphoto.com/id/1174482098/photo/colleagues-working-in-liquified-gas-store.jpg?s=612x612&w=0&k=20&c=M8DAIDqFa0LcchwVragAdVPxplzevMrRHEQ87Ijtj-E=',
];

let current = 0;
hero.style.backgroundImage = `url(${images[current]})`;

setInterval(() => {
  current = (current + 1) % images.length;
  hero.style.backgroundImage = `url(${images[current]})`;
}, 5000);
// Fade-in animation for products arrow
const productsArrow = document.querySelector('.products-arrow');
window.addEventListener('scroll', () => {
  const rect = productsArrow.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (rect.top < windowHeight - 100) {
    productsArrow.classList.add('visible');
  }
});*/



  const themeToggle = document.getElementById('toggle-switch');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  // Load saved or preferred theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', () => {
    const isDark = themeToggle.checked;
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });



// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuToggle.innerHTML = navLinks.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});


// Hero Background Transition
const hero = document.querySelector('.hero');
const images = [
  'https://media.istockphoto.com/id/1445483931/photo/gas-hob-burner.webp?a=1&b=1&s=612x612&w=0&k=20&c=pNZem7kXh_MGeP5iJsT0tRJukcDr_Ita-H14dNom3ik=',
  'https://media.istockphoto.com/id/1325047322/photo/liquefied-gas-storage-workers-carrying-gas-cylinder-on-staircase.webp?a=1&b=1&s=612x612&w=0&k=20&c=-dU7aXM83EPSL20CXvu5LiEWTV9hFrprc7Y3KkwNu5k=',
  'https://images.unsplash.com/photo-1625753121973-60a989f07bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvb2tlcnxlbnwwfHwwfHx8MA%3D%3D',
  'https://media.istockphoto.com/id/1174482098/photo/colleagues-working-in-liquified-gas-store.jpg?s=612x612&w=0&k=20&c=M8DAIDqFa0LcchwVragAdVPxplzevMrRHEQ87Ijtj-E=',
];

let current = 0;
hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${images[current]})`;

setInterval(() => {
  current = (current + 1) % images.length;
  hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${images[current]})`;
}, 5000);

// Counter Animation for Stats
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element, target) => {
  let count = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(count);
  }, 20);
};

// Intersection Observer for counter animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-count'));
      animateCounter(entry.target, target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
  observer.observe(stat);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.padding = '10px 5%';
    nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.padding = '15px 5%';
    nav.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
  }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simple form validation
  const inputs = contactForm.querySelectorAll('input, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = '#ddd';
    }
  });
  
  if (isValid) {
    // In a real application, you would send the form data to a server here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  } else {
    alert('Please fill in all required fields.');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
