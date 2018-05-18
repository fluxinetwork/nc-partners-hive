/*======================================================================*\
==========================================================================

                              WINDOW SIZE

==========================================================================
\*======================================================================*/

var windowW,
	windowH;

(function($){

	function calc_window() {
	    windowW = jQuery(window).width();
	    windowH = jQuery(window).height();
	}

	calc_window();

	$( window ).on( "resize.calcwindow", debouncer(calc_window) );

})(jQuery);