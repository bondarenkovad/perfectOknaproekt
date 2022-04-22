export class Modal {
	constructor(options) {
		const defaultOptions = {
			modalTriggerCssSelector: "._js-popup",
			modalWindowCssSelector: ".modal",
			modalLayerCssSelector: ".modal__layer",
			modalCloseBtnCssSelector: ".modal__close",
			activeCssClass: "_active",
		};
		this.options = Object.assign(defaultOptions, options);
		this.triggerBtn = document.querySelectorAll(
			this.options.modalTriggerCssSelector
		);
		this.modalWindow = document.querySelectorAll(
			this.options.modalWindowCssSelector
		);
		this.closeModal = this.closeModal.bind(this);
	}
	init() {
		for (let index = 0; index < this.triggerBtn.length; index++) {
			const element = this.triggerBtn[index];
			element.addEventListener("click", (e) => {
				this.openModal(element, e);
			});
		}
		for (let index = 0; index < this.modalWindow.length; index++) {
			const modalWindowElement = this.modalWindow[index];
			const currentModalLayer = modalWindowElement.querySelector(
				this.options.modalLayerCssSelector
			);
			const currentCloseBtn = modalWindowElement.querySelectorAll(
				this.options.modalCloseBtnCssSelector
			);
			for (let index = 0; index < currentCloseBtn.length; index++) {
				const element = currentCloseBtn[index];
				element.addEventListener("click", (e) => {
					this.closeModal(modalWindowElement, e);
				});
			}
			currentModalLayer.addEventListener("click", (e) => {
				this.closeModal(modalWindowElement, e);
			});
		}
	}
	openModal(element, event) {
		event.preventDefault();
		const modalLink = element.getAttribute("data-trigger-modal");
		document.body.style.cssText = "overflow:hidden;";
		for (let index = 0; index < this.modalWindow.length; index++) {
			const modalWindowElement = this.modalWindow[index];
			if (modalLink === modalWindowElement.getAttribute("data-modal")) {
				modalWindowElement.classList.add(this.options.activeCssClass);

				break;
			}
		}
	}
	closeModal(modalWindowElement, event) {
		event && event.preventDefault();
		modalWindowElement.classList.remove(this.options.activeCssClass);
		document.body.style.cssText = "";
	}
	closeCurrentModal(modalWindowElementUnicSelector) {
		const modal = document.querySelector(modalWindowElementUnicSelector);
		modal.classList.remove(this.options.activeCssClass);
		document.body.style.cssText = "";
	}
	openCurrentModal(modalWindowElement) {
		modalWindowElement.classList.add(this.options.activeCssClass);
		document.body.style.cssText = "overflow:hidden;";
	}
}
