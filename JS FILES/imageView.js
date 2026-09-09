document.addEventListener('DOMContentLoaded', function() {
    // Get all clickable images
    const images = Array.from(document.querySelectorAll('.clickable-image'));
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const closeBtn = document.getElementById('closeBtn');
    const prevBtn = document.getElementById('viewerPrev');
    const nextBtn = document.getElementById('viewerNext');
    const count = document.getElementById('viewerCount');

    if (!overlay || !fullscreenImage || !images.length) return;

    let pos = 0;

    function show(i) {
        // wrap around at both ends
        pos = (i + images.length) % images.length;
        fullscreenImage.src = images[pos].src;
        fullscreenImage.alt = images[pos].alt;
        if (count) count.textContent = (pos + 1) + ' / ' + images.length;
    }

    function openOverlay(i) {
        show(i);
        overlay.classList.add('open');
        document.body.classList.add('noScroll');
    }

    function closeOverlay() {
        overlay.classList.remove('open');
        document.body.classList.remove('noScroll');
    }

    // Add click event to each image
    images.forEach((img, i) => {
        img.addEventListener('click', function() {
            openOverlay(i);
        });
    });

    // Close the overlay
    if (closeBtn) closeBtn.addEventListener('click', closeOverlay);

    if (prevBtn) prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        show(pos - 1);
    });

    if (nextBtn) nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        show(pos + 1);
    });

    // Also close when clicking outside the image
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    // Keys - escape closes, arrows step through
    document.addEventListener('keydown', function(e) {
        if (!overlay.classList.contains('open')) return;

        if (e.key === 'Escape') closeOverlay();
        if (e.key === 'ArrowLeft') show(pos - 1);
        if (e.key === 'ArrowRight') show(pos + 1);
    });


    // SWIPE - the main way phone users will move through the gallery
    let startX = 0;

    overlay.addEventListener('touchstart', function(e) {
        startX = e.changedTouches[0].clientX;
    }, { passive: true });

    overlay.addEventListener('touchend', function(e) {
        const moved = e.changedTouches[0].clientX - startX;

        if (Math.abs(moved) > 50) {
            show(moved < 0 ? pos + 1 : pos - 1);
        }
    }, { passive: true });
});
