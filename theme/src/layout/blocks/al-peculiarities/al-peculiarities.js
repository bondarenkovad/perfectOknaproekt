import SimpleBar from "simplebar";

document.addEventListener("DOMContentLoaded", function (event) {

	const textList = document.querySelector('.al-peculiarities__list');

	if(textList != null) {
		new SimpleBar( textList, {
			autoHide: false,
		});
	}

});
