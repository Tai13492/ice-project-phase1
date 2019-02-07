import React, { Component } from "react";
import "./App.css";
// import MainRouter from "./routes";
import { connect } from "react-redux";
import { initLiff } from "./reducers/liff";

const liff = window.liff;

class App extends Component {
  state = {
    data: null,
    displayName: "John Doe",
    userId: "007",
    pictureUrl: "eiei",
    statusMessage: "Do not mess up with John Doe"
  };
  componentDidMount() {
    window.addEventListener("load", this.initialize);
  }
  initialize = () => {
    liff.init(async data => {
      let profile = await liff.getProfile();
      this.setState({
        data: data,
        displayName: profile.displayName,
        userId: profile.userId,
        pictureUrl: profile.pictureUrl,
        statusMessage: profile.statusMessage
      });
    });
  };

  render() {
    const { data, displayName, userId, pictureUrl, statusMessage } = this.state;
    return (
      <div className="App">
        <h1> {JSON.stringify(data)}</h1>
        <h1> {displayName} </h1>
        <h1> {userId} </h1>
        <h1> {pictureUrl} </h1>
        <h1> {statusMessage} </h1>
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
