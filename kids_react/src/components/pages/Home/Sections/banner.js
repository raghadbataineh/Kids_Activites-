import React from 'react';

const Banner = () => {
  return (
    <section className="banner_part home_two_banner">
      <div className="single_banner_part home_two_bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-8 col-md-7">
              <div className="banner_iner">
                <br></br>
                <h2>Imagination Will Begin Explore New Things</h2>
                <a href="about" className="cu_btn btn_2">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_animation_1">
          <div data-parallax='{"x": 20, "y": 200, "rotateZ": 0}'>
            <img src="img/icon/banner_two_1.png" alt="#" />
          </div>
        </div>
        <div className="banner_animation_2">
          <div data-parallax='{"x": 15, "y": 150, "rotateZ": 0}'>
            <img src="img/icon/banner_two_3.png" alt="#" />
          </div>
        </div>
        <div className="banner_animation_3">
          <div data-parallax='{"x": 0, "y": 200, "rotateZ": 0}'>
            <img src="img/icon/banner_two_2.png" alt="#" />
          </div>
        </div>
        <div className="banner_animation_4">
          <div data-parallax='{"x": 10, "y": 150, "rotateZ": 0}'>
            <img src="img/icon/banner_two_4.png" alt="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
