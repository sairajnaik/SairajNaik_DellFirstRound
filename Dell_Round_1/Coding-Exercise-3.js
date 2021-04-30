// https: //www.dell.com/en-us/shop/accessories 

// From the above URL, 

//1. Replace all the images of the Networking products with the Cameras, Photo & Video ones.





// 2. Change the background color of the Networking hero image to Purple. 
var networkingImgContainer = document.querySelector(`[alt='Networking']`).parentElement;
networkingImgContainer.style.background = 'purple';



//3. Create a self-invoking function that calculates the sum of the price of all products listed on the 
// Power, Batteries & Adapters section and triggers an alert with the result.
// https://www.dell.com/en-us/shop/power-deals/ar/8346

(function() {
    var totalPrice = 0;
    document.querySelectorAll(`[data-testid='sharedPSPDellPrice']`)
        .forEach(function(spanElm) {
            totalPrice += parseFloat(spanElm.innerText.replace('$', ''));
        });
    alert('total price $' + totalPrice.toFixed(2));
})();



// Bonus
// Find the Slider and make the slider's auto play feature stops (only if it has at least 2 slides)
// **************************************************************************** //
// **************************************************************************** //
// *******************Could not see any slider on the page******************* //
// **************************************************************************** //
// **************************************************************************** //