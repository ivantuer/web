class WYSIWYGModel {
  italic() {
    document.execCommand("italic");
  }

  bold() {
    document.execCommand("bold");
  }

  underscore() {
    document.execCommand("underline");
  }

  color(e) {
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("foreColor", false, e.target.value);
  }

  case() {
    let sel, range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0);
        let textToReplace = `${range.cloneContents().textContent}`;
        if (textToReplace === textToReplace.toUpperCase()) {
          textToReplace = textToReplace.toLowerCase();
        } else {
          textToReplace = textToReplace.toUpperCase();
        }
        range.deleteContents();
        range.insertNode(document.createTextNode(textToReplace));
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      let textToReplace = range.cloneContents();
      if (textToReplace === textToReplace.toUpperCase()) {
        textToReplace = textToReplace.toLowerCase();
      } else {
        textToReplace = textToReplace.toUpperCase();
      }
      range.text = textToReplace;
    }
  }
}

export default new WYSIWYGModel();
