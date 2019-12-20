jQuery(function ($) {
    var $accrodions = $(".accordion");
    var $accrodion = $accrodions.find(".item");
    var closeClass = "is-close";
    var speed = 200;
    var isClose = false;


    function openAccordion() {
        closeAll();
        $(this).removeClass(closeClass);
        $(this).find(".accordion_content").slideDown(speed);
    }

    function closeAccordion() {
        $(this).addClass(closeClass);
        $(this).find(".accordion_content").slideUp(speed);
    }

    function closeAll() {
        $accrodion.each(function (i, el) {
            closeAccordion.call(el);
        });
    }

    if ($accrodion.length) {
        $accrodion.each(function (i, el) {
            var btn = $(el).find(".accordion_title");

            if (!isClose) {
                closeAccordion.call(el);
            }

            btn.on("click", function () {
                console.log("click");
                if ($(el).hasClass(closeClass)) {
                    openAccordion.call(el);
                } else {
                    closeAccordion.call(el);
                }
            });
        });// end .each()
    }
    $('.button-block .button').on('click', function (e) {
        e.preventDefault();
        var height = $('.text-content-more .content-vissible').height();
        $('.text-content-more .content').css('height', height)
    })

    $('.sidebar-vissible').on('click', function (e) {
        e.preventDefault();
        if (!$('.products-sidebar').hasClass('sidebar-open')) {
            $('.products-sidebar').addClass('sidebar-open')
        } else {
            $('.products-sidebar').removeClass('sidebar-open')
        }
    })

});