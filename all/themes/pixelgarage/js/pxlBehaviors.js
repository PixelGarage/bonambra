/**
 * This file contains all Drupal behaviours of the Apia theme.
 *
 * Created by ralph on 05.01.14.
 */

(function ($) {

  /**
   * This behavior adds shadow to header on scroll.
   *
   */
  Drupal.behaviors.addHeaderShadow = {
    attach: function (context) {
      $(window).off("scroll");
      $(window).on("scroll", function () {
        var $header              = $("header.navbar"),
            $headerCont          = $("header.navbar .container"),
            fixedHeaderScrollPos = 116, //30,
            $width               = $(window).width();

        if ($width >= 768) {
          fixedHeaderScrollPos = 116;//50;
        }
        else if ($width >= 640) {
          fixedHeaderScrollPos = 104;//44;
        }
        else if ($width >= 480) {
          fixedHeaderScrollPos = 84;//37;
        }
        else {
          fixedHeaderScrollPos = 65;//30;
        }

        if ($(window).scrollTop() > fixedHeaderScrollPos) {
          // keep header fixed at this scroll position
          $header.css({position: 'fixed', top: -fixedHeaderScrollPos + 'px'});
          $header.removeClass('navbar-static-top').addClass('navbar-fixed-top');
          $('body').removeClass('navbar-is-static-top').addClass('navbar-is-fixed-top');

          // add shadow to header
          $headerCont.css("box-shadow", "0 4px 3px -4px gray");

        }
        else {
          // set header to static in top scroll region
          $header.css({position: 'static', top: 'auto'});
          $header.removeClass('navbar-fixed-top').addClass('navbar-static-top');
          $('body').removeClass('navbar-is-fixed-top').addClass('navbar-is-static-top');

          // remove shadow to header
          $headerCont.css("box-shadow", "none");
        }
      });
    }
  };

  /**
   * Show / hide the carousel controls depending on the number of items.
   *
   */
  Drupal.behaviors.manageCarouselControls = {
    attach: function (context) {
      var $carousels = $('.field-name-field-images .carousel');

      $carousels.each(function () {
        var $carousel = $(this),
            $items    = $carousel.find('.item'),
            $controls = $carousel.find('.carousel-control');

        if ($items.length <= 1) {
          $controls.hide();
        }
      });
    }
  };

  /**
   * Switches accordion indicator (open / close).
   */
  Drupal.behaviors.accordionIcon = {
    attach: function () {
      var $toggles = $('.view-wurf-wochen .accordion-toggle');

      $toggles.once(function() {
        var $toggle = $(this),
            $icon = $toggle.find('.fa');

        $toggle.on('click', function() {
          if ($toggle.hasClass('collapsed')) {
            $icon.removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
          } else {
            $icon.removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
          }
        });
      });
    }
  };


})(jQuery);
