import React from "react";
import logo from "./logo.svg";
import {Switch, Route, Redirect} from "react-router-dom";
// import routes from "./routes";
import Home from "./pages/Home";
import StickyFooter from "./components/StickyFooter";
import "./App.css";
const Default = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>補助金のまとめ</p>
      </header>
      <main>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          {/* Not Found */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </main>
      <footer style={styles.footer}>
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
    height: 200,
  },
  footer: {
    height: 100,
    background: "#ddd",
  },
};
