import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Deposit from "pages/deposit";
import DepositRedirect from "pages/deposit/Redirect";
import Lockers from "pages/lockers";
import ShareLockers from "pages/sharelockers";
import ReturnLockers from "pages/returnlockers";

const MainRouter = () => (
  <div>
    <h1> eiei </h1>
    <Router>
      <Switch>
        <Route exact path="/return-lockers" component={ReturnLockers} />
        <Route exact path="/share-lockers" component={ShareLockers} />
        <Route exact path="/lockers" component={Lockers} />
        <Route exact path="/deposit" component={Deposit} />
        <Route exact path="/" component={DepositRedirect} />
      </Switch>
    </Router>
  </div>
);

export default MainRouter;
