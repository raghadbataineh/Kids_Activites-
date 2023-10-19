import React from 'react';

function CtaPart() {
  return (
    <section className="cta_part section_padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="cta_part_iner">
              <h2>Enrollment Is Going On</h2>
              <p>Gain access to over 1000 Premium resources</p>
              <a href="#" className="cu_btn white_bg font-weight-bold">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb_animation_1">
        <div data-parallax='{"x": 30, "y": -20}'>
          <img src="../../../../img/cta_img_1.png" alt="#" />
        </div>
      </div>
      <div className="breadcrumb_animation_2">
        <div data-parallax='{"x": 20, "y": -100}'>
          <img src="../../../../img/cta_img_2.png" alt="#" />
        </div>
      </div>
    </section>
  );
}

export default CtaPart;
