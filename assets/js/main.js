// main.js

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

// EmailJS Form Submission
function sendEmail(event) {
  event.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_PUBLIC_KEY')
    .then(() => {
      alert('Appointment request sent successfully! ✅');
      document.getElementById('appointment-form').reset();
    }, (error) => {
      console.error('FAILED...', error);
      alert('Something went wrong. Please try again. ❌');
    });
}

document.getElementById('appointment-form')?.addEventListener('submit', sendEmail);
