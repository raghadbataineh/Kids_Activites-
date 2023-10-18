import React from 'react';

const CounterSection = () => {
  return (
    <section className="count_section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 col-6 wow fadeInUp">
            <div className="single_count_section">
              <div className="single_count_icon">
                <img src="img/count/count_1.svg" alt="#" />
              </div>
              <h4>
                <span className="counter">205</span>
              </h4>
              <h5>Babysitters</h5>
            </div>
          </div>
          <div className="col-md-3 col-6 wow fadeInUp">
            <div className="single_count_section">
              <div className="single_count_icon">
                <img src="img/count/count_2.svg" alt="#" />
              </div>
              <h4>
                <span className="counter">120</span>
              </h4>
              <h5>Babysitters</h5>
            </div>
          </div>
          <div className="col-md-3 col-6 wow fadeInUp">
            <div className="single_count_section">
              <div className="single_count_icon">
                <img src="img/count/count_3.svg" alt="#" />
              </div>
              <h4>
                <span className="counter">350</span>
              </h4>
              <h5>Babysitters</h5>
            </div>
          </div>
          <div className="col-md-3 col-6 wow fadeInUp">
            <div className="single_count_section">
              <div className="single_count_icon">
                <img src="img/count/count_4.png" alt="#" />
              </div>
              <h4>
                <span className="counter">450</span>
              </h4>
              <h5>Happy Kids</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="count_animation_1">
        <div data-parallax='{"x": 2, "y": 120, "rotateZ":0}'>
          <img src="img/icon/feature_1.png" alt="#" />
        </div>
      </div>
      <div className="count_animation_2">
        <div data-parallax='{"x": 10, "y": 100, "rotateZ":0}'>
          <img src="img/icon/feature_2.png" alt="#" />
        </div>
      </div>
      <div className="count_animation_5">
        <div data-parallax='{"x": 8, "y": 110, "rotateZ":0}'>
          <img src="img/icon/feature_5.png" alt="#" />
        </div>
      </div>
      <div className="count_animation_6">
        <div data-parallax='{"x": 15, "y": 115, "rotateZ":0}'>
          <img src="img/icon/feature_6.png" alt="#" />
        </div>
      </div>
      <div className="count_animation_7">
        <div data-parallax='{"x": 6, "y": 108, "rotateZ":0}'>
          <img src="img/icon/feature_7.png" alt="#" />
        </div>
      </div>
      <div className="count_animation_8">
        <div data-parallax='{"x": 10, "y": 110, "rotateZ":0}'>
          <img src="img/icon/feature_8.png" alt="#" />
        </div>
      </div>
      <div className="count_animation_9">
        <div data-parallax='{"x": 10, "y": 110, "rotateZ":0}'>
          <img src="img/icon/feature_13.png" alt="#" />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
