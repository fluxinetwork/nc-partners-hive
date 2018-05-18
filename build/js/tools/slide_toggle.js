(function($){
	$('.js-slidetoggle-me').slideToggle(0);
	$('.js-slidetoggle-next').on('click', function() {
		$(this).next('.js-slidetoggle-me').slideToggle('fast');
	})
})(jQuery);