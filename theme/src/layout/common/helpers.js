export function  addSliderOnResize($element, $config, $media) {
		var advantagesSlider = window.jQuery($element).slick($config);
		window.matchMedia('(max-width:' + $media + 'px )').matches ? advantagesSlider.slick('init')  : advantagesSlider.slick('destroy');

		var reInitializeSlider = function reInitializeSlider() {
			window.matchMedia('(max-width:'+ $media + 'px )').matches ? advantagesSlider.slick('init') : advantagesSlider.slick('destroy');
		};

		var timerId = null;
		window.addEventListener('resize', function () {
			clearTimeout(timerId);
			timerId = setTimeout(reInitializeSlider, 1000);
		});
}

export function addChooseFilename($nodeInput, $text) {
	/*get input file name*/
	// var inputFile = document.querySelector('#input_file-upload');
	let inputFile = document.querySelector($nodeInput);
	// let textSelector = document.querySelector('.input_text');
	let textSelector = document.querySelector($text);
	if( inputFile != null && textSelector != null ){
		inputFile.addEventListener('change', function (e) {
			textSelector.textContent = inputFile.value;
		});
	}
}
