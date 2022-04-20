import { addSliderOnResize } from '../../common/heplers';
import SimpleBar from "simplebar";

window.jQuery(function() {

	window.jQuery(function () {
		window.jQuery('.mnogo-tabs__controls').on('click', 'li:not(.active)', function () {
			window.jQuery(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.mnogo-tabs').find('div.mnogo-tabs__item').removeClass('active')
				.eq(window.jQuery(this).index()).addClass('active').find('.slick-slider').slick('refresh');
		});
	});

	const $allHeads = window.jQuery('.mnogo-cordeon .mnogo-cordeon__head');
	const $allBody = window.jQuery('.mnogo-cordeon .mnogo-cordeon__body');

	$allHeads.on('click',function () {
		window.jQuery(this).toggleClass('open');
		$allBody .not(window.jQuery(this).children('.mnogo-cordeon__body')).slideUp(500);
		$allHeads.not(window.jQuery(this)).removeClass('open');
		window.jQuery(this).children('.mnogo-cordeon__body').slideToggle(500);
	});

	const $windoorsSlider = window.jQuery('.windoors__slider');
	$windoorsSlider.slick({
				arrows: true,
				slidesToShow: 6,
				slidesToScroll: 1,
				dots: false,
				prevArrow: '<button type="button" class="slider-arrow slick-prev">' +
					'<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M9.8261 3.34957C10.0214 3.54483 10.0214 3.86142 9.8261 4.05668L6.64412 7.23866C6.44886 7.43392 6.13228 7.43392 5.93701 7.23866C5.74175 7.0434 5.74175 6.72681 5.93701 6.53155L8.76544 3.70312L5.93701 0.874697C5.74175 0.679435 5.74175 0.362853 5.93701 0.167591C6.13228 -0.0276716 6.44886 -0.0276716 6.64412 0.167591L9.8261 3.34957ZM0.527344 3.20312L9.47255 3.20312L9.47255 4.20312L0.527344 4.20312L0.527344 3.20312Z" fill="white"/>\n' +
					'</svg>' +
					'</button>',
				nextArrow: '<button type="button" class="slider-arrow slick-next">' +
					'<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M9.8261 3.34957C10.0214 3.54483 10.0214 3.86142 9.8261 4.05668L6.64412 7.23866C6.44886 7.43392 6.13228 7.43392 5.93701 7.23866C5.74175 7.0434 5.74175 6.72681 5.93701 6.53155L8.76544 3.70312L5.93701 0.874697C5.74175 0.679435 5.74175 0.362853 5.93701 0.167591C6.13228 -0.0276716 6.44886 -0.0276716 6.64412 0.167591L9.8261 3.34957ZM0.527344 3.20312L9.47255 3.20312L9.47255 4.20312L0.527344 4.20312L0.527344 3.20312Z" fill="white"/>\n' +
					'</svg>' +
					'</button>',
				responsive: [
					{
					breakpoint: 991,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
					{
						breakpoint: 640,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 360,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]
			});

	const simpleWrappers = document.querySelectorAll('.windoors .simple-wrapper');

	if(simpleWrappers.length) {
		for (let i = 0; i < simpleWrappers.length; i++) {
			new SimpleBar( simpleWrappers[i], {
				autoHide: false,
			});
		}
	}

	const $colorsSlider = window.jQuery('.colors__container');

	if($colorsSlider.length){

		addSliderOnResize($colorsSlider,
				{
					slidesToShow: 6,
					infinite: false,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '<button type="button" class="slider-arrow slick-prev">' +
						'<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
						'<path d="M9.8261 3.34957C10.0214 3.54483 10.0214 3.86142 9.8261 4.05668L6.64412 7.23866C6.44886 7.43392 6.13228 7.43392 5.93701 7.23866C5.74175 7.0434 5.74175 6.72681 5.93701 6.53155L8.76544 3.70312L5.93701 0.874697C5.74175 0.679435 5.74175 0.362853 5.93701 0.167591C6.13228 -0.0276716 6.44886 -0.0276716 6.64412 0.167591L9.8261 3.34957ZM0.527344 3.20312L9.47255 3.20312L9.47255 4.20312L0.527344 4.20312L0.527344 3.20312Z" fill="white"/>\n' +
						'</svg>' +
						'</button>',
					nextArrow: '<button type="button" class="slider-arrow slick-next">' +
						'<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
						'<path d="M9.8261 3.34957C10.0214 3.54483 10.0214 3.86142 9.8261 4.05668L6.64412 7.23866C6.44886 7.43392 6.13228 7.43392 5.93701 7.23866C5.74175 7.0434 5.74175 6.72681 5.93701 6.53155L8.76544 3.70312L5.93701 0.874697C5.74175 0.679435 5.74175 0.362853 5.93701 0.167591C6.13228 -0.0276716 6.44886 -0.0276716 6.64412 0.167591L9.8261 3.34957ZM0.527344 3.20312L9.47255 3.20312L9.47255 4.20312L0.527344 4.20312L0.527344 3.20312Z" fill="white"/>\n' +
						'</svg>' +
						'</button>',
					responsive: [
						{
							breakpoint: 640,
							settings: {
								slidesToShow: 4
							}
						}
					]
				},
				991);
	}

	const $cardSlider = window.jQuery('.windoors__container');

	if($cardSlider.length){

		addSliderOnResize($cardSlider,
			{
				slidesToShow: 2,
				infinite: false,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: '<button type="button" class="slider-arrow slick-prev">' +
					'<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M9.8261 3.34957C10.0214 3.54483 10.0214 3.86142 9.8261 4.05668L6.64412 7.23866C6.44886 7.43392 6.13228 7.43392 5.93701 7.23866C5.74175 7.0434 5.74175 6.72681 5.93701 6.53155L8.76544 3.70312L5.93701 0.874697C5.74175 0.679435 5.74175 0.362853 5.93701 0.167591C6.13228 -0.0276716 6.44886 -0.0276716 6.64412 0.167591L9.8261 3.34957ZM0.527344 3.20312L9.47255 3.20312L9.47255 4.20312L0.527344 4.20312L0.527344 3.20312Z" fill="white"/>\n' +
					'</svg>' +
					'</button>',
				nextArrow: '<button type="button" class="slider-arrow slick-next">' +
					'<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M9.8261 3.34957C10.0214 3.54483 10.0214 3.86142 9.8261 4.05668L6.64412 7.23866C6.44886 7.43392 6.13228 7.43392 5.93701 7.23866C5.74175 7.0434 5.74175 6.72681 5.93701 6.53155L8.76544 3.70312L5.93701 0.874697C5.74175 0.679435 5.74175 0.362853 5.93701 0.167591C6.13228 -0.0276716 6.44886 -0.0276716 6.64412 0.167591L9.8261 3.34957ZM0.527344 3.20312L9.47255 3.20312L9.47255 4.20312L0.527344 4.20312L0.527344 3.20312Z" fill="white"/>\n' +
					'</svg>' +
					'</button>',
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1
						}
					}
				]
			},
			768);
	}

	const $vOpenSlider = window.jQuery('.v-open__container');

	if($vOpenSlider.length){

		addSliderOnResize($vOpenSlider,
			{
				slidesToShow: 4,
				infinite: false,
				slidesToScroll: 1,
				variableWidth: true,
				arrows: true,
				prevArrow: '<button type="button" class="slider-arrow slick-prev">' +
					'<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M9.8261 3.34957C10.0214 3.54483 10.0214 3.86142 9.8261 4.05668L6.64412 7.23866C6.44886 7.43392 6.13228 7.43392 5.93701 7.23866C5.74175 7.0434 5.74175 6.72681 5.93701 6.53155L8.76544 3.70312L5.93701 0.874697C5.74175 0.679435 5.74175 0.362853 5.93701 0.167591C6.13228 -0.0276716 6.44886 -0.0276716 6.64412 0.167591L9.8261 3.34957ZM0.527344 3.20312L9.47255 3.20312L9.47255 4.20312L0.527344 4.20312L0.527344 3.20312Z" fill="white"/>\n' +
					'</svg>' +
					'</button>',
				nextArrow: '<button type="button" class="slider-arrow slick-next">' +
					'<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M9.8261 3.34957C10.0214 3.54483 10.0214 3.86142 9.8261 4.05668L6.64412 7.23866C6.44886 7.43392 6.13228 7.43392 5.93701 7.23866C5.74175 7.0434 5.74175 6.72681 5.93701 6.53155L8.76544 3.70312L5.93701 0.874697C5.74175 0.679435 5.74175 0.362853 5.93701 0.167591C6.13228 -0.0276716 6.44886 -0.0276716 6.64412 0.167591L9.8261 3.34957ZM0.527344 3.20312L9.47255 3.20312L9.47255 4.20312L0.527344 4.20312L0.527344 3.20312Z" fill="white"/>\n' +
					'</svg>' +
					'</button>',
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							variableWidth: false,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 580,
						settings: {
							slidesToShow: 2,
							variableWidth: false,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 420,
						settings: {
							slidesToShow: 1,
							variableWidth: false,
							slidesToScroll: 1,
						}
					}
				]
			},
			991);
	}

	const $dGlazeOpenSlider = window.jQuery('.double-g__container');

	if($dGlazeOpenSlider.length){

		addSliderOnResize($dGlazeOpenSlider,
			{
				slidesToShow: 1,
				infinite: false,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: '<button type="button" class="slider-arrow slick-prev">' +
					'<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M9.8261 3.34957C10.0214 3.54483 10.0214 3.86142 9.8261 4.05668L6.64412 7.23866C6.44886 7.43392 6.13228 7.43392 5.93701 7.23866C5.74175 7.0434 5.74175 6.72681 5.93701 6.53155L8.76544 3.70312L5.93701 0.874697C5.74175 0.679435 5.74175 0.362853 5.93701 0.167591C6.13228 -0.0276716 6.44886 -0.0276716 6.64412 0.167591L9.8261 3.34957ZM0.527344 3.20312L9.47255 3.20312L9.47255 4.20312L0.527344 4.20312L0.527344 3.20312Z" fill="white"/>\n' +
					'</svg>' +
					'</button>',
				nextArrow: '<button type="button" class="slider-arrow slick-next">' +
					'<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
					'<path d="M9.8261 3.34957C10.0214 3.54483 10.0214 3.86142 9.8261 4.05668L6.64412 7.23866C6.44886 7.43392 6.13228 7.43392 5.93701 7.23866C5.74175 7.0434 5.74175 6.72681 5.93701 6.53155L8.76544 3.70312L5.93701 0.874697C5.74175 0.679435 5.74175 0.362853 5.93701 0.167591C6.13228 -0.0276716 6.44886 -0.0276716 6.64412 0.167591L9.8261 3.34957ZM0.527344 3.20312L9.47255 3.20312L9.47255 4.20312L0.527344 4.20312L0.527344 3.20312Z" fill="white"/>\n' +
					'</svg>' +
					'</button>'
			},
			991);
	}

});
