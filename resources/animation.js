// scroll animation
document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const fadeOutSections = document.querySelectorAll('.fade-out-section');

    // observer for fading in and out
    const fadeInOutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // apply fade-in animation for entering the viewport
                entry.target.classList.add('is-visible');
                entry.target.classList.remove('is-hidden'); // remove 'is-hidden' if the element is in view
            } else {
                // determine if the element is leaving from the top or bottom
                const isLeavingTop = entry.boundingClientRect.top < 0;  // element is leaving from the top
                const isLeavingBottom = entry.boundingClientRect.bottom > window.innerHeight; // leaving from the bottom

                if (isLeavingTop) {
                    // if leaving from the top, apply "move up" behavior
                    entry.target.classList.remove('fade-out-from-bottom'); 
                    entry.target.classList.add('fade-out-from-top');
                } else if (isLeavingBottom) {
                    // if leaving from the bottom, apply "move down" behavior
                    entry.target.classList.remove('fade-out-from-top'); 
                    entry.target.classList.add('fade-out-from-bottom');
                }

                // apply fade-out and hide
                entry.target.classList.add('is-hidden');
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.4 });

    // Observe both fade-in and fade-out sections
    fadeInSections.forEach(section => {
        fadeInOutObserver.observe(section);
    });

    fadeOutSections.forEach(section => {
        fadeInOutObserver.observe(section);
    });
});

// initialise AOS
AOS.init({
    duration: 1500,
    offset: 500,
    once: true
});

// function to remove data-aos on smaller screens
function updateAOS() {
    const elements = document.querySelectorAll('[data-aos="flip-down"]');
    if (window.innerWidth <= 950) { // Change this width to match your media query
        elements.forEach(element => element.removeAttribute('data-aos'));
    } else {
        elements.forEach(element => element.setAttribute('data-aos', 'flip-down'));
    }
}

// run on page load
updateAOS();

// run on resize
window.addEventListener('resize', updateAOS);

// ensure start at top of page
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
