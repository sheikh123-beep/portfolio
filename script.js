// ===============================
// PORTFOLIO SCRIPT - SHEIKH ABUBAKAR
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // MOBILE MENU
    // ===============================

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                if (navLinks.classList.contains("active")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });

        // Close menu after clicking a link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }


    // ===============================
    // NAVBAR SCROLL EFFECT
    // ===============================

    const header = document.getElementById("header");

    function handleScroll() {

        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();


    // ===============================
    // TYPING EFFECT
    // ===============================

    const typingElement = document.getElementById("typing");

    const roles = [
        "Data Analyst",
        "Generative AI Developer",
        "Software Engineer",
        "RAG Developer",
        "AI Application Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        if (!typingElement) return;

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent =
                currentRole.substring(0, charIndex - 1);

            charIndex--;
        } else {
            typingElement.textContent =
                currentRole.substring(0, charIndex + 1);

            charIndex++;
        }

        let speed = isDeleting ? 50 : 100;

        // Finished typing
        if (!isDeleting && charIndex === currentRole.length) {
            speed = 1500;
            isDeleting = true;
        }

        // Finished deleting
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    if (typingElement) {
        typeEffect();
    }


    // ===============================
    // ACTIVE NAVIGATION
    // ===============================

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    // ===============================
    // SMOOTH SCROLL
    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ===============================
    // REVEAL ANIMATION
    // ===============================

    const revealElements = document.querySelectorAll(
        ".skill, .card, .education-card, .contact-item, .about-container"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });


    // ===============================
    // CONSOLE MESSAGE
    // ===============================

    console.log(
        "👋 Welcome to Sheikh Abubakar's Portfolio!"
    );

});