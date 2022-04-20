window.jQuery(function () {
	window.jQuery('.r-tabs__controls').on('click', 'li:not(.active)', function () {
		window.jQuery(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.r-tabs').find('div.r-tabs__item').removeClass('active')
			.eq(window.jQuery(this).index()).addClass('active')
			//.find('.slick-slider').slick('refresh');
	});


	const $charLinks = window.jQuery('.js-tooltip');

	$charLinks.on('click', function (e) {
		e.preventDefault();
		window.jQuery(this).find('.r-tooltip').toggleClass('show');
	});


	window.jQuery('.r-tooltip').mouseleave(function () {
		window.jQuery(this).removeClass('show');
	});
});
