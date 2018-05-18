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




