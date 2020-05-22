import WYSIWYGView from "./js/view";

const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const underBtn = document.getElementById("underBtn");
const colorBtn = document.getElementById("colorBtn");
const caseBtn = document.getElementById("caseBtn");
const field = document.getElementById("field");
const countSpan = document.getElementById("countSpan");

const a = new WYSIWYGView({
  boldBtn,
  italicBtn,
  underBtn,
  colorBtn,
  caseBtn,
  field,
  countSpan,
});
