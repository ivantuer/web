import WYSIWYGController from "./controller";

class WYSIWYGView {
  constructor({
    italicBtn,
    boldBtn,
    underBtn,
    colorBtn,
    caseBtn,
    field,
    countSpan,
  }) {
    this.italicBtn = italicBtn;
    this.boldBtn = boldBtn;
    this.underBtn = underBtn;
    this.colorBtn = colorBtn;
    this.caseBtn = caseBtn;
    this.field = field;
    this.countSpan = countSpan;

    this.WordCountWorker = new Worker("./wordCountWorker.js");

    this.initAllListeners();
    this.WordCountWorker.postMessage(field.innerText);
  }

  triggerWordCount(e) {
    const text = e.target.innerText;
    this.WordCountWorker.postMessage(text);
  }

  renderWordCount({ data }) {
    this.countSpan.innerText = data;
  }

  initAllListeners() {
    this.italicBtn.addEventListener("click", WYSIWYGController.toggleItalic);
    this.boldBtn.addEventListener("click", WYSIWYGController.toggleBold);
    this.underBtn.addEventListener("click", WYSIWYGController.toggleUnderScore);
    this.colorBtn.addEventListener("change", WYSIWYGController.changeColor);
    this.caseBtn.addEventListener("click", WYSIWYGController.toggleCase);

    this.WordCountWorker.addEventListener(
      "message",
      this.renderWordCount.bind(this)
    );
    this.field.addEventListener("input", this.triggerWordCount.bind(this));
  }
}

export default WYSIWYGView;
