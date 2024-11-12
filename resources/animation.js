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
    duration: 1000,
    offset: 500,
    once: true
});
