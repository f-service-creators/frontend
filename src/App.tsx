import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Default from "./Default";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Default} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
