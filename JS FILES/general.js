
//NAV BAR
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.classList.toggle('noScroll');
        });

        // close the drawer when a link is picked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('noScroll');
            });
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

window.addEventListener('scroll', () => {
    topButton.classList.toggle('visible', window.scrollY > 400);
});
