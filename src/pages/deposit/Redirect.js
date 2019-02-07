import React from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { openWindow } from "../../reducers/liff";

const Redirect = ({ liffData }) => {
  console.log(liffData, "liffData");
  if (liffData === null) return <div> This should be redirect page lmao</div>;
  return openWindow(window.location.href + "/deposit", true);
};

const mapStateToProps = state => ({
  liffData: state.liff.data
});

export default connect(mapStateToProps)(Redirect);
