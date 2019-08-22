// sliders.js
jQuery(function ($) {
    var arrowLeft = '<div class="arrow-slide arrow-left-slide"></div>';
    var arrowRight = '<div class="arrow-slide arrow-right-slide"></div>';
    // preset options
    var heroSlider = $('.banner-slider');
    var heroOption = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        nextArrow: '<div class="slider_btn--next slider_btn"> ' + arrowRight + ' </div>',
        prevArrow: '<div class="slider_btn--prev slider_btn">' + arrowLeft + '</div>',
        speed: 500,
        infinite: true,

        cssEase: 'linear',
        accessibility: false // prevent page scroll up on autoplay
    };

    // init slider
    heroSlider.slick(heroOption);

}); // ready
// sliders.js end