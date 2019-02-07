import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Deposit from "../pages/deposit";
import DepositRedirect from "../pages/deposit/Redirect";

const MainRouter = () => (
  <div>
    <h1> eiei </h1>
    <Router>
      <Switch>
        <Route exact path="/deposit" component={Deposit} />
        <Route exact path="/" component={DepositRedirect} />
      </Switch>
    </Router>
  </div>
);

export default MainRouter;
