/*======================================================================*\
==========================================================================

                              OFFSET MAIN

==========================================================================
\*======================================================================*/

(function($){
	function auto_offset() {
		if ( $('#header').css('position') == 'fixed' ) {
			$('#main').css('marginTop', $('#header').height());
		}
	}
	auto_offset();
	
	$(window).on('resize.offsetmain', function(){
		setTimeout(function(){
			auto_offset();
		}, 200);
	});
})(jQuery);