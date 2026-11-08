/* =========================================
   MOBILE MENU
========================================= */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {

    menuIcon.addEventListener('click', () => {

        menuIcon.classList.toggle('bx-x');

        navbar.classList.toggle('active');

    });

}


/* =========================================
   CLOSE MENU AFTER CLICK
========================================= */

document.querySelectorAll('.navbar a').forEach(link => {

    link.addEventListener('click', () => {

        navbar.classList.remove('active');

        menuIcon.classList.remove('bx-x');

    });

});


/* =========================================
   STICKY HEADER
========================================= */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (header) {

        header.classList.toggle(
            'sticky',
            window.scrollY > 100
        );

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

const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionBottom =
            sectionTop + section.offsetHeight;

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
    '.home-content, .home-image, .about-container, .skill, .card, .research-card, .education-card, .certification-card, .contact-item'
);

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


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.querySelector('#current-year');

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   CLOSE MENU ON OUTSIDE CLICK
========================================= */

document.addEventListener('click', event => {

    if (
        navbar &&
        menuIcon &&
        !navbar.contains(event.target) &&
        !menuIcon.contains(event.target)
    ) {

        navbar.classList.remove('active');

        menuIcon.classList.remove('bx-x');

    }

});


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