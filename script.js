document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    menuToggle.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');
        menuToggle.classList.toggle('toggle');

        // Animate Links
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close mobile menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            menuToggle.classList.remove('toggle');
            navLinksItems.forEach(link => link.style.animation = '');
        });
    });

    // Sticky Navbar Interaction
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth Scroll for all internal links (Partial support fallback)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add CSS Animation for Nav Links via JS to keep CSS clean(ish)
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes navLinkFade {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // EmailJS Implementation
    (function () {
        // Initialize EmailJS with your Public Key
        // REPLACE 'YOUR_PUBLIC_KEY' with your actual key from EmailJS dashboard
        emailjs.init("SraZ69vHyq2x1DaYJ");
    })();

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // These IDs must be replaced with your actual Service and Template IDs
            const serviceID = 'service_8jcs2xo';
            const templateID = 'template_u47vbjh';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, (err) => {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                    alert('Failed to send message. Please check console for details.');
                    console.error('EmailJS Error:', err);
                });
        });
    }
});
