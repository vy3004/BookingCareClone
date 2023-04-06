import React, { Component } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dt from "../../../assets/images/outstanding_doctor/dt1.png";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-container">
        <div className="section-content">
          <div className="content-title">
            <div className="title-text">Bác sĩ nổi bật tuần qua</div>
            <button className="btn-more">XEM THÊM</button>
          </div>
          <div className="content-slider">
            <Slider {...this.props.settings}>
              <div className="slider-child slider-child-doctor">
                <div className="child-doctor">
                  <div
                    className="img-child img-child-doctor"
                    style={{
                      backgroundImage: `url(${dt})`,
                    }}
                  ></div>
                  <div className="text-child">Bác sĩ 1</div>
                  <div className="text-child1">Khoa 1</div>
                </div>
              </div>
              <div className="slider-child slider-child-doctor">
                <div className="child-doctor">
                  <div
                    className="img-child img-child-doctor"
                    style={{
                      backgroundImage: `url(${dt})`,
                    }}
                  ></div>
                  <div className="text-child">Bác sĩ 2</div>
                  <div className="text-child1">Khoa 2</div>
                </div>
              </div>
              <div className="slider-child slider-child-doctor">
                <div className="child-doctor">
                  <div
                    className="img-child img-child-doctor"
                    style={{
                      backgroundImage: `url(${dt})`,
                    }}
                  ></div>
                  <div className="text-child">Bác sĩ 3</div>
                  <div className="text-child1">Khoa 3</div>
                </div>
              </div>
              <div className="slider-child slider-child-doctor">
                <div className="child-doctor">
                  <div
                    className="img-child img-child-doctor"
                    style={{
                      backgroundImage: `url(${dt})`,
                    }}
                  ></div>
                  <div className="text-child">Bác sĩ 4</div>
                  <div className="text-child1">Khoa 4</div>
                </div>
              </div>
              <div className="slider-child slider-child-doctor">
                <div className="child-doctor">
                  <div
                    className="img-child img-child-doctor"
                    style={{
                      backgroundImage: `url(${dt})`,
                    }}
                  ></div>
                  <div className="text-child">Bác sĩ 5</div>
                  <div className="text-child1">Khoa 5</div>
                </div>
              </div>
              <div className="slider-child slider-child-doctor">
                <div className="child-doctor">
                  <div
                    className="img-child img-child-doctor"
                    style={{
                      backgroundImage: `url(${dt})`,
                    }}
                  ></div>
                  <div className="text-child">Bác sĩ 6</div>
                  <div className="text-child1">Khoa 6</div>
                </div>
              </div>
              <div className="slider-child slider-child-doctor">
                <div className="child-doctor">
                  <div
                    className="img-child img-child-doctor"
                    style={{
                      backgroundImage: `url(${dt})`,
                    }}
                  ></div>
                  <div className="text-child">Bác sĩ 7</div>
                  <div className="text-child1">Khoa 7</div>
                </div>
              </div>
              <div className="slider-child slider-child-doctor">
                <div className="child-doctor">
                  <div
                    className="img-child img-child-doctor"
                    style={{
                      backgroundImage: `url(${dt})`,
                    }}
                  ></div>
                  <div className="text-child">Bác sĩ 8</div>
                  <div className="text-child1">Khoa 8</div>
                </div>
              </div>
              <div className="slider-child slider-child-doctor">
                <div className="child-doctor">
                  <div
                    className="img-child img-child-doctor"
                    style={{
                      backgroundImage: `url(${dt})`,
                    }}
                  ></div>
                  <div className="text-child">Bác sĩ 9</div>
                  <div className="text-child1">Khoa 9</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
