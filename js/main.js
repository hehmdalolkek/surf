$(function () {

	$('.menu-btn, .menu a').on('click', function(){
		$('.menu').toggleClass('menu--active')
	});

	$(".menu a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.blog__slider').slick({
		arrows: false,
		dots: true,
	});

	var mixer = mixitup('.gallery__content');

});