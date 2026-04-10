/**
 * Boardwalk Capital - Website Scripts
 * Vanilla JavaScript for interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle (Simple implementation)
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // This is a placeholder for a more complex mobile menu
            // For now, we'll just log or could toggle a class
            alert('Mobile menu functionality would go here. For this static version, please use desktop view or standard links.');
        });
    }

    // 2. Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('nav a, footer a, .hero-btns a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. Form Submission Handling (Prevent default for static demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            
            // Show success message
            const formContainer = contactForm.parentElement;
            formContainer.innerHTML = `
                <div style="padding: 40px; background: #f0f0f0; border-radius: 4px; text-align: center;">
                    <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; margin-bottom: 10px;">Thank you, ${name}.</h3>
                    <p style="color: #555;">Your inquiry has been received. A member of our team will be in touch shortly.</p>
                </div>
            `;
        });
    }

    // 4. Scroll Reveal Effect (Subtle)
    const revealElements = document.querySelectorAll('section, .strategy-card, .why-item');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles for reveal
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    // Run once on load
    revealOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', revealOnScroll);
});
