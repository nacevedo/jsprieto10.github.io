"use strict"; // Comienza el uso del modo estricto

// función que realiza la animación para pasar de una sección a otra
  $('a.js-scroll-trigger[href*="#"]').click(function() {
    var url = $(this).attr('href');
    var target = $(url);
    var offset = 70;
        $('html, body').animate({scrollTop: (target.offset().top - 70 )}, 1000);
        history.replaceState({}, document.title, ".");
      })




  // cierra el navbar si esta abierto cuando esta en movil
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // Cambia la clase del navbar cuando se hace scroll de más de 5 para que cambie el tipo de navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 50) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  // Ejecuta la función navbarCollapse cuando se hace scroll
  $(window).scroll(navbarCollapse);

// fin del uso estricto
