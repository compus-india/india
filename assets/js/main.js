// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    
    // Remove from DOM after animation completes
    setTimeout(() => {
        preloader.remove();
    }, 500);
});

document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.classList.add('loaded');
});


// Initialize AOS animation library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
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

// Mobile dropdown toggle
document.querySelectorAll('.dropdown-submenu > a').forEach(function(element) {
  element.addEventListener('click', function(e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  });
});
// EmailJS Initialization and Form Handling
(function() {
    // Initialize EmailJS with your User ID
    emailjs.init('6CPHqFDm-JiJAv4DJ');
    
    const appointmentForm = document.getElementById('appointment-form');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Send form data
            emailjs.sendForm(
                'service_rrhyyif', // Your Service ID
                'template_mhm8y7f', // Your Template ID
                this
            )
            .then(() => {
                // Success message
                const successMsg = document.createElement('div');
                successMsg.className = 'form-success';
                successMsg.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <p>Appointment booked successfully! We will contact you shortly.</p>
                `;
                appointmentForm.parentNode.insertBefore(successMsg, appointmentForm.nextSibling);
                
                // Reset form
                appointmentForm.reset();
                
                // Remove message after 5 seconds
                setTimeout(() => {
                    successMsg.remove();
                }, 5000);
            })
            .catch((error) => {
                console.error('Error:', error);
                const errorMsg = document.createElement('div');
                errorMsg.className = 'form-error';
                errorMsg.innerHTML = `
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Failed to send request. Please try again or contact us directly.</p>
                `;
                appointmentForm.parentNode.insertBefore(errorMsg, appointmentForm.nextSibling);
                
                setTimeout(() => {
                    errorMsg.remove();
                }, 5000);
            })
            .finally(() => {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
        });
    }
})();
