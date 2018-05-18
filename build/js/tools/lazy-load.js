(function($){
    jQuery('.js-lazy-load').waypoint(function() {

        jQuery(this.element).removeClass('js-lazy-load');

        if ( !jQuery(this.element).hasClass('is-loaded') ) {

            jQuery(this.element).addClass('is-loaded');

            if ( jQuery(this.element).attr('data-src') ) {

                var src = jQuery(this.element).attr('data-src');
                jQuery(this.element).attr('src', src).removeAttr('data-src');

            } else if ( jQuery(this.element).attr( 'data-bg' ) ) {

                var src = jQuery(this.element).attr('data-bg');
                jQuery(this.element).css( 'background-image', "url("+src+")" ).removeAttr( 'data-bg' );

            }

        }
        
    }, {offset: '200%'});
})(jQuery);
 