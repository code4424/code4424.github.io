// ============================================
// MAXIMUS - Main JavaScript
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // Navigation Scroll Effect
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class for background
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');

            // Toggle icon
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // ============================================
    // Smooth Scroll for Navigation Links
    // ============================================
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Intersection Observer for Scroll Animations
    // ============================================

    // Options for Intersection Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    // Create observer
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const fadeUpElements = document.querySelectorAll('.fade-up');
    const fadeLeftElements = document.querySelectorAll('.fade-left');
    const fadeRightElements = document.querySelectorAll('.fade-right');
    const serviceCards = document.querySelectorAll('.service-card');

    fadeUpElements.forEach(el => observer.observe(el));
    fadeLeftElements.forEach(el => observer.observe(el));
    fadeRightElements.forEach(el => observer.observe(el));
    serviceCards.forEach(el => observer.observe(el));

    // ============================================
    // Parallax Effect for Hero Section
    // ============================================
    const heroSection = document.querySelector('.hero-section');
    const heroImage = document.querySelector('.hero-image');

    if (heroSection && heroImage) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;

            // Only apply parallax when hero is visible
            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.5;
                heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
            }
        });
    }

    // ============================================
    // Contact Form Handling
    // ============================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'SENDING...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(function () {
                // Reset form
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Show success message
                showNotification('Thank you! We will get back to you soon.', 'success');

                // Log form data (in production, this would be sent to a server)
                console.log('Form submitted:', { name, email, message });
            }, 1500);
        });
    }

    // ============================================
    // Notification System
    // ============================================
    function showNotification(message, type = 'success') {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification fixed top-24 right-6 z-50 px-6 py-4 rounded shadow-2xl transform transition-all duration-500 ${type === 'success' ? 'bg-green-600' : 'bg-red-600'
            } text-white font-medium`;
        notification.style.transform = 'translateX(400px)';
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // ============================================
    // Active Navigation Link Highlighting
    // ============================================
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-maximus-red');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-maximus-red');
            }
        });
    });

    // ============================================
    // Logo Animation on Hover
    // ============================================
    const logoLink = document.querySelector('.logo-link');

    if (logoLink) {
        logoLink.addEventListener('mouseenter', function () {
            const logo = this.querySelector('img');
            logo.style.transform = 'scale(1.05) rotate(2deg)';
        });

        logoLink.addEventListener('mouseleave', function () {
            const logo = this.querySelector('img');
            logo.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // ============================================
    // Service Card Click Handler
    // ============================================
    const serviceCardsClickable = document.querySelectorAll('.service-card');

    serviceCardsClickable.forEach((card, index) => {
        card.addEventListener('click', function () {
            const serviceName = this.querySelector('h3').textContent;
            console.log(`Service clicked: ${serviceName}`);

            // Add ripple effect
            createRipple(this, event);

            // In production, this could navigate to a service detail page
            // or open a modal with more information
        });
    });

    // ============================================
    // Ripple Effect Function
    // ============================================
    function createRipple(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple';

        // Add ripple styles
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add ripple animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);


    // ============================================
    // Preload Images for Better Performance
    // ============================================
    const imagesToPreload = [
        'assets/Hero-section.png',
        'assets/Service1.png',
        'assets/Service2.png',
        'assets/Service3.png',
        'assets/Service4.png',
        'assets/Service5.png',
        'assets/Service6.png'
    ];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // ============================================
    // Performance Monitoring (Optional)
    // ============================================
    if ('performance' in window) {
        window.addEventListener('load', function () {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
        });
    }

    // ============================================
    // Console Welcome Message
    // ============================================
    console.log('%c MAXIMUS INTEGRATED ', 'background: #C41E3A; color: white; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Fighting Against All Odds For A Desired Outcome ', 'color: #C41E3A; font-size: 14px; font-weight: bold;');

    // ============================================
    // Strategic Questions Popup
    // ============================================
    const strategicPopup = document.getElementById('strategicPopup');
    const skipPopupBtn = document.getElementById('skipPopup');
    const closePopupBtn = document.getElementById('closePopup');

    // Check if popup has been shown before (using localStorage)
    const hasSeenPopup = localStorage.getItem('hasSeenStrategicPopup');

    if (strategicPopup && !hasSeenPopup) {
        // Show popup after 1 second delay
        setTimeout(() => {
            strategicPopup.style.display = 'flex';
            strategicPopup.style.animation = 'fadeIn 0.5s ease-in-out';
        }, 1000);

        // Skip button functionality
        if (skipPopupBtn) {
            skipPopupBtn.addEventListener('click', function () {
                closeStrategicPopup();
            });
        }

        // Close button functionality (Let's Discuss)
        if (closePopupBtn) {
            closePopupBtn.addEventListener('click', function () {
                closeStrategicPopup();
                // Scroll to contact section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    setTimeout(() => {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                }
            });
        }

        // Close on background click
        strategicPopup.addEventListener('click', function (e) {
            if (e.target === strategicPopup) {
                closeStrategicPopup();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && strategicPopup.style.display === 'flex') {
                closeStrategicPopup();
            }
        });
    }

    function closeStrategicPopup() {
        if (strategicPopup) {
            strategicPopup.style.animation = 'fadeOut 0.3s ease-in-out';
            setTimeout(() => {
                strategicPopup.style.display = 'none';
                // Mark as seen
                localStorage.setItem('hasSeenStrategicPopup', 'true');
            }, 300);
        }
    }

});

// ============================================
// Window Load Event
// ============================================
window.addEventListener('load', function () {
    // Hide any loading screens if present
    document.body.classList.add('loaded');

    // Trigger any load-dependent animations
    console.log('All resources loaded');
});
