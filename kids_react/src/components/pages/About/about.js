
import axios from 'axios';
import React, { useState, useEffect } from "react";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    sessionStorage.setItem('current', window.location.pathname);
  }, []);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {


    axios.get(`http://localhost:8000/api/orgnizers`).then(({ data }) => {
      setTeamMembers(data);
    });
  }, []);

  return (

    <div>
      <section className="breadcrumb_part parallax_bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="breadcrumb_iner">
                <h2>About Us</h2>
                <div className="breadcrumb_iner_link">
                  <a href="index.html">Home</a>
                  <span>|</span>
                  <p>About us</p>
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

      {/* About section part */}
      <section className="about_section section_padding s4_about_section">
        <div className="container custom_container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5 order-2 order-lg-1">
              <div className="about_section_content mt-5 mt-lg-0">
                <h5 className="kid_title wow fadeInLeft" data-wow-delay=".3s">Who We Are</h5>
                <h2 className="kid_title wow fadeInLeft" data-wow-delay=".4s">
                  <span className="title_overlay_effect">We Create New</span>
                </h2>
                <p className="wow fadeInLeft" data-wow-delay=".5s">
                KidZone your go-to destination for organizing and discovering exciting and educational events for kids of all ages.
                  KidZone mission is to provide affordable, high-quality
                  services for your kids. 
                </p>
                <div className="list_content">
                  <ul>
                    <li className="wow fadeInLeft" data-wow-delay=".5s">
                      <i className="far fa-check-circle"></i> Best entertainment and educational events
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".5s">
                      <i className="far fa-check-circle"></i> Indoor/Outdoor Games for Little Kids
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".6s">
                      <i className="far fa-check-circle"></i> Professional & Qualified Organizer
                    </li>
                
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="img_section">
                <img
                  src="img/about_img_shape_2.png"
                  alt="#"
                  className="about_img_7"
                  data-parallax='{"x": 0, "y": -50, "rotateZ": 0}'
                />
                <img src="https://html.droitlab.com/kidzo/img/about_img_7.png" alt="#" className="about_img_6 img-fluid" />
                <img
                  src="img/about_img_shape_1.png"
                  alt="#"
                  className="about_img_5"
                  data-parallax='{"x": 0, "y": 50, "rotateZ": 0}'
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about_page_animation_1">
          <div data-parallax='{"x": 2, "y": 70, "rotateZ":0}'><img src="../../../../img/icon/icon_5.png" alt="#" /></div>
        </div>
        <div className="about_page_animation_2">
          <div data-parallax='{"x": 10, "y": 80, "rotateZ":0}'><img src="../../../../img/icon/icon_6.png" alt="#" /></div>
        </div>
        <div className="about_page_animation_3">
          <div data-parallax='{"x": 30, "y": 60, "rotateZ":0}'><img src="../../../../img/icon/icon_7.png" alt="#" /></div>
        </div>
        <div className="about_page_animation_4">
          <div data-parallax='{"x": 30, "y": -50, "rotateZ":0}'><img src="../../../../img/icon/icon_8.png" alt="#" /></div>
        </div>
      </section>

      {/* Get start part */}
      <section className="get_start_part section_padding section_bg">
        <div className="container custom_container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".2s">
              <div className="video_section">
                <img src="https://html.droitlab.com/kidzo/img/video_section_bg.png" alt="#" className="img-fluid" />
                <a href="https://www.youtube.com/watch?v=oiHulAQmdqI" className="video_popup">
                  <span className="polygon_shape"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
              <div className="get_start_content mt-5 mt-lg-0">
                <h2 className="kid_title">
                  <span className="title_overlay_effect">With Efficiency to More Opportunities</span>
                </h2>
                <p>
                  Why I say old chap that is spiffing bodge, blag pardon me mufty Oxford butty bubble and squeak wind
                  up, brown bread the full monty bloke ruddy cras tickety-boo squiffy.
                </p>
                <p>
                  Why I say old chap that is spiffing bodge, blag pardon me mufty Oxford butty bubble and squeak wind
                  up, brown bread the full monty bloke ruddy cras tickety-boo squiffy.
                </p>
                <a href="#" className="get_start_btn">
                  Get Started Now! <i className="ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="get_start_animation_1">
          <div data-parallax='{"x": 2, "y": 120, "rotateZ":0}'><img src="../../../../img/icon/feature_1.png" alt="#" /></div>
        </div>
        <div className="get_start_animation_3">
          <div data-parallax='{"x": 30, "y": 110, "rotateZ":0}'><img src="../../../../img/icon/feature_3.png" alt="#" /></div>
        </div>
        <div className="get_start_animation_6">
          <div data-parallax='{"x": 15, "y": 115, "rotateZ":0}'><img src="../../../../img/icon/feature_6.png" alt="#" /></div>
        </div>
        <div className="get_start_animation_9">
          <div data-parallax='{"x": 20, "y": 120, "rotateZ":0}'><img src="../../../../img/icon/feature_13.png" alt="#" /></div>
        </div>
        <div className="get_start_animation_11">
          <div data-parallax='{"x": 15, "y": 115, "rotateZ":0}'><img src="../../../../img/icon/feature_12.png" alt="#" /></div>
        </div>
        <div className="get_start_animation_12">
          <div data-parallax='{"x": 20, "y": 40, "rotateZ":0}'><img src="../../../../img/icon/feature_7.png" alt="#" /></div>
        </div>
      </section>

      {/* Team part */}
      <section className="team_section single_page_team section_padding">
        <div className="container">
          <h2 className="kid_title">
            <span className="title_overlay_effect">Meet Our Team</span>
          </h2>
          <div className="row">
            {/* Repeat the above block for other team members */}
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single_team_section">
                  <a
                    href={`teacher?id=${member.id}`}
                    className="d-block teacher_profile_img"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid"
                    />
                  </a>
                  <a href="/teacher" className="teacher_category">
                    {member.role}
                  </a>
                  {/* <h4>
                                    <a href={`teacherd?id=${member.id}`}>
                                        {member.name}
                                    </a>
                                </h4> */}
                  <h4>
                    {member.name}
                  </h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="team_animation_1">
          <div data-parallax='{"x": 2, "y": 120, "rotateZ": 0}'>
            <img src="img/icon/story_animation_1.png" alt="#" />
          </div>
        </div>
        <div className="team_animation_2">
          <div data-parallax='{"x": 10, "y": 100, "rotateZ": 0}'>
            <img src="img/icon/story_animation_2.png" alt="#" />
          </div>
        </div>
        <div className="team_animation_3">
          <div data-parallax='{"x": 30, "y": 110, "rotateZ": 0}'>
            <img src="img/icon/story_animation_3.png" alt="#" />
          </div>
        </div>
        <div className="team_animation_4">
          <div data-parallax='{"x": 5, "y": 105, "rotateZ": 0}'>
            <img src="img/icon/team_animation.png" alt="#" />
          </div>
        </div>
        <div className="team_animation_5">
          <div data-parallax='{"x": 8, "y": 110, "rotateZ": 0}'>
            <img src="img/icon/story_animation_5.png" alt="#" />
          </div>
        </div>
      </section>
    </div>

  );
};

export default About;