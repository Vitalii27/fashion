(function ($) {

  var filters = $('.portfolio  [data-filter]');
  var grid = $('.portfolio-grid');
  var activeClass = 'is-show';
  var media = window.matchMedia("(max-width: 48em)");

  grid.isotope({
    percentPosition: true,
    layoutMode: 'fitRows',
    itemSelector: '.portfolio-grid_item',
    masonry: {
      columnWidth: '.portfolio-grid_item'
    }
  });

  filters.click(function () {
    filters.removeClass('is-active');
    $(this).addClass('is-active');

    var selector = $(this).attr('data-filter');
    grid.isotope({
      filter: selector
    });
    return false;
  });

  if (media.matches) {
    $(".portfolio_filters").removeClass(activeClass);
    $(".dropdown").addClass(activeClass);
  } else {
    $(".portfolio_filters").addClass(activeClass);
    $(".dropdown").removeClass(activeClass);
  }

  $(window).resize(function () {
    media = window.matchMedia("only screen and (max-width: 48em)");

    if (media.matches) {
      $(".portfolio_filters").removeClass(activeClass);
      $(".dropdown").addClass(activeClass);
    } else {
      $(".portfolio_filters").addClass(activeClass);
      $(".dropdown").removeClass(activeClass);
    }

  });


}(jQuery));
