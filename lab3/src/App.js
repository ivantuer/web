import React, { useEffect, useState } from "react";
import { Controls } from "./components/Controls";
import { Field } from "./components/Field";

const worker = new Worker("./wordCounter.js");

function App() {
  const [wordsCount, setWordsCount] = useState(0);
  useEffect(() => {
    worker.addEventListener("message", (event) => setWordsCount(event.data));
    worker.postMessage(document.getElementById("field").innerText);
  }, []);

  const getCountOfWords = (e) => {
    worker.postMessage(e.target.innerText);
  };

  return (
    <div className="App">
      <Controls />
      <Field handleChange={getCountOfWords} />
      Words count: {wordsCount}
    </div>
  );
}

export default App;
