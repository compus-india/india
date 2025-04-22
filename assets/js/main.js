// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
