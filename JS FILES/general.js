
//NAV BAR
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            const open = navLinks.classList.toggle('active');
            hamburger.classList.toggle('active', open);
            document.body.classList.toggle('noScroll', open);
            hamburger.setAttribute('aria-expanded', open);
        });

        // close the drawer when a link is picked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('noScroll');
                hamburger.setAttribute('aria-expanded', false);
            });
        });

        // and on escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                hamburger.click();
            }
        });
    }


    // HIGHLIGHT CURRENT PAGE
    const page = window.location.pathname.split('/').pop() || 'homepage.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
});


// Create button SCROLL TO TOP
const topButton = document.createElement('a');
topButton.href = '#top';
topButton.className = 'topbutton';
topButton.setAttribute('aria-label', 'Back to top');

const arrowImg = document.createElement('img');
arrowImg.src = 'IMGFILES/UpArrowIcon.png';
arrowImg.alt = '';
topButton.appendChild(arrowImg);

document.body.appendChild(topButton);


// SCROLL PROGRESS BAR
const progress = document.createElement('div');
progress.className = 'scrollProgress';
document.body.appendChild(progress);


// one scroll handler for everything, throttled to the frame
let ticking = false;

window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;

        topButton.classList.toggle('visible', y > 400);
        document.body.classList.toggle('scrolled', y > 20);
        progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';

        ticking = false;
    });
});
