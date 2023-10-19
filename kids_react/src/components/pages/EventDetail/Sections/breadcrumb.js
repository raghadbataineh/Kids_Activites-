import React from 'react';

const Breadcrumbs = () => {
  return (
    <section className="breadcrumb_part parallax_bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="breadcrumb_iner">
              <h2>Kids Drawing Event</h2>
              <div className="breadcrumb_iner_link">
                <a href="index.html">Home</a> {/* Update with your actual route */}
                <span>|</span>
                <p> Event Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb_animation_4">
        <div data-parallax='{"x": 30, "y": 250, "rotateZ": 0}'>
          <img src="../../../../img/icon/banner_icon/animated_banner_4.png" alt="#" />
        </div>
      </div>
      <div className="breadcrumb_animation_5">
        <div data-parallax='{"x": 20, "y": 150, "rotateZ": 180}'>
          <img src="../../../../img/icon/banner_icon/animated_banner_5.png" alt="#" />
        </div>
      </div>
      <div className="breadcrumb_animation_7">
        <div data-parallax='{"x": 100, "y": 250, "rotateZ": 0}'>
          <img src="../../../../img/icon/banner_icon/animated_banner_15.png" alt="#" />
        </div>
      </div>
      <div className="breadcrumb_animation_10">
        <div data-parallax='{"x": 15, "y": 150, "rotateZ": 0}'>
          <img src="../../../../img/icon/banner_icon/animated_banner_10.png" alt="#" />
        </div>
      </div>
      <div className="breadcrumb_animation_12">
        <div data-parallax='{"x": 20, "y": 150, "rotateZ": 180}'>
          <img src="../../../../img/icon/banner_icon/animated_banner_20.png" alt="#" />
        </div>
      </div>
      <div className="breadcrumb_animation_13">
        <div data-parallax='{"x": 10, "y": 250, "rotateZ": 180}'>
          <img src="../../../../img/icon/banner_icon/animated_banner_21.png" alt="#" />
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
