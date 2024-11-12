// scroll animation
document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Fade in
            } else {
                entry.target.classList.remove('is-visible'); // Fade out
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    fadeInSections.forEach(section => {
        observer.observe(section);
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
