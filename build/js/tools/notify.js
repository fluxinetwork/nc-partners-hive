/*======================================================================*\
==========================================================================

                             NOTIFY

==========================================================================
\*======================================================================*/

var timerNotify;

var notify = function(message, color) {

	clearTimeout(timerNotify);

	var classes ='is-open';
	if ( color == 'error' ) {
		classes += ' error';
	} else if ( color == 'valid' ) {
		classes += ' valid';
	}

	jQuery('.js-baseNotify')
		.removeClass('error valid')
		.addClass(classes)
		.find('.js-baseNotify-message')
			.html(message);

	var delay = Math.round(message.length)*90;
	delay = ( delay < 2000 ) ? 2000 : delay;
	timerNotify = setTimeout(function() {
	    jQuery('.js-baseNotify').removeClass('is-open');
	    timerNotify = setTimeout(function() {
	        jQuery('.js-baseNotify').removeClass('error valid');
	    }, 400);
	}, delay);

}

var close_notify = function() {
	clearTimeout(timerNotify);

	jQuery('.js-baseNotify').removeClass('is-open');

	timerNotify = setTimeout(function() {
	    jQuery('.js-baseNotify').removeClass('error valid');
	}, 400);
}

jQuery('.js-baseNotify-close').on('click', close_notify);
