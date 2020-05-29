import React, { useEffect, useState } from "react";
import { Controls } from "./components/Controls";
import { Field } from "./components/Field";
import { useApi } from "./api";

const worker = new Worker("./wordCounter.js");

function App() {
  const [wordsCount, setWordsCount] = useState(0);

  const api = useApi();
  useEffect(() => {
    (async () => {
      const text = await api.getText();
      console.log(text);
      document.getElementById("field").innerHTML = text;
    })();
    worker.addEventListener("message", (event) => setWordsCount(event.data));
    worker.postMessage(document.getElementById("field").innerText);
  }, []);

  const getCountOfWords = (e) => {
    worker.postMessage(e.target.innerText);
  };

  const handleSave = async () => {
    const text = document.getElementById("field").innerHTML;
    const response = await api.postText(text);
    console.log(response);
  };

  return (
    <div className="App">
      <Controls />
      <Field handleChange={getCountOfWords} />
      Words count: {wordsCount}
      <button onClick={handleSave}>save</button>
    </div>
  );
}

export default App;
