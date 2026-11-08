/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.nav-links');

if (menuToggle && navbar) {

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');

        const icon = menuToggle.querySelector('i');

        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });

}


/* =========================================
   CLOSE MENU AFTER CLICK
========================================= */

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        if (navbar) {
            navbar.classList.remove('active');
        }

        const icon = menuToggle?.querySelector('i');

        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        }

    });

});


/* =========================================
   CLOSE MENU ON OUTSIDE CLICK
========================================= */

document.addEventListener('click', event => {

    if (
        navbar &&
        menuToggle &&
        !navbar.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        navbar.classList.remove('active');

        const icon = menuToggle.querySelector('i');

        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        }

    }

});


/* =========================================
   STICKY HEADER
========================================= */

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

});


/* =========================================
   TYPING ANIMATION
========================================= */

const typedElement = document.querySelector('.multiple-text');

if (typedElement && typeof Typed !== 'undefined') {

    new Typed('.multiple-text', {

        strings: [
            'AI Engineer',
            'Generative AI Developer',
            'RAG & LLM Developer',
            'Machine Learning Enthusiast',
            'Python Developer',
            'Full Stack Developer'
        ],

        typeSpeed: 70,
        backSpeed: 45,
        backDelay: 1200,
        loop: true

    });

}


/* =========================================
   ACTIVE NAVBAR LINK
========================================= */

const sections = document.querySelectorAll('section');

const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection = section.getAttribute('id');

        }

    });


    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') === `#${currentSection}`
        ) {

            link.classList.add('active');

        }

    });

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    '.hero-content, .hero-image, .about-content, .skill-card, .project-card, .research-card, .education-card, .certification-card, .contact-card'
);

if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('show');

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {

        element.classList.add('reveal');

        observer.observe(element);

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.querySelector('#current-year');

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(event) {

        const targetId = this.getAttribute('href');

        if (!targetId || targetId === '#') {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({

                behavior: 'smooth',

                block: 'start'

            });

        }

    });

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log('Sheikh Abubakar Portfolio Loaded Successfully!');