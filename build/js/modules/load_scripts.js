/*======================================================================*\
==========================================================================

                              LOAD SCRIPTS

==========================================================================
\*======================================================================*/

var cssId = 'global-on-demand';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId)){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.rawgit.com/fluxinetwork/nc-partners-hive/master/app/css/main.css';
    link.media = 'all';
    head.appendChild(link);
}