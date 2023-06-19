$(document).ready(function() {

	var headerMobile = $('.header-mobile');

	$('.hamburger').on('click', function() {
		headerMobile.addClass('is-active');
	});
	$('.header-mobile-close').on('click', function() {
		headerMobile.removeClass('is-active');
	});

});