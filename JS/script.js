/* =====================================================
   Spain Cost Light Website
   script.js
   Version 1.0
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------------------
       Current Year
    ------------------------------------------- */

    document.querySelectorAll(".current-year").forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    /* ------------------------------------------
       Smooth scroll for navigation links
    ------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    /* ------------------------------------------
       Screenshot lightbox
    ------------------------------------------- */

    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {

        img.addEventListener("click", () => {

            const overlay = document.createElement("div");

            overlay.className = "lightbox-overlay";

            overlay.innerHTML = `
                <div class="lightbox">
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;

            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => {
                overlay.remove();
            });

        });

    });


/* ==========================================================
   Fade-in Animation
========================================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("fade-in");

    observer.observe(section);

});

