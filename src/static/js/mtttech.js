const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -10px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})


$(document).ready( function() {
    // Hide the navigation menu items for now.
    let nav_elements = document.querySelectorAll(".navigation-menu-item")
    nav_elements.forEach(element => {
        //element.style.display = "none"
    })

    // Auto-scroll hash links.
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click( function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist
                if (target.length) {
                    // Prevent default if animation will happen.
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation.
                        // Change focus.
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
    });
});
