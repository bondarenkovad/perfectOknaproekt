export class Accordion {
  constructor(options) {
    const defaultOptions = {
      multiplyActiveItems: false,
      wrapperCssSelector: "._js-accordion-faq",
      itemCssSelector: "._js-accordion-item",
      btnCssSelector: "._js-accordion-toggler",
      iconCssSelector: "._js-accordion-icon",
      bodyCssSelector: "._js-accordion-body",
    };
    this.options = { ...defaultOptions, ...options };
    this.activeItem = null;
    this.accordionEl = document.querySelector(this.options.wrapperCssSelector);
    if (this.accordionEl) {
      this.btns = this.accordionEl.querySelectorAll(this.options.btnCssSelector);
      this._init();
    }
  }
  _init = () => {
    Array.prototype.forEach.call(this.btns, (item) => {
      if (!this.options.multiplyActiveItems) {
        item.addEventListener("click", this._clickHandlerWhileSingleActiveElement);
      } else {
        item.addEventListener("click", this._clickHandlerWhileMultiplyActive);
      }
    });
  };
  _clickHandlerWhileSingleActiveElement = (e) => {
    if (this.activeItem) {
      if (
        !this.activeItem.isEqualNode(
          e.currentTarget.closest(this.options.itemCssSelector)
        )
      ) {
        this.activeItem.classList.remove("active");
        this.activeItem = e.currentTarget.closest(this.options.itemCssSelector);
        this.activeItem.classList.add("active");
      } else {
        this.activeItem.classList.remove("active");
        this.activeItem = null;
      }
    } else {
      this.activeItem = e.currentTarget.closest(this.options.itemCssSelector);
      this.activeItem.classList.add("active");
    }
  };
  _clickHandlerWhileMultiplyActive = (e) => {
    e.currentTarget.closest(this.options.itemCssSelector).classList.toggle("active");
  };
}
