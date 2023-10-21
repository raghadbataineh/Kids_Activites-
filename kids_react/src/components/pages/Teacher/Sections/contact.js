

import React from 'react';

const CtaSection = () => {
  return (
    <section className="cta_section section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-sm-8 wow fadeInUp" data-wow-delay=".3s">
            <div className="cta_section_wrapper">
              <img src="img/cta_img.png" alt="#" className="img-fluid" />
              <h2>Enrollment Is Now Going On</h2>
              <p>
                The amazing way to let ypur kids engoy and learn in the same time , consectetur adipisicing elit, sed do eiusmod incididunt ut labore inventore Theamaolor sit amet, consectetur. The amazing way to olor
              </p>
              <a className="pc-button elementor-button button-link cu_btn" href="/">
                <div className="button-content-wrapper">
                  <span className="elementor-button-text"><a href="/" ></a>Discover Events</span>
                  <svg className="pc-dashes inner-dashed-border animated-dashes">
                    <rect x="5px" y="5px" rx="22px" ry="22px" width="0" height="0"></rect>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cta_animation_1">
        <div data-parallax='{"x": 2, "y": 120, "rotateZ":0}'><img src="img/icon/cta_1.png" alt="#" /></div>
      </div>
      <div className="cta_animation_2">
        <div data-parallax='{"x": 10, "y": 100, "rotateZ":0}'><img src="img/icon/event_7.png" alt="#" /></div>
      </div>
      <div className="cta_animation_3">
        <div data-parallax='{"x": 30, "y": 110, "rotateZ":0}'><img src="img/icon/cta_3.png" alt="#" /></div>
      </div>
      <div className="cta_animation_4">
        <div data-parallax='{"x": 5, "y": 105, "rotateZ":0}'><img src="img/icon/banner_two_3.png" alt="#" /></div>
      </div>
    </section>
  );
};

export default CtaSection;