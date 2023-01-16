import React, { useState } from "react";
import "./App.css";

function App() {
  var [inputText, setInputText] = useState("");

  function inputChangeHandler(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inside out</h1>
      </header>
      <input className="input" onChange={inputChangeHandler}></input>
      Welcome {inputText}
    </div>
  );
}

export default App;
