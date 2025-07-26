// Attorney-themed CV Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navigation').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        const scrollPosition = window.scrollY + 200;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`a[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }

    // Scroll event listener for active navigation
    window.addEventListener('scroll', updateActiveNav);

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections and cards for animation
    const animatedElements = document.querySelectorAll('.section, .experience-item, .education-item, .certification-item, .award-item, .skill-category');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
            this.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = 'none';
        });
    });

    // Award items hover effect
    const awardItems = document.querySelectorAll('.award-item');
    awardItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.award-icon');
            icon.style.transform = 'rotate(10deg) scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.award-icon');
            icon.style.transform = 'rotate(0deg) scale(1)';
        });
    });

    // Experience items hover effect
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftColor = '#B8941F';
            this.style.borderLeftWidth = '6px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftColor = '#D4AF37';
            this.style.borderLeftWidth = '4px';
        });
    });

    // Typewriter effect for the main title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Apply typewriter effect to the name
    const nameElement = document.querySelector('.name');
    const originalName = nameElement.textContent;
    
    // Delay the typewriter effect slightly
    setTimeout(() => {
        typeWriter(nameElement, originalName, 80);
    }, 500);

    // Parallax scrolling effect for header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const header = document.querySelector('.header');
        
        if (header) {
            header.style.transform = `translateY(${rate}px)`;
        }
    });

    // Professional stats counter animation
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        updateCounter();
    }

    // Add professional stats section (could be added to HTML later)
    function createStatsSection() {
        const statsData = [
            { label: 'Years Experience', value: 5 },
            { label: 'Major Cases', value: 150 },
            { label: 'Certifications', value: 1 },
            { label: 'Awards', value: 4 }
        ];
        
        // This would create a stats section if needed
        // Implementation can be added based on requirements
    }

    // Contact information reveal animation
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 1000 + (index * 200));
    });

    // Credentials animation
    const credentials = document.querySelectorAll('.credential');
    credentials.forEach((credential, index) => {
        credential.style.opacity = '0';
        credential.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            credential.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            credential.style.opacity = '1';
            credential.style.transform = 'scale(1)';
        }, 1500 + (index * 300));
    });

    // Print functionality
    function printCV() {
        window.print();
    }

    // Add print button if needed (can be uncommented)
    /*
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Print CV';
    printButton.className = 'print-btn';
    printButton.onclick = printCV;
    document.querySelector('.header .container').appendChild(printButton);
    */

    // Professional quote rotation (if quotes are added)
    const quotes = [
        "Justice delayed is justice denied.",
        "The law is not a light for you or any man to see by; the law is not an instrument of any kind... The law is a causeway upon which so long as he keeps to it a citizen may walk safely.",
        "The good lawyer is not the man who has an eye to every side and angle of contingency... but who throws himself on your part so heartily, that he can get you out of a scrape."
    ];

    function rotateQuotes() {
        // Implementation for quote rotation if a quotes section is added
    }

    // Easter egg: Konami code for special animation
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            // Special animation for konami code
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 3000);
        }
    });

    // Add rainbow animation CSS if konami code is triggered
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Mobile menu toggle (if mobile menu is added)
    function toggleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('mobile-active');
    }

    // Lazy loading for any future images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Accessibility improvements
    function addAccessibilityFeatures() {
        // Add ARIA labels to interactive elements
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            link.setAttribute('aria-label', `Navigate to ${targetId} section`);
        });

        // Add keyboard navigation support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    addAccessibilityFeatures();

    // Initialize active navigation on page load
    updateActiveNav();
});

// Add CSS for keyboard navigation focus
const accessibilityStyle = document.createElement('style');
accessibilityStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #D4AF37 !important;
        outline-offset: 2px !important;
    }
    
    .nav-link.active {
        background: #D4AF37;
        color: #1e2a4a;
    }
`;
document.head.appendChild(accessibilityStyle);