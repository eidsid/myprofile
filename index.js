//add stick class for navbar
$(document).ready(function() {
    navbar = $(".navbar");
    $(window).scroll(function() {
        Top = $(".section1").offset().top - window.innerHeight;
        if ($(window).scrollTop() > Top + 600) {
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }
    })
});

// Add smooth scrolling to all links
$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

//intro
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.3, delay: 2 });
tl.to(".intro", { y: "-130%", duration: 1.3 }, "-=1.5");
tl.fromTo(".introtext .hide .text", { opacity: 1, }, { opacity: 0.2, "font-size": 1, duration: 1 }, "-=2.5");
//intro ->banner
//tl.to(".banner img", { y: "0%", duration: 1 }, { opacity: 1, duration: 1, delay: 3 });
tl.to(".banner .content", { y: "0%", duration: 1, stagger: 3 }, "-=1");

//nav anim




$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $(this).css({
            "transform": "scale(0)"

        });
    });
    $('.navbar ul .close').click(function() {
        $('.navbar').animate({ opacity: 0 }, 1000, function() {
            $('#navbarNavDropdown').removeClass("show");
            $('.navbar').css({ opacity: 1 });
            $('.navbar-toggler').css({
                "transform": "scale(1)"
            });

        });

    })

    setInterval(function() {
        $('body').removeClass("over");
    }, 5000)

    $(window).scroll(function() {
        Top = $(".section1").offset().top - window.innerHeight;
        if ($(window).scrollTop() > Top + 500) {
            //section1 animation
            const tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });
            tl1.to(".section1 .content h1", { x: "0%", duration: 1, stagger: 0.25 });
            tl1.to(".section1 .content .para", { y: "0%", duration: 1, stagger: 0.25 });
            tl1.to(".section1 img", { opacity: 1, duration: 1 });

        }
    })
});