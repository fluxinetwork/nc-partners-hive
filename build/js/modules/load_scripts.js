/*======================================================================*\
==========================================================================

                              LOAD SCRIPTS

==========================================================================
\*======================================================================*/
/*
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
<script>
  WebFont.load({
    google: {
      families: ['Fjalla One']
    }
  });
  
var cssId = 'global-on-demand';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId)){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.rawgit.com/fluxinetwork/nc-partners-hive/2d687796/app/css/main.css';
    link.media = 'all';
    head.appendChild(link);
}

$( document ).ready(function() {
    $('.homepage-network__container .visuallyhidden--palm').removeClass('visuallyhidden--palm');
    
    $('.js-read-more').on('click', function(e){
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).hide();
    });
});

</script>*/