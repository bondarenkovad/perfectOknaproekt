import SimpleBar from "simplebar";

document.addEventListener("DOMContentLoaded", function (event) {

	const optionsTableWrappers = document.querySelectorAll('.fc-options__wrapper');

	if(optionsTableWrappers.length) {
		for(let i = 0; i < optionsTableWrappers.length; i++){
			new SimpleBar( optionsTableWrappers[i], {
				autoHide: false,
			});
		}
	}

});
