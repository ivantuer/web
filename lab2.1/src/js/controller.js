import WYSIWYGModel from "./model";

class WYSIWYGController {
  constructor() {
    this.WYSIWYGModel = WYSIWYGModel;
  }

  toggleItalic(e) {
    WYSIWYGModel.italic(e);
  }

  toggleBold(e) {
    WYSIWYGModel.bold(e);
  }

  toggleUnderScore(e) {
    console.log(e);
    WYSIWYGModel.underscore(e);
  }

  changeColor(e) {
    WYSIWYGModel.color(e);
  }

  toggleCase(e) {
    WYSIWYGModel.case(e);
  }
}

export default new WYSIWYGController();
