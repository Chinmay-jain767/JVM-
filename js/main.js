$(document).ready(function(){
    $('.c1').owlCarousel({
        center: true,
        loop: true,
        items:3,
        margin: 30,
        stagePadding: 0,
        nav: false,
        //navText: ['<span class="fa fa-caret-left" style="font-size: larger">', '<span class="fa fa-caret-right" style="font-size: larger">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 3
            }
        },
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $('.slideshow1').owlCarousel({
        center: true,
        loop: true,
        items:3,
        margin: 30,
        stagePadding: 0,
        nav: false,
        //navText: ['<span class="fa fa-caret-left" style="font-size: larger">', '<span class="fa fa-caret-right" style="font-size: larger">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 3
            }
        },
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.zomato').owlCarousel({
        center: true,
        loop: true,
        items:3,
        margin: 0,
        stagePadding: 0,
        nav: false,
        //navText: ['<span class="fa fa-caret-left" style="font-size: larger">', '<span class="fa fa-caret-right" style="font-size: larger">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 3
            }
        },
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $('.counter').counterUp({
        time: 2000
    });
    $('.counter2').counterUp({
        time: 500
    });
    $('.z-counter').counterUp({
        time: 2000
    });

    $('.prof-card').hover(function() {
        $(this).find('.overlay-text').addClass('w3-animate-opacity');
    }, function() {
        $(this).find('.overlay-text').removeClass('w3-animate-opacity');
    })
});