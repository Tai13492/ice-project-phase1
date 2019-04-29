import React from "react";
import { connect } from "react-redux";
import { liffHelper } from "../../App";
import { Redirect as ReactRedirect } from "react-router-dom";

const Redirect = ({ liffData }) => {
  if (liffData === null) return <ReactRedirect to="/open-locker" />;
  else {
    liffHelper.openExternal(
      "https://ice-project-liff.herokuapp.com/open-locker",
      true
    );
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2979ff",
          width: "100vw",
          height: "100vh"
        }}
      >
        <div class="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  liffData: state.liff.data
});

export default connect(mapStateToProps)(Redirect);
