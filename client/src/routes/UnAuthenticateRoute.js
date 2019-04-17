import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UnAuthenticateRoute = ({
  component: Component,
  isAuthenticate,
  initialURL,
  ...rest
}) => {
  let path = initialURL;
  if (initialURL === null) {
    path = "";
  }
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticate) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/" + path} />;
        }
      }}
    />
  );
};
const mapStateToProps = state => ({
  isAuthenticate: state.authentication.isAuthenticate,
  initialURL: state.liff.initialURL
});

export default connect(mapStateToProps)(UnAuthenticateRoute);
