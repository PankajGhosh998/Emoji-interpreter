import React, { useState } from "react";
import "./App.css";

function App() {
  var [meaning, setMeaning] = useState("");

  var emojiDictionary = {
    "🙈" : "See-No-Evil Monkey",
    "🙉" : "Hear-No-Evil Monkey",
    "🙊" : "Speak-No-Evil Monkey",
    "💥" : "Collision",
    "💫" : "Dizzy",
    "💦" : "Sweat Droplets",
    "💨" : "Dashing Away",
    "🐵" : "Monkey Face",
    "🐒" : "Monkey",
    "🦍" : "Gorilla",
    "🦧" : "Orangutan",
    "🐶" : "Dog Face",
    "🐕" : "Dog",
    "🌹" : "Rose",
    "🥀" : "Wilted Flower",
    "🌺" : "Hibiscus",
    "🌻" : "Sunflower",
    "🌼" : "Blossom",
    "🌷" : "Tulip",
    "🌱" : "Seedling",
    "🌲" : "Evergreen Tree",
    "🌳" : "Deciduous Tree",
    "🌴" : "Palm Tree",
    "🌵" : "Cactus",
    "🌾" : "Sheaf of Rice",
    "🌿" : "Herb",
    "☘️" : "Shamrock",
    "🍀" : "Four Leaf Clover"
  };

  function inputChangeHandler(event) {
    var inputText = event.target.value;
    var meaning = emojiDictionary[inputText];
    setMeaning(meaning)
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Animals & Nature</h1>
      </header>
      <input className="input" onChange={inputChangeHandler}></input>
      <h2>{meaning}</h2>
    </div>
  );
}

export default App;
