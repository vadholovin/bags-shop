$(document).ready(function(){
  $(".reviews-items").owlCarousel({
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

  $(".bestseller-slider").owlCarousel({
    margin: 1,
    items: 1,
    // dots: false,
    // nav: true,
    navText: ["&#60; Предыдущая сумка", "Следующая сумка &#62;"],
    responsiveClass:true,
    responsive:{
      0:{
        dots: true,
        nav: false
      },
      650:{
        dots: false,
        nav: true
      }
    }
  });

  $(".bags-slider").owlCarousel({
    margin: 1,
    items: 1,
    // dots: false,
    // nav: true,
    navText: ["&#60; Предыдущая сумка", "Следующая сумка &#62;"],
    responsiveClass:true,
    responsive:{
      0:{
        dots: true,
        nav: false
      },
      620:{
        dots: false,
        nav: true
      }
    }
  });

  $(".to-form").mPageScroll2id();

  $(document).on('click', '.modal_btn', function(){
    $('#small-modal').arcticmodal();
  });

});

