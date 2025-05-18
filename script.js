// Typing effect
const typedText = document.getElementById("typed-text");
const phrases = ["I'm Future Fullstack Developer", "Information Technology Student"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typedText.textContent = currentPhrase.substring(0, charIndex--);
    } else {
        typedText.textContent = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const delay = isDeleting ? 50 : 100;
    setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Change navbar on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 10);
});

// Animate nav links on page load
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-links li").forEach((li) => {
        li.style.animationPlayState = "running";
    });
});

// Scroll animation for About section and other text
function handleScrollAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleScrollAnimation, {
    threshold: 0.2
});

document.querySelectorAll(
    '.about-me-text, .about-pfp, .about-description, .skills-text, .tech-stack-text, .tech-stack, .tech-stack-fullwidth, .project-container h4'
).forEach(el => {
    observer.observe(el);
});

// Scroll animation for Tech Stack containers (fade in one by one)
const techStackObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 100); // Delay each item
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.tech-stack-container, #contact').forEach(el => {
    techStackObserver.observe(el);
});

// Scroll animation for Project Cards (staggered fade-in)
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 200); // Staggered animation
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

projectCards.forEach(card => {
    projectObserver.observe(card);
});
// Footer animation on scroll
const footerLeft = document.querySelector('.footer-left');
const footerRight = document.querySelector('.footer-right');

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('footer-left')) {
                entry.target.classList.add('animate-left');
            } else if (entry.target.classList.contains('footer-right')) {
                entry.target.classList.add('animate-right');
            }
        }
    });
}, {
    threshold: 0.2
});

footerObserver.observe(footerLeft);
footerObserver.observe(footerRight);

const sections = document.querySelectorAll('section, main, article');
const navLinks = document.querySelectorAll('header nav ul li a');

    window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
    }
    });

    navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
    }
    });
});
//reload page
window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Function to show or hide the button based on scroll position
function toggleButtonVisibility() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"; // Show the button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the button
    }
}

// When the user scrolls, check the scroll position
window.onscroll = toggleButtonVisibility;

// Run the visibility function on page load to set the initial state
window.onload = toggleButtonVisibility;

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Animate icon
    navMenu.classList.toggle('active');   // Show/hide menu
});