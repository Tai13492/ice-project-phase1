import React, { Component } from "react";
import "./App.css";
import MainRouter from "./routes";
import { connect } from "react-redux";
import { setLiff, setLiffFunction } from "./reducers/liff";

const liff = window.liff;

class App extends Component {
  // state = {
  //   data: null,
  //   displayName: "John Doe",
  //   userId: "007",
  //   pictureUrl: "eiei",
  //   statusMessage: "Do not mess up with John Doe"
  // };
  componentDidMount() {
    window.addEventListener("load", this.initialize);
  }
  initialize = () => {
    liff.init(data => {
      // let profile = await liff.getProfile();
      this.props.setLiff(data);
      this.props.setLiffFunction(
        liff.openWindow({
          url: "https://ice-project-liff.herokuapp.com/deposit",
          external: true
        })
      );
      // this.setState({
      //   data: data,
      //   displayName: profile.displayName,
      //   userId: profile.userId,
      //   pictureUrl: profile.pictureUrl,
      //   statusMessage: profile.statusMessage
      // });
    });
  };

  render() {
    // const { data, displayName, userId, pictureUrl, statusMessage } = this.state;
    return (
      <div className="App">
        <MainRouter />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setLiff,
  setLiffFunction
};

export default connect(
  null,
  mapDispatchToProps
)(App);
