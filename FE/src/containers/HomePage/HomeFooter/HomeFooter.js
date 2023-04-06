import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeFooter.scss";

class HomeFooter extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <p>
            &copy; 2023 BookingCare cloned by Trần Nguyễn Kha Vỹ. More
            information please{" "}
            <a
              href="https://github.com/vy3004/BookingCareClone"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
