/*======================================================================*\
==========================================================================

                              JS TOOL SCROLL TO

==========================================================================
\*======================================================================*/

jQuery(document).on('click.scrollTo', '.js-scroll-to', function(e){
	e.preventDefault();
	id = jQuery( jQuery(this).attr('href') );
	scroll_to(id);

	if ( jQuery(this).attr('data-activate') == 'true' ) {
		jQuery(this)
			.addClass('is-active')
			.siblings()
				.removeClass('is-active');
	}
})

jQuery('.js-scroll-top').click(function(e){
	scroll_to('top');
})

jQuery('.js-scroll-bottom').click(function(e){
	scroll_to('bottom');
})

function scroll_to(position, duration, relative) {
	var coef,
		top,
		bottom;

	if (position == 'top') {
		position = 0;
		top = true;
	} else if (position == 'bottom') {
		position = jQuery(document).height();
		bottom = true;
	} else {
		position = position.offset().top;
	}

	if (duration == 'fast') {
		coef = 0.1;
		duration = 200;
	} else if (duration == 'slow') {
		coef = 0.4;
		duration = 600;
	} else {
		coef = 0.25;
		duration= 400;
	}

	if (relative == true) {
		calc_windowH();
		if (top) {
			duration = jQuery(document).scrollTop()*coef;
		} else if (bottom) {
			duration = (jQuery(document).height()-jQuery(document).scrollTop())*coef;
		}
	}

	if ( jQuery('.js-site-header').css('position') == "fixed" ) {
		position += jQuery('.js-site-header').height();
	}

	var bodyOffset = jQuery('body').attr('data-offset-scroll');
	if ( bodyOffset ) {
		position -= parseInt(bodyOffset)+50;
	}

	jQuery('html, body').animate({scrollTop: position}, duration);
}
