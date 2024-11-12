document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it’s visible
            }
        });
    });

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
});


AOS.init({
    duration: 3000,
    offset: 500,
    once: true
});

// Function to remove data-aos on smaller screens
function updateAOS() {
    const elements = document.querySelectorAll('[data-aos="flip-down"]');
    if (window.innerWidth <= 950) { // Change this width to match your media query
        elements.forEach(element => element.removeAttribute('data-aos'));
    } else {
        elements.forEach(element => element.setAttribute('data-aos', 'flip-down'));
    }
}

// Run on page load
updateAOS();

// Run on resize
window.addEventListener('resize', updateAOS);
