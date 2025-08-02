import React, { Component } from "react";
import { createRoot } from "react-dom/client";

export default class App extends Component {
  render() {
    return <h1>Hi this is react</h1>;
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
