(function($){

	if ( $('.js-start-sticky').length ) {

		var sticky = $('.js-sticky-element'),
			declic = $('.js-start-sticky'),
			waypointStart = 230,
			headerH = $('#header').height(),
			fixedAnchors;

		//============================================================== TEST WINDOW

		function test_window() {
			if ( sticky.width() < windowW*0.5 ) {
				fixedAnchors = true; 
			} else {
				fixedAnchors = false;
				reset_sticky();
			}
		}

		test_window();

		$(window).on('resize.sticky', debouncer(test_window));

		//============================================================== START WAYPOIINT

		declic.waypoint(function(direction) {
			if ( fixedAnchors ) {
				if (direction == 'down') {
					$(window).on('scroll.sticky', stick_it);
				} else {
					reset_sticky();
				}
			}
		}, {offset: waypointStart+'px'});


		//============================================================== STOP WAYPOINT

		declic.waypoint(function(direction) {
			if ( fixedAnchors ) {
				if (direction == 'down') {
					$(window).off('scroll.sticky');
				} else {
					$(window).on('scroll.sticky', stick_it);
				}
			}
		}, {offset: 'bottom-in-view'})


		//============================================================== FUNCTIONS

		function stick_it() {
			var offset = $(window).scrollTop() - declic.offset().top + waypointStart;
			sticky.css('marginTop', offset);
		}

		function reset_sticky() {
			$(window).off('scroll.sticky');
			sticky.css('marginTop', 0);
		}
		
	}

})(jQuery);
