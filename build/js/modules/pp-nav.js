/*======================================================================*\
==========================================================================

                       PRIORITY PATTERN MENU

==========================================================================
\*======================================================================*/

(function($){

	var timer,
		fixedW,
		menuW,
		availableSpace,
		drawerFirstLinkW = 0;

	function priority_pattern_menu() {
		clearTimeout(timer);
		
		fixedW = parseInt( $('.js-pp-container').css('paddingLeft') ) + parseInt( $('.js-pp-container').css('paddingRight') );
		$('.js-pp-calc, .js-pp-calc-noMgn').each(function() {
			if ( $(this).hasClass('js-pp-calc') ) {
				fixedW += $(this).outerWidth(true);
			} else {
				fixedW += $(this).width();
			}
		});

		availableSpace = (windowW - fixedW)*0.9
		menuW = $('.js-pp-nav').outerWidth(true);

		if ( menuW > availableSpace ) {

			var link = $('.js-pp-nav a:last-child');
			drawerFirstLinkW = link.outerWidth(true);
			link.prependTo('.js-pp-drawer');

			timer = setTimeout(function(){
				priority_pattern_menu();
			}, 100);

		} else if ( $('.js-pp-drawer a').length && ( menuW + drawerFirstLinkW ) < availableSpace ) {

			$('.js-pp-drawer a:first-child').appendTo('.js-pp-nav');
			drawerFirstLinkW = $('.js-pp-drawer a:first-child').outerWidth(true);

			if ( $('.js-pp-drawer a').length > 0 ) {
				timer = setTimeout(function(){
					priority_pattern_menu();
				}, 100);
			}

		}

		if ( $('.js-pp-drawer a').length > 0 ) {
			$('.js-toggle-pp-drawer').removeClass('is-none');
		} else {
			$('.js-toggle-pp-drawer').addClass('is-none').removeClass('switch-icon is-active');
			$('.js-pp-drawer').removeClass('is-open');
		}
	}

	priority_pattern_menu();

	$(window).on('resize.nav', debouncer(priority_pattern_menu));

	$('.js-toggle-pp-drawer').on('click', function() {
		$(this).toggleClass('switch-icon is-active');
		$('.js-pp-drawer').toggleClass('is-open');
		$('.js-search-form').removeClass('is-open');
		$('.js-main-toggle-search').removeClass('switch-icon is-active');
	})

})(jQuery);

