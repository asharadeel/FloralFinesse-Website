document.addEventListener('DOMContentLoaded', function() {

    // MENU SELECTION HANDLER
    const showproducts = document.getElementById('showproductsButton');

    const flavourButton = document.getElementById('showflavoursButton');
    const productsButton = document.getElementById('showproductsButton');

    const flavoursMenu = document.getElementById('flavoursSection');
    const productsMenu = document.getElementById('productsSection');


    if(flavoursMenu) flavoursMenu.style.display = 'none';
    productsMenu.style.display = 'grid';

    if(flavourButton && flavoursMenu) {
        flavourButton.addEventListener('click', function() {
            if (flavoursMenu.style.display === 'none') {
                flavoursMenu.style.display = 'grid';
                productsMenu.style.display = 'none';
            } 
        });
    }

    if(productsButton && productsMenu) {
        productsButton.addEventListener('click', function() {
            if (productsMenu.style.display === 'none') {
                productsMenu.style.display = 'grid';
                flavoursMenu.style.display = 'none';
            } 
        });
    }




    // FLAVOUR MENU HANLDER
    const ftitle = document.getElementById('fmenuType');
    
    
    const fcupcakeButton = document.getElementById('fcupcakeButton');
    const fcupcakeMenu = document.getElementById('fcupcakeMenu');

    const fmilkCakeButton = document.getElementById('fmilkcakeButton');
    const fmilkCakeMenu = document.getElementById('fmilkcakeMenu');

    const fcheesecakeButton = document.getElementById('fcheesecakeButton');
    const fcheesecakeMenu = document.getElementById('fcheesecakeMenu');

    const fcakesButton = document.getElementById('fcakeButton');
    const fcakesMenu = document.getElementById('fcakeMenu');

    const fcakesicleButton = document.getElementById('fcakesiclesButton');
    const fcakesicleMenu = document.getElementById('fcakesicleMenu');

    const fbrownieButton = document.getElementById('fbrownieButton');
    const fbrownieMenu = document.getElementById('fbrownieMenu');

    const fcakepopButton = document.getElementById('fcakepopsButton');
    const fcakepopMenu = document.getElementById('fcakepopMenu');

    if(fcupcakeMenu) fcupcakeMenu.style.display = 'none';
    if (fmilkCakeMenu) fmilkCakeMenu.style.display = 'none';
    if (fcakesMenu) fcakesMenu.style.display = 'none';
    if (fcakesicleMenu) fcakesicleMenu.style.display = 'none';
    if (fcheesecakeMenu) fcheesecakeMenu.style.display = 'none';
    if (fbrownieMenu) fbrownieMenu.style.display = 'none';
    if (fcakepopMenu) fcakepopMenu.style.display = 'none';
    
    ftitle.textContent = 'SELECT A CATEGORY';

    if (fcupcakeButton && fcupcakeMenu) {
        fcupcakeButton.addEventListener('click', function() {
            if (fcupcakeMenu.style.display === 'none') {
                ftitle.textContent = 'Cupcake Flavours';
                fcupcakeMenu.style.display = 'flex';
                fmilkCakeMenu.style.display = 'none';
                fcakesMenu.style.display = 'none';
                fcakesicleMenu.style.display = 'none';
                fcheesecakeMenu.style.display = 'none';
                fbrownieMenu.style.display = 'none';
                fcakepopMenu.style.display = 'none';
            } else {
                ftitle.textContent = 'SELECT A CATEGORY';
                fcupcakeMenu.style.display = 'none';
            }
        });
    }
    if (fmilkCakeButton && fmilkCakeMenu) {
        fmilkCakeButton.addEventListener('click', function() {
            if (fmilkCakeMenu.style.display === 'none') {
                ftitle.textContent = 'Milk Cake Flavours';
                fmilkCakeMenu.style.display = 'flex';
                fcupcakeMenu.style.display = 'none';
                fcakesMenu.style.display = 'none';
                fcakesicleMenu.style.display = 'none';
                fcheesecakeMenu.style.display = 'none';
                fbrownieMenu.style.display = 'none';
                fcakepopMenu.style.display = 'none';
            } else {
                ftitle.textContent = 'SELECT A CATEGORY';
                fmilkCakeMenu.style.display = 'none';
            }
        });
    }
    if (fcheesecakeButton && fcheesecakeMenu) {
        fcheesecakeButton.addEventListener('click', function() {
            if (fcheesecakeMenu.style.display === 'none') {
                ftitle.textContent = 'Cheesecake Flavours';
                fcheesecakeMenu.style.display = 'flex';
                fcupcakeMenu.style.display = 'none';
                fmilkCakeMenu.style.display = 'none';
                fcakesMenu.style.display = 'none';
                fcakesicleMenu.style.display = 'none';
                fbrownieMenu.style.display = 'none';
                fcakepopMenu.style.display = 'none';
            } else {
                ftitle.textContent = 'SELECT A CATEGORY';
                fcheesecakeMenu.style.display = 'none';
            }
        });
    }
    if (fcakesButton && fcakesMenu) {
        fcakesButton.addEventListener('click', function() {
            if (fcakesMenu.style.display === 'none') {
                ftitle.textContent = 'Cakes Flavours';
                fcakesMenu.style.display = 'flex';
                fcupcakeMenu.style.display = 'none';
                fmilkCakeMenu.style.display = 'none';
                fcakesicleMenu.style.display = 'none';
                fcheesecakeMenu.style.display = 'none';
                fbrownieMenu.style.display = 'none';
                fcakepopMenu.style.display = 'none';
            } else {
                ftitle.textContent = 'SELECT A CATEGORY';
                fcakesMenu.style.display = 'none';
            }
        });
    }
    if (fcakesicleButton && fcakesicleMenu) {
        fcakesicleButton.addEventListener('click', function() {
            if (fcakesicleMenu.style.display === 'none') {
                ftitle.textContent = 'Cakesicle Flavours';
                fcakesicleMenu.style.display = 'flex';
                fcupcakeMenu.style.display = 'none';
                fmilkCakeMenu.style.display = 'none';
                fcakesMenu.style.display = 'none';
                fcheesecakeMenu.style.display = 'none';
                fbrownieMenu.style.display = 'none';
                fcakepopMenu.style.display = 'none';
            } else {
                ftitle.textContent = 'SELECT A CATEGORY';
                fcakesicleMenu.style.display = 'none';
            }
        });
    }

    if (fbrownieButton && fbrownieMenu) {
        fbrownieButton.addEventListener('click', function() {
            if (fbrownieMenu.style.display === 'none') {
                ftitle.textContent = 'Brownie Flavours';
                fbrownieMenu.style.display = 'flex';
                fcupcakeMenu.style.display = 'none';
                fmilkCakeMenu.style.display = 'none';
                fcakesMenu.style.display = 'none';
                fcakesicleMenu.style.display = 'none';
                fcheesecakeMenu.style.display = 'none';
                fcakepopMenu.style.display = 'none';
            } else {
                ftitle.textContent = 'SELECT A CATEGORY';
                fbrownieMenu.style.display = 'none';
            }
        });
    }

    if (fcakepopButton && fcakepopMenu) {
        fcakepopButton.addEventListener('click', function() {
            if (fcakepopMenu.style.display === 'none') {
                ftitle.textContent = 'Cake Pop Flavours';
                fcakepopMenu.style.display = 'flex';
                fcupcakeMenu.style.display = 'none';
                fmilkCakeMenu.style.display = 'none';
                fcakesMenu.style.display = 'none';
                fcakesicleMenu.style.display = 'none';
                fcheesecakeMenu.style.display = 'none';
                fbrownieMenu.style.display = 'none';
            } else {
                ftitle.textContent = 'SELECT A CATEGORY';
                fcakepopMenu.style.display = 'none';
            }
        });
    }

    


    // MENU HANDLER /////
    const title = document.getElementById('menuType');
    const featuredMenu = document.getElementById('featuredMenu');

    const cupcakeButton = document.getElementById('cupcakesButton');
    const cupcakeMenu = document.getElementById('cupcakeMenu');

    const cakesicleButton = document.getElementById('cakesicleButton');
    const cakesicleMenu = document.getElementById('cakesicleMenu');

    const cheesecakeButton = document.getElementById('cheesecakeButton');
    const cheesecakeMenu = document.getElementById('cheesecakeMenu');

    const chocstrawberryButton = document.getElementById('choclatestrawberriesButton');
    const chocstrawberryMenu = document.getElementById('choclatestrawberriesMenu');

    const cakesButton = document.getElementById('cakesButton');
    const cakesMenu = document.getElementById('cakesMenu');

    const bentoButton = document.getElementById('bentocakesButton');
    const bentoMenu = document.getElementById('bentocakeMenu');

    const cakepopButton = document.getElementById('cakepopsButton');
    const cakepopMenu = document.getElementById('cakepopMenu');

    const brownieButton = document.getElementById('browniesButton');
    const brownieMenu = document.getElementById('browniesMenu');

    const milkCakeButton = document.getElementById('milkCakeButton');
    const milkCakeMenu = document.getElementById('milkCakeMenu');
    


    featuredMenu.style.display = 'flex';
    if(milkCakeMenu) milkCakeMenu.style.display = 'none';
    if (cakesMenu) cakesMenu.style.display = 'none';
    if (cupcakeMenu) cupcakeMenu.style.display = 'none';
    if (cakesicleMenu) cakesicleMenu.style.display = 'none';
    if (cheesecakeMenu) cheesecakeMenu.style.display = 'none';
    if (chocstrawberryMenu) chocstrawberryMenu.style.display = 'none';
    if (bentoMenu) bentoMenu.style.display = 'none';
    if (cakepopMenu) cakepopMenu.style.display = 'none';
    if (brownieMenu) brownieMenu.style.display = 'none';


    title.textContent = 'Featured Items';
    if(milkCakeButton && milkCakeMenu) {
        milkCakeButton.addEventListener('click', function() {
            if (milkCakeMenu.style.display === 'none') {
                title.textContent = 'Milk Cakes';
                milkCakeMenu.style.display = 'flex';
                cakesMenu.style.display = 'none'; 
                featuredMenu.style.display = 'none';
                cupcakeMenu.style.display = 'none';
                bentoMenu.style.display = 'none';
                cakesicleMenu.style.display = 'none';
                cheesecakeMenu.style.display = 'none';
                chocstrawberryMenu.style.display = 'none';
                cakepopMenu.style.display = 'none';
                brownieMenu.style.display = 'none';
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
                cupcakeMenu.style.display = 'none';
                bentoMenu.style.display = 'none';
                cakesicleMenu.style.display = 'none';
                cheesecakeMenu.style.display = 'none';
                chocstrawberryMenu.style.display = 'none';
                cakepopMenu.style.display = 'none';
                brownieMenu.style.display = 'none';
            } else {
                title.textContent = 'Featured Items';
                cakesMenu.style.display = 'none';
                featuredMenu.style.display = 'flex';

            }
        });
    }

    if (cupcakeButton && cupcakeMenu) {
        cupcakeButton.addEventListener('click', function() {
            if (cupcakeMenu.style.display === 'none') {
                title.textContent = 'Cupcakes';
                cupcakeMenu.style.display = 'flex';
                milkCakeMenu.style.display = 'none';
                cakesMenu.style.display = 'none';
                featuredMenu.style.display = 'none';
                bentoMenu.style.display = 'none';
                cakesicleMenu.style.display = 'none';
                cheesecakeMenu.style.display = 'none';
                chocstrawberryMenu.style.display = 'none';
                cakepopMenu.style.display = 'none';
                brownieMenu.style.display = 'none';
            } else {
                title.textContent = 'Featured Items';
                cupcakeMenu.style.display = 'none';
                featuredMenu.style.display = 'flex';

            }
        });
    }

    if (cakesicleButton && cakesicleMenu) {
        cakesicleButton.addEventListener('click', function() {
            if (cakesicleMenu.style.display === 'none') {
                title.textContent = 'Cakesicles';
                cakesicleMenu.style.display = 'flex';
                milkCakeMenu.style.display = 'none';
                cakesMenu.style.display = 'none';
                featuredMenu.style.display = 'none';
                cupcakeMenu.style.display = 'none';
                cheesecakeMenu.style.display = 'none';
                chocstrawberryMenu.style.display = 'none';
                bentoMenu.style.display = 'none';
                cakepopMenu.style.display = 'none';
                brownieMenu.style.display = 'none';
            } else {
                title.textContent = 'Featured Items';
                cakesicleMenu.style.display = 'none';
                featuredMenu.style.display = 'flex';

            }
        });
    }

    if (cheesecakeButton && cheesecakeMenu) {
        cheesecakeButton.addEventListener('click', function() {
            if (cheesecakeMenu.style.display === 'none') {
                title.textContent = 'Cheesecakes';
                cheesecakeMenu.style.display = 'flex';
                milkCakeMenu.style.display = 'none';
                cakesMenu.style.display = 'none';
                featuredMenu.style.display = 'none';
                cupcakeMenu.style.display = 'none';
                cakesicleMenu.style.display = 'none';
                chocstrawberryMenu.style.display = 'none';
                bentoMenu.style.display = 'none';
                cakepopMenu.style.display = 'none';
                brownieMenu.style.display = 'none';
            } else {
                title.textContent = 'Featured Items';
                cheesecakeMenu.style.display = 'none';
                featuredMenu.style.display = 'flex';

            }
        });
    }

    if (chocstrawberryButton && chocstrawberryMenu) {
        chocstrawberryButton.addEventListener('click', function() {
            if (chocstrawberryMenu.style.display === 'none') {
                title.textContent = 'Chocolate Strawberries';
                chocstrawberryMenu.style.display = 'flex';
                milkCakeMenu.style.display = 'none';
                cakesMenu.style.display = 'none';
                featuredMenu.style.display = 'none';
                cupcakeMenu.style.display = 'none';
                cakesicleMenu.style.display = 'none';
                cheesecakeMenu.style.display = 'none';
                bentoMenu.style.display = 'none';
                cakepopMenu.style.display = 'none';
                brownieMenu.style.display = 'none';
            } else {
                title.textContent = 'Featured Items';
                chocstrawberryMenu.style.display = 'none';
                featuredMenu.style.display = 'flex';

            }
        });
    }

    if (bentoButton && bentoMenu) {
        bentoButton.addEventListener('click', function() {
            if (bentoMenu.style.display === 'none') {
                title.textContent = 'Bento Cakes';
                bentoMenu.style.display = 'flex';
                milkCakeMenu.style.display = 'none';
                cakesMenu.style.display = 'none';
                featuredMenu.style.display = 'none';
                cupcakeMenu.style.display = 'none';
                cakesicleMenu.style.display = 'none';
                cheesecakeMenu.style.display = 'none';
                chocstrawberryMenu.style.display = 'none';
                cakepopMenu.style.display = 'none';
                brownieMenu.style.display = 'none';
            } else {
                title.textContent = 'Featured Items';
                bentoMenu.style.display = 'none';
                featuredMenu.style.display = 'flex';

            }
        });
    }

    if (cakepopButton && cakepopMenu) {
        cakepopButton.addEventListener('click', function() {
            if (cakepopMenu.style.display === 'none') {
                title.textContent = 'Cake Pops';
                cakepopMenu.style.display = 'flex';
                milkCakeMenu.style.display = 'none';
                cakesMenu.style.display = 'none';
                featuredMenu.style.display = 'none';
                cupcakeMenu.style.display = 'none';
                cakesicleMenu.style.display = 'none';
                cheesecakeMenu.style.display = 'none';
                chocstrawberryMenu.style.display = 'none';
                bentoMenu.style.display = 'none';
                brownieMenu.style.display = 'none';
            } else {
                title.textContent = 'Featured Items';
                cakepopMenu.style.display = 'none';
                featuredMenu.style.display = 'flex';

            }
        });
    }

    if (brownieButton && brownieMenu) {
        brownieButton.addEventListener('click', function() {
            if (brownieMenu.style.display === 'none') {
                title.textContent = 'Brownies';
                brownieMenu.style.display = 'flex';
                milkCakeMenu.style.display = 'none';
                cakesMenu.style.display = 'none';
                featuredMenu.style.display = 'none';
                cupcakeMenu.style.display = 'none';
                cakesicleMenu.style.display = 'none';
                cheesecakeMenu.style.display = 'none';
                chocstrawberryMenu.style.display = 'none';
                bentoMenu.style.display = 'none';
                cakepopMenu.style.display = 'none';
            } else {
                title.textContent = 'Featured Items';
                brownieMenu.style.display = 'none';
                featuredMenu.style.display = 'flex';

            }
        });
    }

    


});
