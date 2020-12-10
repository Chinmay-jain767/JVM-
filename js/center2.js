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


 function hovIn() {
     var areaID = $(this).attr('id');
     //alert('['+areaID+']');
     if (areaID == 'gaya') {
         $('#gayadiv').show();
         $('#roohdiv').hide();
         $('#aarohadiv').hide();
         $('#bhopaldiv').hide();
         $('#sikkimdiv').hide();
         $('#rotaractdiv').hide();
         $('#ffidiv').hide();
         $('#iiitdmdiv').hide();

         $('#samvedhnadiv').hide();
     }
     if (areaID == 'samvedhna') {
         $('#samvedhnadiv').show();
         $('#gayadiv').hide();
         $('#roohdiv').hide();
         $('#aarohadiv').hide();
         $('#bhopaldiv').hide();
         $('#sikkimdiv').hide();
         $('#rotaractdiv').hide();
         $('#ffidiv').hide();
         $('#iiitdmdiv').hide();


     }
     if (areaID == 'iiitdm') {
         $('#iiitdmdiv').show();
         $('#gayadiv').hide();
         $('#roohdiv').hide();
         $('#aarohadiv').hide();
         $('#bhopaldiv').hide();
         $('#sikkimdiv').hide();
         $('#rotaractdiv').hide();
         $('#ffidiv').hide();

         $('#samvedhnadiv').hide();
     }
     if (areaID == 'rooh') {
         $('#roohdiv').show();
         $('#gayadiv').hide();
         $('#aarohadiv').hide();
         $('#bhopaldiv').hide();
         $('#sikkimdiv').hide();
         $('#rotaractdiv').hide();
         $('#ffidiv').hide();
         $('#iiitdmdiv').hide();

         $('#samvedhnadiv').hide();
     }
     if (areaID == 'bhopal') {
         $('#bhopaldiv').show();
         $('#gayadiv').hide();
         $('#roohdiv').hide();
         $('#aarohadiv').hide();

         $('#sikkimdiv').hide();
         $('#rotaractdiv').hide();
         $('#ffidiv').hide();
         $('#iiitdmdiv').hide();

         $('#samvedhnadiv').hide();

     }
     if (areaID == 'aaroha') {
         $('#aarohadiv').show();
         $('#gayadiv').hide();
         $('#roohdiv').hide();

         $('#bhopaldiv').hide();
         $('#sikkimdiv').hide();
         $('#rotaractdiv').hide();
         $('#ffidiv').hide();
         $('#iiitdmdiv').hide();

         $('#samvedhnadiv').hide();
     }
     if (areaID == 'sikkim') {
         $('#sikkimdiv').show();
         $('#gayadiv').hide();
         $('#roohdiv').hide();
         $('#aarohadiv').hide();
         $('#bhopaldiv').hide();

         $('#rotaractdiv').hide();
         $('#ffidiv').hide();
         $('#iiitdmdiv').hide();

         $('#samvedhnadiv').hide();
     }
     if (areaID == 'rotaract') {
         $('#rotaractdiv').show();
         $('#gayadiv').hide();
         $('#roohdiv').hide();
         $('#aarohadiv').hide();
         $('#bhopaldiv').hide();
         $('#sikkimdiv').hide();

         $('#ffidiv').hide();
         $('#iiitdmdiv').hide();

         $('#samvedhnadiv').hide();
     }
     if (areaID == 'ffi') {
         $('#ffidiv').show();
         $('#gayadiv').hide();
         $('#roohdiv').hide();
         $('#aarohadiv').hide();
         $('#bhopaldiv').hide();
         $('#sikkimdiv').hide();
         $('#rotaractdiv').hide();

         $('#iiitdmdiv').hide();

         $('#samvedhnadiv').hide();
     }
 }

 $('map area').hover(hovIn);


 function myFunction() {
     var dots = document.getElementById("dots");
     var moreText = document.getElementById("more");
     var btnText = document.getElementById("seeMore");

     if (dots.style.display === "none") {
         dots.style.display = "inline";
         btnText.innerHTML = "see more";
         moreText.style.display = "none";
     } else {
         dots.style.display = "none";
         btnText.innerHTML = "see less";
         moreText.style.display = "inline";
     }
 }




 function changeContent() {
     var dots = document.getElementById("dots");
     var moreText = document.getElementById("more");
     var btn2 = document.getElementById("about-read-less");
     var btn1 = document.getElementById("about-read-more");

     if (dots.style.display === "none") {
         dots.style.display = "inline";
         moreText.style.display = "none";
         btn1.style.display = "inline";
     } else {
         dots.style.display = "none";
         moreText.style.display = "inline";
         btn1.style.display = "none";
     }
 }
