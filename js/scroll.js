"use strict"; // Start of use strict


  $('a.js-scroll-trigger[href*="#"]').click(function() {
    var url = $(this).attr('href');
    var target = $(url);
    var offset = 70;
        $('html, body').animate({scrollTop: (target.offset().top - 70 )}, 1000);
        history.replaceState({}, document.title, ".");
      });




  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 50) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

// End of use strict
