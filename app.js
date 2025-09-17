// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const typewriter = document.getElementById('typewriter');
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('.nav-link');

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-color-scheme', theme);
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
        
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }

    setupEventListeners() {
        themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupSmoothScrolling();
        this.setupScrollSpy();
    }

    setupEventListeners() {
        // Hamburger menu toggle
        hamburger.addEventListener('click', () => this.toggleMenu());
        
        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.isMenuOpen) {
                    this.toggleMenu();
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                this.toggleMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isMenuOpen) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    closeMenu() {
        this.isMenuOpen = false;
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }

    setupSmoothScrolling() {
        // Add smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                
                // Handle empty href or just "#"
                if (!targetId || targetId === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }
                
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Calculate offset accounting for fixed navbar
                    const navbarHeight = document.querySelector('.navbar').offsetHeight || 70;
                    const offsetTop = targetSection.offsetTop - navbarHeight - 20; // Extra 20px padding
                    
                    window.scrollTo({
                        top: Math.max(0, offsetTop), // Ensure we don't scroll to negative values
                        behavior: 'smooth'
                    });
                    
                    // Update active state immediately for better UX
                    const targetIdClean = targetId.substring(1); // Remove the #
                    this.updateActiveNavLink(targetIdClean);
                }
            });
        });
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        
        if (sections.length === 0) return;
        
        const options = {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.updateActiveNavLink(id);
                }
            });
        }, options);

        sections.forEach(section => observer.observe(section));
    }

    updateActiveNavLink(activeId) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.remove('active');
            
            if (href === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }
}

// Typewriter Animation
class TypewriterAnimation {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.speed = options.speed || 150;
        this.deleteSpeed = options.deleteSpeed || 100;
        this.pauseTime = options.pauseTime || 2000;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
    }

    start() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isPaused) {
            setTimeout(() => {
                this.isPaused = false;
                this.isDeleting = true;
                this.type();
            }, this.pauseTime);
            return;
        }

        if (!this.isDeleting) {
            // Typing
            if (this.currentCharIndex < currentText.length) {
                this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
                this.currentCharIndex++;
                setTimeout(() => this.type(), this.speed);
            } else {
                // Finished typing, pause before deleting
                this.isPaused = true;
                this.type();
            }
        } else {
            // Deleting
            if (this.currentCharIndex > 0) {
                this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
                this.currentCharIndex--;
                setTimeout(() => this.type(), this.deleteSpeed);
            } else {
                // Finished deleting, move to next text
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                setTimeout(() => this.type(), 500);
            }
        }
    }
}

// Contact Form Management
class ContactFormManager {
    constructor() {
        this.init();
    }

    init() {
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        try {
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name')?.trim() || '';
            const email = formData.get('email')?.trim() || '';
            const subject = formData.get('subject')?.trim() || '';
            const message = formData.get('message')?.trim() || '';

            // Validate required fields
            if (!name || !email || !subject || !message) {
                this.showErrorMessage('Please fill in all required fields.');
                return;
            }

            // Create mailto URL with properly encoded parameters
            const emailBody = `Hello Nikhil,

Name: ${name}
Email: ${email}

Message:
${message}

Best regards,
${name}`;

            const mailtoParams = new URLSearchParams({
                subject: subject,
                body: emailBody
            });

            const mailtoLink = `mailto:nikhilgoudyeminedi@gmail.com?${mailtoParams.toString()}`;

            // Show success message first
            this.showSuccessMessage();
            
            // Small delay before opening email client for better UX
            setTimeout(() => {
                window.open(mailtoLink, '_self');
            }, 500);
            
            // Reset form after successful submission
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showErrorMessage('There was an error processing your request. Please try again.');
        }
    }

    showSuccessMessage() {
        this.showMessage('Opening email client...', 'success');
    }

    showErrorMessage(text) {
        this.showMessage(text, 'error');
    }

    showMessage(text, type = 'success') {
        // Remove any existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const message = document.createElement('div');
        message.className = `form-message form-message--${type}`;
        message.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? 'var(--color-success)' : 'var(--color-error)'};
            color: var(--color-btn-primary-text);
            padding: 16px 24px;
            border-radius: var(--radius-base);
            box-shadow: var(--shadow-lg);
            z-index: 1001;
            transform: translateX(100%);
            transition: transform var(--duration-normal) var(--ease-standard);
            max-width: 300px;
            word-wrap: break-word;
        `;
        message.textContent = text;
        
        document.body.appendChild(message);
        
        // Animate in
        requestAnimationFrame(() => {
            message.style.transform = 'translateX(0)';
        });
        
        // Remove after delay
        setTimeout(() => {
            message.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 300);
        }, type === 'success' ? 3000 : 5000);
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
    }

    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.card, .skill-category, .project-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            // Set initial state
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            
            observer.observe(element);
        });
    }
}

// Navbar Background on Scroll
class NavbarScrollEffect {
    constructor() {
        this.navbar = document.getElementById('navbar');
        if (this.navbar) {
            this.init();
        }
    }

    init() {
        // Use throttled scroll handler for better performance
        const throttledScrollHandler = this.throttle(() => this.handleScroll(), 16);
        window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            this.navbar.style.background = 'rgba(var(--color-slate-900-rgb), 0.98)';
            this.navbar.style.boxShadow = 'var(--shadow-lg)';
        } else {
            this.navbar.style.background = 'rgba(var(--color-slate-900-rgb), 0.95)';
            this.navbar.style.boxShadow = 'none';
        }
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// Initialize Application
class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        try {
            // Initialize all components
            new ThemeManager();
            new NavigationManager();
            new ContactFormManager();
            new ScrollAnimations();
            new NavbarScrollEffect();

            // Initialize typewriter animation
            if (typewriter) {
                const typewriterInstance = new TypewriterAnimation(
                    typewriter,
                    ['Hi there! 👋', 'Welcome!', 'Nice to meet you!'],
                    {
                        speed: 100,
                        deleteSpeed: 50,
                        pauseTime: 2000
                    }
                );
                typewriterInstance.start();
            }

            // Add loading complete class
            document.body.classList.add('loaded');
            
            console.log('Portfolio application initialized successfully');
        } catch (error) {
            console.error('Error initializing application:', error);
        }
    }
}

// Start the application
new App();

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = 'Come back soon! - Nikhil Yeminedi';
    } else {
        document.title = 'Nikhil Yeminedi - Software Development Engineer';
    }
});

// Performance optimization: Preload critical resources
const preloadCriticalResources = () => {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
    });
};

// Call preload function
preloadCriticalResources();