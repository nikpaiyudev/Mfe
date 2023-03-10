import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";
import Landing from "../components/Landing";
import Pricing from "../components/Pricing";

export default () => {
  return (
    <StylesProvider>
      <Router>
        <Switch>
          <Route exact path={"/pricing"} component={Pricing}></Route>
          <Route path={"/"} component={Landing}></Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
