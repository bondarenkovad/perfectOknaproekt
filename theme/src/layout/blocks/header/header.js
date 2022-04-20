window.jQuery(function () {
	window.jQuery('.stellarnav').stellarNav({
		position: 'right',
		breakpoint: 991,
		sticky: true,
		closeLabel: 'Закрыть'
	});
	window.jQuery('.new-header__dropdown').on('click', function() {
		window.jQuery(this).toggleClass('open');
	});

	window.jQuery('.new-header__cities-list').mouseleave(function() {
		window.jQuery(this).parent('.new-header__dropdown').removeClass('open');
	});
});
