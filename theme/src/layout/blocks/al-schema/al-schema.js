import { addSliderOnResize } from '../../common/heplers';

document.addEventListener("DOMContentLoaded", function (event) {


	const schemaSlider = document.querySelector('.al-schema__container');

	if(schemaSlider != null) {

		deleteSlide(991, '._js-hide-show');

		addSliderOnResize(schemaSlider ,
			{
				slidesToShow: 4,
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
						breakpoint: 768,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 640,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1
						}
					}
				]
			},
			991);
	}

	function deleteSlide($media, $element) {
		const node = document.querySelector($element);
		const parent = document.querySelector('.al-schema__container');
		const outerHtml = node.outerHTML;

		if (window.matchMedia('(max-width:' + $media + 'px )').matches) {
			if(document.querySelector($element)) {
				node.remove();
			}
		}

		const reInitializeSlider = function reInitializeSlider() {
			//console.log(document.querySelector($element));
			if (window.matchMedia('(max-width:' + $media + 'px )').matches) {
				if(document.querySelector($element)) {
					node.remove();
				}
			} else {
				//setTimeout(insertItem, 500);
			}
		};

		const insertItem = function insertItem () {
			parent.insertAdjacentHTML('beforeend', outerHtml);
		};

		let timerId = null;
		window.addEventListener('resize', function () {
			clearTimeout(timerId);
			timerId = setTimeout(reInitializeSlider, 1000);
		});
	}

});
