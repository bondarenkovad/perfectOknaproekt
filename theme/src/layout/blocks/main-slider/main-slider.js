document.addEventListener("DOMContentLoaded", function (event) {
	const mainSlider = document.querySelector('.main-slider__container');

	if( mainSlider != null ) {
		window.jQuery(mainSlider).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			prevArrow: '<button type="button" class="main-slider__arrow main-slider__prev">' +
				'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="558.957px" height="558.957px" viewBox="0 0 558.957 558.957" style="enable-background:new 0 0 558.957 558.957;" xml:space="preserve"> <g> <g> <polygon points="462.745,0 96.212,279.479 462.745,558.957 462.745,419.221 278.713,279.479 462.745,139.738 		"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g></g> </svg>' +
				'</button>',
			nextArrow: '<button type="button" class="main-slider__arrow main-slider__next">' +
				'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="558.957px" height="558.957px" viewBox="0 0 558.957 558.957" style="enable-background:new 0 0 558.957 558.957;" xml:space="preserve"> <g> <g> <polygon points="462.745,0 96.212,279.479 462.745,558.957 462.745,419.221 278.713,279.479 462.745,139.738 		"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g></g> </svg>' +
				'</button>',
			// responsive: [
			// 	{
			// 		breakpoint: 991,
			// 		settings: {
			// 			centerMode: true,
			// 			centerPadding: '15px',
			// 			slidesToShow: 3
			// 		}
			// 	},
			// 	{
			// 		breakpoint: 800,
			// 		settings: {
			// 			centerMode: true,
			// 			centerPadding: '10px',
			// 			slidesToShow: 2
			// 		}
			// 	},
			// 	{
			// 		breakpoint: 600,
			// 		settings: {
			// 			centerMode: true,
			// 			centerPadding: '10px',
			// 			slidesToShow: 3
			// 		}
			// 	},
			// 	{
			// 		breakpoint: 480,
			// 		settings: {
			// 			centerMode: true,
			// 			centerPadding: '15px',
			// 			slidesToShow: 2
			// 		}
			// 	},
			// ]
		});
	}
});
