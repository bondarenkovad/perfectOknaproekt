import SimpleBar from "simplebar";

document.addEventListener("DOMContentLoaded", function (event) {

	const scheduleTableWrapper = document.querySelector('.del-schedule__wrapper');

	if(scheduleTableWrapper != null) {
		new SimpleBar( scheduleTableWrapper, {
			autoHide: false,
		});
	}
});
