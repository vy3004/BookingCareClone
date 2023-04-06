import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ck1 from "../../../assets/images/specialty/ck1.jpg";

class Specialty extends Component {
  render() {
    return (
      <div className="section-container section-container1">
        <div className="section-content">
          <div className="content-title">
            <div className="title-text">Chuyên khoa phổ biến</div>
            <button className="btn-more">XEM THÊM</button>
          </div>
          <div className="content-slider">
            <Slider {...this.props.settings}>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${ck1})`,
                  }}
                ></div>
                <div className="text-child">Cơ xương khớp1</div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${ck1})`,
                  }}
                ></div>
                <div className="text-child">Cơ xương khớp2</div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${ck1})`,
                  }}
                ></div>
                <div className="text-child">Cơ xương khớp3</div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${ck1})`,
                  }}
                ></div>
                <div className="text-child">Cơ xương khớp</div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${ck1})`,
                  }}
                ></div>
                <div className="text-child">Cơ xương khớp4</div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${ck1})`,
                  }}
                ></div>
                <div className="text-child">Cơ xương khớp5</div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${ck1})`,
                  }}
                ></div>
                <div className="text-child">Cơ xương khớp6</div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${ck1})`,
                  }}
                ></div>
                <div className="text-child">Cơ xương khớp7</div>
              </div>
              <div className="slider-child">
                <div
                  className="img-child"
                  style={{
                    backgroundImage: `url(${ck1})`,
                  }}
                ></div>
                <div className="text-child">Cơ xương khớp8</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
