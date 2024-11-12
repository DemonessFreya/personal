// scroll animation
/*document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    // Observer for fading in
    const fadeInObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');  // Apply fade-in
                //entry.target.classList.remove('is-hidden'); // Remove fade-out
            } else {
                entry.target.classList.remove('is-visible');   // Apply fade-out
            }
        });
    }, { threshold: 0.4 }); // Trigger when 10% is visible

    // Observer for fading out
    const fadeOutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.add('is-hidden');   // Apply fade-out
                //entry.target.classList.remove('is-visible'); // Remove fade-in
            } else {
                entry.target.classList.remove('is-hidden');   // Apply fade-out
            }
        });
    }, { threshold: 0.4 }); // Trigger when 10% is not visible

    // Apply both observers to each fade-in section
    fadeInSections.forEach(section => {
        fadeInObserver.observe(section);
        fadeOutObserver.observe(section);
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
