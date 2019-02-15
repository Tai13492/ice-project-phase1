import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Open from "pages/open";
import OpenRedirect from "pages/open/Redirect";
import Lockers from "pages/lockers";
import ShareLockers from "pages/sharelockers";
import ReturnLockers from "pages/returnlockers";
import LockersInFaculty from "pages/lockers/LockersInFaculty";
import Locker from "pages/lockers/Locker";

const MainRouter = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/return-lockers" component={ReturnLockers} />
        <Route exact path="/share-lockers" component={ShareLockers} />
        <Route exact path="/lockers" component={Lockers} />
        <Route exact path="/lockers/:facultyId" component={LockersInFaculty} />
        <Route
          exact
          path="/lockers/:facultyId/:buildingId"
          component={Locker}
        />
        <Route exact path="/open-locker" component={Open} />
        <Route exact path="/open-locker-redirect" component={OpenRedirect} />
        <Route exact path="/" component={Lockers} />
      </Switch>
    </Router>
  </div>
);

export default MainRouter;
