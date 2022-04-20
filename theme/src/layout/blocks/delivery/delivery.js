import SimpleBar from "simplebar";

document.addEventListener("DOMContentLoaded", function (event) {

	const deliveryTableWrappers = document.querySelectorAll('.delivery__wrapper');

	if(deliveryTableWrappers.length) {
		for (let i = 0; i < deliveryTableWrappers.length; i++) {
			new SimpleBar( deliveryTableWrappers[i], {
				autoHide: false,
			});
		}
	}
});
