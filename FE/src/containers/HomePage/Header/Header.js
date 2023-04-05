import React, { Component } from "react";
import { connect } from "react-redux";
import "../Header/Header.scss";
import op1 from "../../../assets/images/op1.png";
import op2 from "../../../assets/images/op2.png";
import op3 from "../../../assets/images/op3.png";
import op4 from "../../../assets/images/op4.png";
import op5 from "../../../assets/images/op5.png";
import op6 from "../../../assets/images/op6.png";
import op7 from "../../../assets/images/op7.jpg";
import op8 from "../../../assets/images/op8.png";
import op9 from "../../../assets/images/op9.jpg";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils/constant";
import { changeLanguageApp } from "../../../store/actions";

class Header extends Component {
  changeLanguage = (language) => {
    // fire redux event: actions
    this.props.changeLanguageAppRedux(language);
  };

  render() {
    let language = this.props.language;

    return (
      <div>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <button>
                <i className="fas fa-bars"></i>
              </button>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.specialty" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.search-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.medical-facilities" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.choose-clinic-hospital" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.doctor" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.choose-good-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.examination-package" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.general-physical-examination" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <button>
                  <i className="fas fa-question-circle"></i>{" "}
                  <FormattedMessage id="home-header.support" />
                </button>
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="home-header-banner">
          <div className="banner-top">
            <div className="title1">
              <FormattedMessage id="home-banner.medical-foundation" />
            </div>
            <div className="title2">
              <FormattedMessage id="home-banner.holistic-health-care" />
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder=".........." />
            </div>
          </div>
          <div className="banner-bottom">
            <div className="option">
              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${op1})`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="home-banner.specialist-examination" />
                </div>
              </div>
              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${op2})`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="home-banner.remote-examination" />
                </div>
              </div>
              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${op3})`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="home-banner.general-examination" />
                </div>
              </div>
              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${op4})`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="home-banner.medical-test" />
                </div>
              </div>
              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${op5})`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="home-banner.mental-health" />
                </div>
              </div>
              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${op6})`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="home-banner.dental-examination" />
                </div>
              </div>
              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${op7})`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="home-banner.surgical-package" />
                </div>
              </div>
              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${op8})`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="home-banner.medical-product" />
                </div>
              </div>
              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${op9})`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="home-banner.corporate-health" />
                </div>
              </div>
            </div>
          </div>
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
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
