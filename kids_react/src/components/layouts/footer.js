import React from 'react';

const Footer = () => {
  return (
    <footer className="footer_section home_two_footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-sm-6 wow fadeInDown" data-wow-delay=".3s">
            <div className="single_footer_widget">
              <a href="index.html" className="footer_logo">
                <img src="img/logo.png" alt="#" />
              </a>
              <p>
                Lorem ipsum dolor sit consectetur sicing elit, sed do eitempor
                idunt ut labor omagn aliqua sed do.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 wow fadeInDown" data-wow-delay=".5s">
            <div className="single_footer_widget footer_nav">
              <h4>Class</h4>
              <ul>
                <li>
                  <a href="#">Master Mind</a>
                </li>
                <li>
                  <a href="#">Junior Lambs</a>
                </li>
                <li>
                  <a href="#">Happy Kiddo</a>
                </li>
                <li>
                  <a href="#">Master Mind</a>
                </li>
                <li>
                  <a href="#">Junior Lambs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 wow fadeInDown" data-wow-delay=".5s">
            <div className="single_footer_widget footer_nav">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Classes</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInDown" data-wow-delay=".9s">
            <div className="single_footer_widget instagram_feed">
              <h4>Newsletter</h4>
              <p>
                Lorem ipsum dolor sit consectetur sicing elit, sed do eitempor
                idunt ut labor elit, sed do omagn aliqua
              </p>
              <form action="#">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="ti-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bg">
        <img src="https://images-ext-1.discordapp.net/external/4FDDfbcP4hr_cHsaupTLJLM-SWrYGgTBQdO_9UoFUX0/https/html.droitlab.com/kidzo/img/footer_bg.png?width=1440&height=406" alt="#" className="img-fluid" />
      </div>
      <div className="footer_animation_3">
        <div data-parallax='{"x": 30, "y": 70, "rotateZ":0}'>
          <img src="https://images-ext-1.discordapp.net/external/32l94shO4VaigxF4QarMX9cxPHXSMspiyXtvGb-W-xQ/https/html.droitlab.com/kidzo/img/footer_img.png?width=532&height=378" alt="#" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
