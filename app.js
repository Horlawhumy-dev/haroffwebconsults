
// Hamburger Toggling

// opening Button
const openHamburger = document.querySelector('#open-toggle');

let ulLinks = document.getElementById('links');

openHamburger.addEventListener("click", () => {
    // console.log(ulLinks.classList)
    ulLinks.classList.toggle('toggle-open');
})

// Closing Button
const closeHamburger = document.getElementById('close');


closeHamburger.addEventListener("click", () => {
    // console.log(ulLinks) 
    ulLinks.classList.toggle('toggle-close');
})