// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        // Start other animations after preloader is gone
        setTimeout(() => {
            animateElements('.section-title', 'fade-right');
            animateElements('.hero-content', 'fade-up');
            animateElements('.hero-image', 'fade-left');
            animateElements('.about-content', 'fade-up');
            animateElements('.skill-category', 'fade-up', true);
            animateElements('.timeline-item', 'fade-left', true);
            animateElements('.project-card', 'fade-up', true);
            animateElements('.education-card', 'fade-up', true);
            animateElements('.contact-content', 'fade-up');
        }, 500);
    }, 2000);
});

// Matrix Rain Animation
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(10, 25, 47, 0.05)'; // Trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0'; // Green text
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Randomly color some characters for the "glitch" effect
        if (Math.random() > 0.98) {
            ctx.fillStyle = '#64ffda'; // Bright cyan accent
        } else {
            ctx.fillStyle = '#0f380f'; // Darker green for depth
        }
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Helper to add animation classes
const animateElements = (selector, animationClass, stagger = false) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        el.classList.add('hidden', animationClass);
        if (stagger) {
            el.classList.add(`delay-${(index % 5 + 1) * 100}`); // Stagger up to 5 items then repeat
        }
        observer.observe(el);
    });
};

// Apply animations - Moved to window.load inside preloader logic
// animateElements('.section-title', 'fade-right');
// animateElements('.hero-content', 'fade-up');
// animateElements('.hero-image', 'fade-left');
// animateElements('.about-content', 'fade-up');
// animateElements('.skill-category', 'fade-up', true);
// animateElements('.timeline-item', 'fade-left', true);
// animateElements('.project-card', 'fade-up', true);
// animateElements('.education-card', 'fade-up', true);
// animateElements('.contact-content', 'fade-up');

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Typing Animation
const typeWriterElement = document.getElementById('typewriter');
const phrases = ['Software Developer', 'Full Stack Engineer', 'Problem Solver', 'Tech Enthusiast'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typeWriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typeWriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before typing next
    }

    setTimeout(type, typeSpeed);
}

// Start typing when page loads
document.addEventListener('DOMContentLoaded', type);

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    
    // Add a slight delay to the follower for a smooth effect
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 50);
});

// Cursor hover effect
document.querySelectorAll('a, button, .terminal-window').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('cursor-hover');
    });
});

// 3D Tilt Effect for Project Cards - DISABLED
// const cards = document.querySelectorAll('.project-card');

// cards.forEach(card => {
//     card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
        
//         const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
//         const rotateY = ((x - centerX) / centerX) * 10;

//         card.querySelector('.project-content').style.transform = 
//             `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
//     });

//     card.addEventListener('mouseleave', () => {
//         card.querySelector('.project-content').style.transform = 
//             'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
//     });
// });
