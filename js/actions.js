//abre script bullets//
$(document).ready(function() {
  $(".irEnfoque").click(function() {
      $('html, body').animate({
          scrollTop: $("#enfoque").offset().top - 40
      }, 1000);
      $('.header').removeClass('active');
  });
  $(".irAlcance").click(function() {
      $('html, body').animate({
          scrollTop: $("#alcance").offset().top - 40
      }, 1000);
      $('.header').removeClass('active');
  });
  $(".irMetodologia").click(function() {
      $('html, body').animate({
          scrollTop: $("#metodologia").offset().top - 40
      }, 1000);
      $('.header').removeClass('active');
  });

  $(".irCertificaciones").click(function() {
      $('html, body').animate({
          scrollTop: $("#certificaciones").offset().top - 40
      }, 1000);
      $('.header').removeClass('active');
  });

  $(".irAliados").click(function() {
      $('html, body').animate({
          scrollTop: $("#aliados").offset().top - 40
      }, 1000);
      $('.header').removeClass('active');
  });
    
  $(".irContacto, .contactar").click(function() {
      $('html, body').animate({
          scrollTop: $("#contacto").offset().top - 40
      }, 1000);
      $('.header').removeClass('active');
  });
    $('.hamb').click(function(e){
        e.stopPropagation();
        $('.header').toggleClass('active');
    });

    
    var swiperCert = new Swiper('.certSlider', {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 30,
        loop:true,
        autoplay: 4000,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            520: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 0
            },
        }
    }); 
    var swiperHome = new Swiper('.bannerHome', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 6000,
        loop: true
    });
});