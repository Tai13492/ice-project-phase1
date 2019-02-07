import React, { Component } from "react";
import "./App.css";
import MainRouter from "./routes";
import { connect } from "react-redux";
import { initLiff } from "./reducers/liff";

class App extends Component {
  componentWillMount() {
    this.props.initLiff();
  }

  render() {
    return (
      <div className="App">
        <MainRouter />
      </div>
    );
  }
}

const mapDispatchToProps = {
  initLiff
};

export default connect(
  null,
  mapDispatchToProps
)(App);
