import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Rnd
        style={style}
        dragGrid={[20, 20]}
        resizeGrid={[20, 20]}
        default={{
          x: 0,
          y: 220,
          width: 320,
          height: 200
        }}
      >
        Rnd
      </Rnd>
      <Rnd
        style={style}
        dragGrid={[20, 20]}
        resizeGrid={[20, 20]}
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 200
        }}
      >
        Rnd
      </Rnd>
    </div>
  );
}

export default App;
