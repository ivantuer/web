const getSelectedTextNode = window.getSelection;
const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const underBtn = document.getElementById("underline");
const color = document.getElementById("color");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");

color.addEventListener("change", (e) => {
  document.execCommand("foreColor", false, e.target.value);
});

console.log("init");

boldBtn.addEventListener("click", (e) => {
  document.execCommand("bold");
});

italicBtn.addEventListener("click", (e) => {
  document.execCommand("italic");
});

underBtn.addEventListener("click", (e) => {
  document.execCommand("styleWithCSS", false, true);
  document.execCommand("foreColor", false, "rgba(0,0,0,0.5)");
});

upperCase.addEventListener("click", (e) => {
  setsC("span", "upper");
});

lowerCase.addEventListener("click", () => {
  setsC("span", "lower");
});

function setsC(tag, className) {
  tags(tag, className);
}

function tags(tag, className) {
  var ele = document.createElement(tag);
  ele.classList.add(className);
  wrap(ele);
}

function wrap(tags) {
  var select = window.getSelection();
  if (select.rangeCount) {
    var range = select.getRangeAt(0).cloneRange();
    range.surroundContents(tags);
    select.removeAllRanges();
    select.addRange(range);
  }
}
