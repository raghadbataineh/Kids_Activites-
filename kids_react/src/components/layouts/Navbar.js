import React from 'react';

const Navbar = () => {
  return (
    <header className="header_part">
      <div className="sub_header section_bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="header_contact_info">
                <a href="mailto:shahadat.dev@gmail.com" target="_blank">
                  <i className="fas fa-envelope"></i>kidzo@gmail.com
                </a>
                <a href="tel:+4641468425">
                  <i className="fas fa-phone"></i>+978 254 658 784
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-4">
              <div className="header_social_icon">
                <p>Follow Us:</p>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img src="img/logo.png" srcSet="img/ratina_logo.png 2x" alt="Kidzo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarContent"
                  aria-controls="navbarContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="index.html">
                          Home 1
                        </a>
                        <a className="dropdown-item" href="index_2.html">
                          Home 2
                        </a>
                        <a className="dropdown-item" href="index_3.html">
                          Home 3
                        </a>
                        <a className="dropdown-item" href="index_4.html">
                          Home 4
                        </a>
                        <a className="dropdown-item" href="index_5.html">
                          Home 5
                        </a>
                        <a className="dropdown-item" href="index_6.html">
                          Home 6
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="event.html">
                          Event
                        </a>
                        <a className="dropdown-item" href="event_details.html">
                          Event Details
                        </a>
                        <a className="dropdown-item" href="teacher_list.html">
                          Teacher
                        </a>
                        <a className="dropdown-item" href="teacher_details.html">
                          Teacher Details
                        </a>
                        <a className="dropdown-item" href="program_list.html">
                          Program
                        </a>
                        <a className="dropdown-item" href="program_details.html">
                          Program Details
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="blog.html">
                          Blog
                        </a>
                        <a className="dropdown-item" href="blog_single.html">
                          Blog Single
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <a href="contact.html" className="cu_btn btn_1">
                    Get Started
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
