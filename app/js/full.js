!function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var d=document.head||document.getElementsByTagName("head")[0],e=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",f=document.createElement("div");f.innerHTML='<p>x</p><style id="fit-vids-style">'+e+"</style>",d.appendChild(f.childNodes[1])}return b&&a.extend(c,b),this.each(function(){var b=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];c.customSelector&&b.push(c.customSelector);var d=".fitvidsignore";c.ignore&&(d=d+", "+c.ignore);var e=a(this).find(b.join(","));e=e.not("object object"),e=e.not(d),e.each(function(){var b=a(this);if(!(b.parents(d).length>0||"embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){b.css("height")||b.css("width")||!isNaN(b.attr("height"))&&!isNaN(b.attr("width"))||(b.attr("height",9),b.attr("width",16));var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),e=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),f=c/e;if(!b.attr("name")){var g="fitvid"+a.fn.fitVids._count;b.attr("name",g),a.fn.fitVids._count++}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*f+"%"),b.removeAttr("height").removeAttr("width")}})})},a.fn.fitVids._count=0}(window.jQuery||window.Zepto);
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
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
