$(document).ready(function(){
	new Splide( '#spide' ).mount();
	new Splide( '#spide', {
	type   : 'loop',
	perPage: 3,
	perMove: 1,
} ).mount();
})