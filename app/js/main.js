/*======================================================================*\
==========================================================================

                                 JS CONFIG

==========================================================================
\*======================================================================*/

var isHome = false;

var siteURL = window.location.href;

if ( siteURL.indexOf('localhost') > -1 ) {

    siteURL = 'http://localhost:8888/projet/'; // THIBAUT

} else if ( siteURL.indexOf('projet:8888') > -1 ) {

    siteURL = 'http://projet:8888'; // YANN

} else {

    siteURL = 'https://projet.org'; // EN LIGNE

}





/*======================================================================*\
==========================================================================

                                 JS LOAD

==========================================================================
\*======================================================================*/


jQuery(window).on('load', function() {

});


/*======================================================================*\
==========================================================================

                                 JS READY

==========================================================================
\*======================================================================*/

var FOO = {
    common: {
        init: function() {            
        }
    },
    home: {
        init: function() {
            isHome = true;
        }
    }
    
};

var UTIL = {
    fire: function(func, funcname, args) {
        var namespace = FOO;
        funcname = (funcname === undefined) ? 'init' : funcname;
        if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
          namespace[func][funcname](args);
        }
    },
    loadEvents: function() {
        UTIL.fire('common');
        jQuery.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
          UTIL.fire(classnm);
        });
    }
};

jQuery(document).ready(UTIL.loadEvents);





/*======================================================================*\
==========================================================================

                             DEBOUNCER

==========================================================================
\*======================================================================*/

function debouncer( func , timeout ) {
    var timeoutID;
    var timeoutVAR;

    if (timeout) {
        timeoutVAR = timeout;
    } else {
        timeoutVAR = 200;
    }

    return function() {
        var scope = this , args = arguments;
        clearTimeout( timeoutID );
        timeoutID = setTimeout( function () {
            func.apply( scope , Array.prototype.slice.call( args ) );
        }, timeoutVAR );
    };

}
/*======================================================================*\
==========================================================================

                       			FITVIDS

==========================================================================
\*======================================================================*/

(function($){
	$('.fitvids').fitVids();   
})(jQuery)
/*======================================================================*\
==========================================================================

                              JS FLEX WARNING

==========================================================================
\*======================================================================*/

/*
Add an overlay for browsers which doesn't support flexbox with links to update them
Flexbox support detection use Modernizr : https://modernizr.com/download?flexbox&q=flex
*/


if (!Modernizr.flexbox) {
	var ieLink = 'http://windows.microsoft.com/fr-fr/internet-explorer/download-ie';
	var edgeLink = 'https://www.microsoft.com/fr-fr/windows/microsoft-edge';
	var ffLink = 'https://www.mozilla.org/fr/firefox/new/';
	var gcLink = 'https://www.google.com/chrome/browser/desktop/index.html'
	var cliqzLink = 'https://cliqz.com/fr/download';
	var operaLink = 'http://www.opera.com/fr/computer';

	var typo = 'font-family:Helvetica,Tahoma,Arial!important;';
	var h3Style = 'style="color:#F44336;margin-top:32px;background-color:#fff;display:inline-block;padding:8px 16px;border-radius:3px;'+typo+'"';
	var ulStyles = 'style="list-style:none;padding-left:16px;margin-top:24px;"';
	var liStyle = 'style="display:inline-block;margin-right:24px;"';
	var linkStyle = 'style="font-weight:700;color:#fff;text-decoration:none;display:inline-block;'+typo+'"';
	var buttonStyle = 'style="position:absolute;bottom:0;left:0;background-color:#000;padding:16px 80px 16px 80px;width:100%;color:#fff;text-align:left;'+typo+'"';
	var displayIcon = 'display:inline-block';

	var dom = '<div style="position:fixed;left:0;top:0;z-index:100000;width:100%;height:100%;background-color:#F44336;padding:64px;" class="flexwarning">';

	dom += '<h1 style="color:#fff;'+typo+'">Votre navigateur est obsolète,<br> la mise en page du site risque d\'être endommagée.</h1>';
	dom += '<h2 style="color:#fff;margin-top:40px;'+typo+'">Nous vous conseillons de le mettre à jour !</h2>';

	dom += '<h3 '+h3Style+'"><i class="fas fa-windows" style="margin-right:8px;'+displayIcon+'"></i><i class="fas fa-apple" style="margin-right:16px;'+displayIcon+'"></i>Navigateurs multi-plateformes</h3>';
	dom += '<ul '+ulStyles+'>';
	dom += '<li '+liStyle+'><a href="'+ffLink+'" '+linkStyle+'"><i class="fas fa-firefox" style="margin-right:8px;'+displayIcon+'"></i>Firefox</a></li>';
	dom += '<li '+liStyle+'><a href="'+gcLink+'" '+linkStyle+'"><i class="fas fa-chrome" style="margin-right:8px;'+displayIcon+'"></i>Chrome</a></li>';
	dom += '<li '+liStyle+'><a href="'+operaLink+'" '+linkStyle+'"><i class="fas fa-opera" style="margin-right:8px;'+displayIcon+'"></i>Opera</a></li>';
	dom += '</ul>';

	dom += '<h3 '+h3Style+'"><i class="fas fa-windows" style="margin-right:16px;'+displayIcon+'"></i>Navigateurs pour Windows</h3>';
	dom += '<ul '+ulStyles+'>';
	dom += '<li '+liStyle+'><a href="'+ieLink+'" '+linkStyle+'"><i class="fas fa-internet-explorer" style="margin-right:8px;'+displayIcon+'"></i>Internet Explorer</a></li>';
	dom += '<li '+liStyle+'><a href="'+edgeLink+'" '+linkStyle+'"><i class="fas fa-edge" style="margin-right:8px;'+displayIcon+'"></i>Edge pour Windows 10</a></li>';
	dom += '</ul>';

	dom += '<h3 '+h3Style+'">À découvrir</h3>';
	dom += '<ul '+ulStyles+'>';
	dom += '<li '+liStyle+'><a href="'+cliqzLink+'" '+linkStyle+'"><i class="fas fa-shield" style="margin-right:8px;'+displayIcon+'"></i>Cliqz, le navigateur qui respecte la vie privée</a></li>';
	dom += '</ul>';

	dom += '<button '+buttonStyle+' class="js-close-warning"><i class="fas fa-times-circle" style="color:#fff;margin-right:8px;'+displayIcon+'"></i>Fermer cet avertissement (on vous aura prévenu...)</button>';

	dom += '</div>';

	$('body').append(dom);

	if(!$('html').is('[class*="fa-events"]')) {
		$('.flexwarning .fa').css('display','none');
	}

	$('.js-close-warning').on('click', function(){
		$('.flexwarning').remove();
	})
}


/*======================================================================*\
==========================================================================

                              CONSOLE LOG

==========================================================================
\*======================================================================*/

var log = function(message) {
	console.log(message);
}
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

/*======================================================================*\
==========================================================================

                              JS TOOL SCROLL TO

==========================================================================
\*======================================================================*/

jQuery('.js-scroll-to').click(function(e){
	e.preventDefault();
	id = jQuery(jQuery(this).attr('href'));
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
		position = position.offset().top - jQuery('#header').height()*2;
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

	if ( jQuery('.js-site-header').attr('data-scrollTo') == "fixed" ) {
		position += jQuery('.js-site-header').height();
	}

	jQuery('html, body').animate({scrollTop: position}, duration);
}

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
