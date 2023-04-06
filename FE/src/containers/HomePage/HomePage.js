import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomePage.scss";
import HomeHeader from "./HomeHeader/HomeHeader";
import Specialty from "./Section/Specialty";
import MedicalFacility from "./Section/MedicalFacility";
import OutStandingDoctor from "./Section/OutStandingDoctor";
import HandBook from "./Section/HandBook";
import About from "./Section/About";
import HomeFooter from "./HomeFooter/HomeFooter";

class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    let handBookSettings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 2,
      slidesToScroll: 2,
    };

    return (
      <div>
        <HomeHeader />
        <Specialty settings={settings} />
        <OutStandingDoctor settings={settings} />
        <MedicalFacility settings={settings} />
        <HandBook settings={handBookSettings} />
        <About />
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
