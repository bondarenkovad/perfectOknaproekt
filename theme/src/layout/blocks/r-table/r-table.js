import SimpleBar from "simplebar";

document.addEventListener("DOMContentLoaded", function (event) {

	const rTableWrapper = document.querySelector('.r-table__wrapper');

	if(rTableWrapper !== null) {
		new SimpleBar( rTableWrapper, {
			autoHide: false,
		});
	}

});
