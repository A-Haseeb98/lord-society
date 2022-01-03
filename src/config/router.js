import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import RafflePage from "../pages/minting";
import MintPage from "../pages/raffle";
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RafflePage} />
        <Route exact path="/mint" component={MintPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
