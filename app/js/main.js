/*======================================================================*\
==========================================================================

                                 JS CONFIG

==========================================================================
\*======================================================================*/

var isHome = false;

var siteURL = window.location.href;

var css_main = 'https://raw.githubusercontent.com/fluxinetwork/nc-partners-hive/master/app/css/main.css';





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




