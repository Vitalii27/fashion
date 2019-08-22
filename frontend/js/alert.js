// alert.js

function Alert(selector) {

	this.selector = selector;

	this.alertClass = "is-shown";

	this.alertTimeout = null;

	this.init();

}
Alert.prototype =
		{
			//constructor: Alert,
			init: function () {
				var _this = this;

				//close btn
				$(_this.selector).find(".js-alert-close").on("click", function (e) {
					e.stopPropagation();
					_this.hideAlert.apply(_this);
				});

				// hover
				$(_this.selector).hover(function () {
							_this.mouseIn.apply(_this);
						},
						function () {
							_this.mouseOut.apply(_this);
						});
			},
			showAlert: function (text) {
				var _this = this;
				$(_this.selector).addClass(_this.alertClass);
				$(_this.selector).find(".alert_text").html(text);

				_this.alertTimeout = setTimeout(function () {
					_this.hideAlert.apply(_this);
				}, 3000);
			},

			hideAlert: function () {
				var _this = this;
				$(_this.selector).removeClass(_this.alertClass);
				if (_this.alertTimeout) {
					clearTimeout(_this.alertTimeout);
					_this.alertTimeout = null;
				}

			},

			mouseIn: function () {
				clearTimeout(this.alertTimeout);
				this.alertTimeout = null;
			},

			mouseOut: function () {
				var _this = this;
				_this.alertTimeout = setTimeout(function () {
					_this.hideAlert.apply(_this);
				}, 3000);
			}
		};

var alert;
$(function () {
	alert = new Alert(".js-alert");
	if ($(alert.selector).length) {
		alert.showAlert('<i class="fa fa-info-circle" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  <a href="#0">В корзину</a>');
	}
/*	$("body").on("click", function () {
		alert.showAlert('<i class="fa fa-info-circle" aria-hidden="true"></i> You make a click');
	});*/
});//ready


// alert.js end