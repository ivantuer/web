self.addEventListener("message", ({ data }) => {
  const countOfWords = data.split(" ").filter((a) => a.trim()).length;
  self.postMessage(countOfWords);
});
