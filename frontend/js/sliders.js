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
        fade: true,
        dots: false,
        autoplay: false,
        nextArrow: '<div class="slider_btn--next slider_btn"> ' + arrowRight + ' </div>',
        prevArrow: '<div class="slider_btn--prev slider_btn">' + arrowLeft + '</div>',
        speed: 500,
        infinite: true,

        cssEase: 'linear',
        accessibility: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplay: true,
                    // arrows:false
                }


            }
        ]
    };

    // init slider
    heroSlider.slick(heroOption);

    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        vertical: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    vertical: false
                }


            }
        ]

    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        asNavFor: '.slider-main',
        arrows: true,
        vertical: true,
        focusOnSelect: true,
        nextArrow: '<div class="slider_btn--next slider_btn"> ' + arrowRight + ' </div>',
        prevArrow: '<div class="slider_btn--prev slider_btn">' + arrowLeft + '</div>',
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                }


            }
        ]
    });
    $('.product-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<div class="slider_btn--next slider_btn"> ' + arrowRight + ' </div>',
        prevArrow: '<div class="slider_btn--prev slider_btn">' + arrowLeft + '</div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }


            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                }


            },{
                breakpoint: 561,
                settings: {
                    slidesToShow: 3,
                }


            },{
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                }


            },
        ]
    });
    //
    // $(window).on('resize orientationchange', function() {
    //     if ($(window).width() > 1200) {
    //         $('.slider-nav').slick('unslick');
    //         $('.slider-nav').slick({
    //             slidesToShow: 4,
    //             asNavFor: '.slider-main',
    //             vertical: true,
    //             focusOnSelect: true,
    //             arrows: true,
    //             autoplay: false,
    //         });
    //     }
    // });

}); // ready
// sliders.js end