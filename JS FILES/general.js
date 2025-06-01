

//NAV BAR
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});