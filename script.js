document.addEventListener("DOMContentLoaded", () => {
    
    // Register the GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // ======== 1. REFINED HORIZONTAL SCROLL ========
    const scrollContainer = document.querySelector(".scroll-section-container");
    const scrollTrack = document.querySelector(".scroll-section-track");

    // This makes the animation responsive
    gsap.to(scrollTrack, {
        // We calculate the total distance to move (track width - viewport width)
        // Using a function ensures it recalculates on resize
        x: () => -(scrollTrack.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: () => "+=" + (scrollTrack.scrollWidth - window.innerWidth),
            scrub: 1, // Smoothly scrubs
            pin: true,
            invalidateOnRefresh: true // Forces recalculation on refresh/resize
        }
    });


    // ======== 2. FOOTER FADE-IN ANIMATIONS ========
    const fadeElements = document.querySelectorAll('.footer-section .fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

});