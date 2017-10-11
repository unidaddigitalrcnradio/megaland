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


// Move mouse background //
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg_animated').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();