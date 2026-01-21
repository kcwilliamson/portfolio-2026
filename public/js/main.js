document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.page-transition-overlay');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const navLinks = document.querySelectorAll('.nav-link');
    const resumeItems = document.querySelectorAll('.resume-item');
    let currentAccentColor = '#FF6B6B';

    // Portfolio item hover effects
    portfolioItems.forEach(item => {
        const box = item.querySelector('.portfolio-box');
        const color = box.style.getPropertyValue('--portfolio-color');

        item.addEventListener('mouseenter', function() {
            document.body.style.setProperty('--accent-color', color);
            currentAccentColor = color;
        });

        item.addEventListener('mouseleave', function() {
            document.body.style.setProperty('--accent-color', '#000000');
        });

        item.addEventListener('click', function() {
            const page = item.dataset.page;
            navigateToPage(page, color);
        });
    });

    // Resume item hover effects
    resumeItems.forEach(item => {
        const color = item.dataset.color;
        
        item.addEventListener('mouseenter', function() {
            if (color) {
                item.style.setProperty('--hover-color', color);
            }
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Page transition function
    function navigateToPage(page, color) {
        overlay.style.setProperty('--accent-color', color);
        overlay.classList.add('active');

        setTimeout(() => {
            window.location.href = page;
        }, 600);
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
        }
    });
});