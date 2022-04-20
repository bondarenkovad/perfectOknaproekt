import SimpleBar from "simplebar";

document.addEventListener("DOMContentLoaded", function (event) {

	const uniqueWrapper = document.querySelector('.unique__wrapper');

	if(uniqueWrapper !== null) {
		new SimpleBar( uniqueWrapper, {
			autoHide: false,
		});
	}

});
