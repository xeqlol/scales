import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "./index.css";

const themes = [
  "torquoise",
  "emerald",
  "peter-river",
  "carrot",
  "alizarin",
  "amethyst",
  "sun-flower"
];
document.body.classList.add(themes[Math.floor(Math.random() * themes.length)]);

ReactDOM.render(<App />, document.getElementById("root"));
