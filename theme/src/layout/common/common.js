import "../blocks/header/header";
import "../blocks/main-slider/main-slider";
// import "../blocks/product-price/product-price";
// import "../blocks/windoors/windoors";
// import "../blocks/advantages/advantages";
// import "../blocks/specifications/specifications";
// import "../blocks/our-works/our-works";
// import "../blocks/p-rehau/p-rehau";
// import "../blocks/r-portfolio/r-portfolio";
// import "../blocks/r-prices/r-prices";
// import "../blocks/r-table/r-table";
// import "../blocks/r-design/r-design";
// import "../blocks/certificate/certificate";
// import "../blocks/fc-types/fc-types";
// import "../blocks/fc-systems/fc-systems";
// import "../blocks/fc-profiles/fc-profiles";
// import "../blocks/fc-options/fc-options";
// import "../blocks/fc-sphere/fc-sphere";
// import "../blocks/p-design/p-design";
// import "../blocks/delivery/delivery";
// import "../blocks/del-schedule/del-schedule";
// import "../blocks/unique/unique";
// import "../blocks/t-bridge/t-bridge";
// import "../blocks/ventilation/ventilation";
// import "../blocks/al-peculiarities/al-peculiarities";
// import "../blocks/al-compare/al-compare";
// import "../blocks/al-types/al-types";
// import "../blocks/al-minimum/al-minimum";
// import "../blocks/al-furniture/al-furniture";
// import "../blocks/al-schema/al-schema";
import { addChooseFilename } from './helpers';
import { Accordion } from "../blocks/faq/accordion";
import { Modal } from "../blocks/modal/modal";

document.addEventListener("DOMContentLoaded", function (event) {

	window.jQuery('.stellarnav').stellarNav({
		position: 'right',
		breakpoint: 990,
		sticky: true,
		closeLabel: 'Закрыть'
	});

	window.jQuery('input[type=tel]').inputmask("+7(999) 999-99-99");

	new Accordion();

	//--init modals
	const modal = new Modal();
	window.modal = modal;
	window.modal.init();

	addChooseFilename('#input_file-upload', '.form__file-text');

});

// window.jQuery(function() {
//
//
// 	// window.jQuery('.js-call-popup').magnificPopup({
// 	// 	type: 'inline',
// 	// 	mainClass: 'popup',
// 	// });
//
//
// });
