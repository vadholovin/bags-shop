$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin: 10,
    dots: true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
      1000:{
        items:2,
      }
    }
  });
});