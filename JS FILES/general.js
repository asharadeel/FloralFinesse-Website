
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


// CREDIT POPUP - built here so it exists on every page without pasting
// the same markup into seven files
document.addEventListener('DOMContentLoaded', function() {
    const credit = document.querySelector('.barcode');
    if (!credit) return;

    const modal = document.createElement('div');
    modal.className = 'creditModal';
    modal.innerHTML =
        '<div class="creditCard">' +
            '<button class="creditClose" aria-label="Close">&times;</button>' +
            '<p class="eyebrow">Website by Ashar</p>' +
            '<h3>Like What You See?</h3>' +
            '<div class="divider"><span></span></div>' +
            '<p>This site was designed and built by Ashar. If you like it and ' +
            'want something similar for your own business, take a look at my work.</p>' +
            '<a href="' + credit.href + '" class="btn" target="_blank" rel="noopener">View My Work</a>' +
        '</div>';

    document.body.appendChild(modal);

    function close() {
        modal.classList.remove('open');
        document.body.classList.remove('noScroll');
    }

    // the link still works without javascript, so only take it over now
    credit.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('open');
        document.body.classList.add('noScroll');
    });

    modal.querySelector('.creditClose').addEventListener('click', close);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) close();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') close();
    });

    // going to the site should not leave the popup sitting open behind it
    modal.querySelector('.btn').addEventListener('click', close);
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
