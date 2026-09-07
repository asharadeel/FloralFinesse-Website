document.addEventListener('DOMContentLoaded', function() {
    // Get all clickable images
    const images = document.querySelectorAll('.clickable-image');
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const closeBtn = document.getElementById('closeBtn');

    if (!overlay || !fullscreenImage) return;

    function closeOverlay() {
        overlay.classList.remove('open');
        document.body.classList.remove('noScroll');
    }

    // Add click event to each image
    images.forEach(img => {
        img.addEventListener('click', function() {
            fullscreenImage.src = this.src;
            fullscreenImage.alt = this.alt;
            overlay.classList.add('open');
            document.body.classList.add('noScroll');
        });
    });

    // Close the overlay
    if (closeBtn) closeBtn.addEventListener('click', closeOverlay);

    // Also close when clicking outside the image
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeOverlay();
        }
    });
});
