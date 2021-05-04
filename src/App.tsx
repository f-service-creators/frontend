import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Subsidies from "./components/SubsidyList";
import StickyFooter from "./components/StickyFooter";
import SearchTextField from "./components/SearchTextField"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>補助金のまとめ</p>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <p>
        <SearchTextField />
      </p>
      <StickyFooter />
    </div>
  );
};

export default App;
