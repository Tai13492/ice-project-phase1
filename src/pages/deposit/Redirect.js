import React from "react";
import { connect } from "react-redux";
import { liffHelper } from "../../App";
const Redirect = ({ liffData }) => {
  console.log(liffData, "liffData");
  if (liffData === null) return <div> This should be redirect page lmao</div>;
  else {
    liffHelper.openExternal(
      "https://ice-project-liff.herokuapp.com/deposit",
      true
    );
    return <h1> Eiei </h1>;
  }
};

const mapStateToProps = state => ({
  liffData: state.liff.data
});

export default connect(mapStateToProps)(Redirect);
