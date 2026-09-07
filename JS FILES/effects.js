
// FADE SECTIONS IN AS THEY ENTER THE SCREEN
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.reveal');

    // no support / reduced motion - just show everything
    if (!('IntersectionObserver' in window)) {
        items.forEach(item => item.classList.add('visible'));
        return;
    }

    const watcher = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                watcher.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    items.forEach(item => watcher.observe(item));


    // MENU CATEGORY BAR - mark the section you are reading
    const buttons = document.querySelectorAll('.itemTypeButton');
    const sections = document.querySelectorAll('.itemSection');

    if (buttons.length && sections.length) {
        const tracker = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    buttons.forEach(button => {
                        button.classList.toggle('active', button.hash === '#' + entry.target.id);
                    });
                }
            });
        }, { threshold: 0, rootMargin: '-30% 0px -60% 0px' });

        sections.forEach(section => tracker.observe(section));
    }
});
