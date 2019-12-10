const navBarBehaviour = (function() {
    //Sticky nav

    window.onscroll = function() {
        stickyNav();
    };

    const navbar = document.getElementById("nav-bar");

    const sticky = navbar.offsetTop;

    function stickyNav() {
        if (screen.width > 576) {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }

    //Change navbar color on scroll

    const nav = document.querySelector("#nav-bar"); // Identify target

    window.addEventListener("scroll", function(event) {
        // To listen for event
        event.preventDefault();

        if (screen.width > 576) {
            if (window.scrollY >= 20) {
                nav.style.backgroundColor = "#1B2D32";
                nav.style.transition = "300ms";
            } else {
                nav.style.backgroundColor = "transparent";
            }
        }
    });

    //Underline nav bar element when active

    const sections = [
        { identifier: "projects", classification: "projects-li", start: 0 },
        {
            identifier: "certifications",
            classification: "certificates-li",
            start: 0
        },
        { identifier: "contact-form", classification: "contact-li", start: 0 }
    ];

    function getElementHeight(identifier) {
        return document.getElementById(identifier).clientHeight;
    }

    function getElement(classification) {
        return document.getElementById(classification);
    }

    function getSectionStart() {
        let start = getElementHeight("hero");
        let navHeight = getElementHeight("nav-bar");

        for (let i = 0; i < sections.length; i++) {
            sections[i].start = start - navHeight;
            start += getElementHeight(sections[i].identifier);
        }
    }

    let active = -1;

    function removeClass() {
        if (active !== -1) {
            getElement(sections[active].classification).classList.remove(
                "active"
            );
            active = -1;
        }
    }

    window.addEventListener("scroll", function(event) {
        event.preventDefault();

        getSectionStart();
        let scrollPosition = document.documentElement.scrollTop;

        for (let i = sections.length - 1; i >= 0; i--) {
            if (getElementHeight("hero") >= scrollPosition) {
                removeClass();
            } else if (scrollPosition > sections[i].start) {
                removeClass();
                getElement(sections[i].classification).classList.add("active");
                active = i;
                break;
            }
        }
    });
})();

const contactForm = (function() {
    (function() {
        emailjs.init("user_S0B8ciC0SBiJrDpcETzeW");
    })();

    window.onload = function() {
        document
            .getElementById("contact-details")
            .addEventListener("submit", function(event) {
                event.preventDefault();
                this.contact_number.value = (Math.random() * 100000) | 0;
                emailjs.sendForm(
                    "service_W8xc4BZh",
                    "template_zzS43Ye",
                    "#contact-details"
                );
            });
    };

    //Resetting the form after submit

    const btn = document.getElementById("send-button");

    document.addEventListener("submit", function() {
        document.getElementById("contact-details").reset();

        btn.innerHTML = "Sent!";
        btn.setAttribute("disabled", "");
    });
})();
