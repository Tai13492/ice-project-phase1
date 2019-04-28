import React from "react";
import { connect } from "react-redux";
import {
  setAuthentication,
  deleteTokenAndExpiration,
  setTokenAndExpiration
} from "../auth/ducks";
import Axios from "axios";
import { END_POINT } from "../index";

class Auth extends React.Component {
  state = {
    res: ""
  };
  async componentDidMount() {
    const { setAuthentication, setTokenAndExpiration } = this.props;
    initAxiosErrorHandling(deleteTokenAndExpiration);
    const idToken = localStorage.getItem("idToken");
    const expireIn = localStorage.getItem("expireIn");
    if (idToken) {
      try {
        const res = await Axios.post("/auth/myToken/line", {
          lineToken: idToken
        });
        if (res) {
          this.setState({ res });
          localStorage.setItem("token", res.data.token);
          setAuthentication(true);
          setTokenAndExpiration(idToken, expireIn);
          Axios.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.token;
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else {
      window.location.href = END_POINT + "/auth/lineLoginPage";
    }
  }
  render() {
    return <h1> Loading... {JSON.stringify(this.state.res)}</h1>;
  }
}

const mapStateToProps = state => ({
  isAuthenticate: state.authentication.isAuthenticate,
  idToken: state.authentication.idToken
});

const mapDispatchToProps = {
  setAuthentication,
  setTokenAndExpiration
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

const initAxiosErrorHandling = callback => {
  Axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status === 401) {
        console.log("eiei");
        callback();
        window.location.href = END_POINT + "/auth/lineLoginPage";
      }
      return error;
    }
  );
};
