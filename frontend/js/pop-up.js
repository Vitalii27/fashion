var PopUpModule = (function ($) {
	// private methods
	var _removalDelay = 150;
	var _scrollBarWidth = detectModule.scrollBarWidth;

	var isOpenPopup = function () {
		// console.log("open pop-up");
		$('body').css({
      'padding-right': _scrollBarWidth + "px"
    });
		$("html").addClass("pop-up-is-showed");
	};

	var isClosePopup = function () {
		// console.log("close pop-up");
		$("html").removeClass("pop-up-is-showed");
		$('body').css('padding-right', 0);
	};


	return {
		// public methods
		initInline: function (selector) {
			$(selector).data("ignore-scroll", true);
			$(selector).magnificPopup({
				type: 'inline',
				preloader: false,
				removalDelay: _removalDelay,
				mainClass: 'mfp-fade',
				overflowY: 'visible',
				showCloseBtn: true,
				callbacks: {
					open: isOpenPopup,
					close: isClosePopup
				}
			});
		},

		initAjax: function (selector) {
			$(selector).data("ignore-scroll", true);
			var _this = this;
			$(selector).magnificPopup({
				type: 'ajax',
				preloader: true,
				removalDelay: _removalDelay,
				mainClass: 'mfp-fade',
				overflowY: 'hidden',
				showCloseBtn: false,
				callbacks: {
					open: isOpenPopup,
					ajaxContentAdded: function () {
						// FormStyler.initSelect(".select");
						// console.log(_this);
						// _this.initAjax(".js-pop-up-ajax");
					},
					close: isClosePopup
				}
			});
		},

		open: function (html) {
			$.magnificPopup.close();
			//wait for animation
			setTimeout(function () {
				// Open directly via API
				$.magnificPopup.open({
					items: {
						src: html, // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					},
					removalDelay: _removalDelay,
					mainClass: 'mfp-fade',
					overflowY: 'scroll',
					showCloseBtn: false,
					callbacks: {
						open: function () {
							isOpenPopup();
							// FormStyler.initSelect(".select");
							// ProductSlider.init(".js-product-slider", ".js-product-thumbs");
						},
						close: isClosePopup
					}
				});
			}, _removalDelay);
		},
		openAjax: function (href, setting) {
			var _this = this;
			$.ajax({
				url: href,
				type: 'GET',
				success: function (data) {
					//console.log(data);
					_this.open(data);
				}
			});

		}
	}
}(jQuery));

jQuery(function ($) {
	PopUpModule.initInline(".js-pop-up");
	//PopUpModule.initAjax(".js-pop-up-ajax");
}); // ready
