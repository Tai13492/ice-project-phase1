import React, { Component } from "react";
import "./App.css";
import MainRouter from "./routes";
// import { connect } from "react-redux";
import { initLiff } from "./reducers/liff";

class App extends Component {
  componentWillMount() {
    initLiff();
  }

  render() {
    return (
      <div className="App">
        <MainRouter />
      </div>
    );
  }
}

export default App;

// const mapDispatchToProps = {
//   initLiff
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(App);
