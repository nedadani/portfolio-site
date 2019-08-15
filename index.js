//Sticky nav

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
};

// Get the navbar
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


//Contact form

(function() {
    emailjs.init("user_S0B8ciC0SBiJrDpcETzeW");
})();

window.onload = function() {
    document
        .getElementById("contact-details")
        .addEventListener("submit", function(event) {
            event.preventDefault();
            this.contact_number.value = (Math.random() * 100000) | 0;
            emailjs.sendForm("service_W8xc4BZh", "template_zzS43Ye", "#contact-details");
        });
};
