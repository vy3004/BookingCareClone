import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";
import { handleLogin } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errMessage: "",
    };
  }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await handleLogin(this.state.username, this.state.password);
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
      } else {
        this.setState({
          errMessage: data.errMessage,
        });
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.errMessage,
          });
        }
      }
    }
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="login-logo"></div>
            <div className="login-text col-12">Login</div>
            <div className="login-input col-12 form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUsername(event)}
              />
            </div>
            <div className="login-input col-12 form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={(event) => this.handleOnChangePassword(event)}
              />
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12">
              <button
                className="login-btn"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12 text-center mb-5">
              <span>Forgot your password?</span>
            </div>
            <div className="col-12 text-center">
              <span>Or Login with:</span>
            </div>
            <div className="login-social col-12">
              <i class="fab fa-facebook-f facebook"></i>
              <i class="fab fa-google-plus-g google"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
    // userLoginFail: () => dispatch(actions.userLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
