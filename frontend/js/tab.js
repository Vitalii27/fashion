jQuery(function ($) {
    // $(window).on('load', function () {
    var list = $(".content-list");
    var item = $('.content-item');
    var button = $('.tab-list li');


    var $grid = list.isotope({
        itemSelector: '.content-item',
        layoutMode: 'fitRows'
    });
    button.on('click', function (e) {
        e.preventDefault()
        button.removeClass('active-filter')
        $(this).addClass('active-filter')
        if($(this).attr('data-filter') !== '*'){
            $('.virtical-course').find('.img-bg').css('display', 'none')
        }else{
            $('.virtical-course').find('.img-bg').css('display', 'block')
        }


        var elem = $(this).attr('data-filter');
        // setTimeout(function () {
        $grid.isotope({filter: elem});

        // }, 1000)
    })
    // })

});



