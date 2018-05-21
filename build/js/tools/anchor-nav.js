(function($){

	if ( $('.js-anchor').length ) {

		var scrollto = false;

		//============================================================== CLIC NAV

		$('.js-anchors')
			.find('a')
				.on('click', function() {
					scrollto = true; // smooth scroll via tools/concat/scrollTo
					setTimeout(function(){
						scrollto = false
					}, 400);
				});

		//============================================================== WAYPOINT SECTIONS

		$('.js-anchor').each(function() {
			$(this)
				.waypoint(function(direction) {
					if ( direction == 'down' ) {
						active_anchor($(this.element).index());
					}
				}, {offset: '40%'})

			$(this)
				.waypoint(function(direction) {
					var index = $(this.element).index();
					if ( direction == 'up' && index > 0 ) {
						active_anchor(index-1);
					}
					
				}, {offset: '70%'});
		})

		var active_anchor = function(index) {
			if ( !scrollto ) {
				$('.js-anchors a')
					.eq(index)
						.addClass('is-active')
						.siblings('a')
							.removeClass('is-active')
			}
		} 

	}

})(jQuery);
