import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mdc from "../../../assets/images/medical_facility/mdc2.png";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-container section-container1">
        <div className="section-content">
          <div className="content-title">
            <div className="title-text">Cơ sở y tế nổi bật</div>
            <button className="btn-more">XEM THÊM</button>
          </div>
          <div className="content-slider">
            <Slider {...this.props.settings}>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${mdc})`,
                  }}
                ></div>
                <div className="text-child">
                  Phòng khám Đa khoa Quốc tế Golden Healthcare 1
                </div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${mdc})`,
                  }}
                ></div>
                <div className="text-child">
                  Phòng khám Đa khoa Quốc tế Golden Healthcare 2
                </div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${mdc})`,
                  }}
                ></div>
                <div className="text-child">
                  Phòng khám Đa khoa Quốc tế Golden Healthcare 3
                </div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${mdc})`,
                  }}
                ></div>
                <div className="text-child">
                  Phòng khám Đa khoa Quốc tế Golden Healthcare
                </div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${mdc})`,
                  }}
                ></div>
                <div className="text-child">
                  Phòng khám Đa khoa Quốc tế Golden Healthcare 4
                </div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${mdc})`,
                  }}
                ></div>
                <div className="text-child">
                  Phòng khám Đa khoa Quốc tế Golden Healthcare 5
                </div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${mdc})`,
                  }}
                ></div>
                <div className="text-child">
                  Phòng khám Đa khoa Quốc tế Golden Healthcare 6
                </div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${mdc})`,
                  }}
                ></div>
                <div className="text-child">
                  Phòng khám Đa khoa Quốc tế Golden Healthcare 7
                </div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${mdc})`,
                  }}
                ></div>
                <div className="text-child">
                  Phòng khám Đa khoa Quốc tế Golden Healthcare 8
                </div>
              </div>
            </Slider>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
