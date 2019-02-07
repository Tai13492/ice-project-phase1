import React from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";

const Redirect = ({ liffData, liffOpenWindow }) => {
  console.log(liffData, "liffData");
  if (liffData === null) return <div> This should be redirect page lmao</div>;
  return liffOpenWindow;
};

const mapStateToProps = state => ({
  liffData: state.liff.data,
  liffOpenWindow: state.liff.openWindow
});

export default connect(mapStateToProps)(Redirect);
