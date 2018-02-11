"use strict"; // Start of use strict


  $('a.js-scroll-trigger[href*="#"]').click(function() {
    var url = $(this).attr('href');
    var target = $(url);
    var offset = 70;
    if (url)
      console.log(url);
        $('html, body').animate({
          scrollTop: (target.offset().top - 70 )
        }, 1000);
        return true;
      });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll

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
