import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hb from "../../../assets/images/handbook/hb.jpg";

class HandBook extends Component {
  render() {
    return (
      <div className="section-container">
        <div className="section-content">
          <div className="content-title">
            <div className="title-text">Cẩm nang</div>
            <button className="btn-more">TẤT CẢ BÀI VIẾT</button>
          </div>
          <div className="content-slider">
            <Slider {...this.props.settings}>
              <div className="slider-child">
                <div className="child-handbook">
                  <div
                    className="img-child img-child-handbook"
                    style={{
                      backgroundImage: `url(${hb})`,
                    }}
                  ></div>
                  <div className="text-child text-child-handbook">
                    Rụng tóc nhiều vì sao, khi nào cần khám và khám ở đâu?
                  </div>
                </div>
              </div>
              <div className="slider-child">
                <div className="child-handbook">
                  <div
                    className="img-child img-child-handbook"
                    style={{
                      backgroundImage: `url(${hb})`,
                    }}
                  ></div>
                  <div className="text-child text-child-handbook">
                    Rụng tóc nhiều vì sao, khi nào cần khám và khám ở đâu?
                  </div>
                </div>
              </div>
              <div className="slider-child">
                <div className="child-handbook">
                  <div
                    className="img-child img-child-handbook"
                    style={{
                      backgroundImage: `url(${hb})`,
                    }}
                  ></div>
                  <div className="text-child text-child-handbook">
                    Rụng tóc nhiều vì sao, khi nào cần khám và khám ở đâu?
                  </div>
                </div>
              </div>
              <div className="slider-child">
                <div className="child-handbook">
                  <div
                    className="img-child img-child-handbook"
                    style={{
                      backgroundImage: `url(${hb})`,
                    }}
                  ></div>
                  <div className="text-child text-child-handbook">
                    Rụng tóc nhiều vì sao, khi nào cần khám và khám ở đâu?
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
