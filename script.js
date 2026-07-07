// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===============================
// TYPING ANIMATION
// ===============================

const text = [
    "Computer Science Student",
    "Web Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer"
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if (charIndex < text[textIndex].length) {

        typing.textContent += text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 120);

    } else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    if (charIndex > 0) {

        typing.textContent = text[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 60);

    } else {

        textIndex++;

        if (textIndex >= text.length) {

            textIndex = 0;

        }

        setTimeout(type, 300);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    if (text.length) {

        setTimeout(type, 500);

    }

});


// ===============================
// STICKY NAVBAR ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#161b22";

        header.style.boxShadow = "0 0 15px rgba(0,217,255,.25)";

    } else {

        header.style.background = "rgba(13,17,23,.8)";

        header.style.boxShadow = "none";

    }

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// FADE-IN ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// SCROLL TO TOP
// ===============================

window.addEventListener("beforeunload", () => {

    window.scrollTo(0, 0);

});
