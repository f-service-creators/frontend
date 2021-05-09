import React from "react";
import logo from "./logo.svg";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
// import routes from "./routes";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import StickyFooter from "./components/StickyFooter";
import "./App.css";
const Default = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>補助金のまとめ</h1>
        <p>中小企業向けの補助金が探せる検索サイトです</p>
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/detail" component={Detail} />
            {/* Not Found */}
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </main>
      <footer>
        <StickyFooter />
      </footer>
    </div>
  );
};

export default Default;

const styles = {
  header: {
    height: 100,
    background: "#ddd",
  },
  main: {
    height: 500,
  },
  footer: {
    height: 100,
    background: "#ddd",
  },
};
