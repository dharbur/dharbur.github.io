document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        let intersectingEntries = entries.filter(e => e.isIntersecting);
        
        intersectingEntries.forEach((entry, index) => {
            // Apply a staggered delay so items animate one after the other
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150); 
            
            observer.unobserve(entry.target); 
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-scroll').forEach(element => {
        observer.observe(element);
    });
});
