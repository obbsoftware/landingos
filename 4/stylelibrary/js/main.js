$( document ).ready(function() {

  // Toogle Hamburger Menu
  $(".navbar-toggler").on("click", function() {
    $(".hamburger-menu").toggleClass('change');
  });

  // Animations, rest is in index.html
  new WOW().init();

  // Slider/Carousel
  $('.owl-carousel').owlCarousel({
    items : 4,
    loop  : true,
    center : true,
    smartSpeed :900,
    nav:true,
    navText: [
        "<i class='bi bi-chevron-left carousel-nav-left'></i>",
        "<i class='bi bi-chevron-right carousel-nav-right'></i>"
    ],responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      576:{
        items:2,
        nav:true,
      },
      992:{
        items:3,
        nav:true,
        loop:true,
        autoplay: true,
        autoplayTimeout: 1500,
        navText: [
            "<i class='bi bi-chevron-left carousel-nav-left'></i>",
            "<i class='bi bi-chevron-right carousel-nav-right'></i>"
        ],
      }
    }
  })
});
