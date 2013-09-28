var PageTransitions = (function() {
var $main = $( '#pt-main' ),
$pages = $main.children( 'article.pt-page' ),
animcursor = 1,
pagesCount = $pages.length,
current = 0,
isAnimating = false,
endCurrPage = false,
endNextPage = false,
animEndEventNames = {
'WebkitAnimation' : 'webkitAnimationEnd',
'OAnimation' : 'oAnimationEnd',
'msAnimation' : 'MSAnimationEnd',
'animation' : 'animationend'
},
// animation end event name
animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
// support css animations
support = Modernizr.cssanimations;
$pages.each( function() {
var $page = $( this );
$page.data( 'originalClassList', $page.attr( 'class' ) );
} );
$pages.eq( current ).addClass( 'pt-page-current' );
})();

// ————————————————————————————– //
// VARIABLES
// ————————————————————————————– //
var $main = $( '#pt-main' ),
$pages = $main.children( 'article.pt-page' ),
$iterate = $( '.page-transition' ), // <– ID for my button
pagesCount = $pages.length,
current = 0,
isAnimating = false,
endCurrPage = false,
endNextPage = false,
animEndEventNames = {
'WebkitAnimation' : 'webkitAnimationEnd',
'OAnimation' : 'oAnimationEnd',
'msAnimation' : 'MSAnimationEnd',
'animation' : 'animationend'
},
// animation end event name
animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
// support css animations
support = Modernizr.cssanimations;
function onEndAnimation( $outpage, $inpage ) {
endCurrPage = false;
endNextPage = false;
resetPage( $outpage, $inpage );
isAnimating = false;
}
function resetPage( $outpage, $inpage ) {
$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
}