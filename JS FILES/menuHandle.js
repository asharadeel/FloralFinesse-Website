document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('menuType');
    const featuredMenu = document.getElementById('featuredMenu');

    const cakesButton = document.getElementById('cakesButton');
    const cakesMenu = document.getElementById('cakesMenu');


    const milkCakeButton = document.getElementById('milkCakeButton');
    const milkCakeMenu = document.getElementById('milkCakeMenu');
    

    featuredMenu.style.display = 'flex';
    if(milkCakeMenu) milkCakeMenu.style.display = 'none';
    if (cakesMenu) cakesMenu.style.display = 'none';


    title.textContent = 'Featured Items';
    if(milkCakeButton && milkCakeMenu) {
        milkCakeButton.addEventListener('click', function() {
            if (milkCakeMenu.style.display === 'none') {
                title.textContent = 'Milk Cakes';
                milkCakeMenu.style.display = 'flex';
                cakesMenu.style.display = 'none'; 
                featuredMenu.style.display = 'none';
            } else {
                title.textContent = 'Featured Items';
                milkCakeMenu.style.display = 'none';
                featuredMenu.style.display = 'flex';
            }
        });
    }

    if (cakesButton && cakesMenu) {
        cakesButton.addEventListener('click', function() {
            if (cakesMenu.style.display === 'none') {
                title.textContent = 'Cakes';
                cakesMenu.style.display = 'flex';
                milkCakeMenu.style.display = 'none';
                featuredMenu.style.display = 'none';

            } else {
                title.textContent = 'Featured Items';
                cakesMenu.style.display = 'none';
                featuredMenu.style.display = 'flex';

            }
        });
    }
});
