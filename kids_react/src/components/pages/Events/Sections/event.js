import React from 'react';
import { Link } from 'react-router-dom';

const EventSection = ({category} ) => {
    return (
        <section className="event_section section_padding">
            <div className="container custom_container">
 
    <div className="row justify-content-between" key={category.id}>
      <div className="col-lg-6">
        <div className="img_section">
          <img src={category.image} alt="#" className="about_img_6 img-fluid" style={{ width: '450px', height: '400px' }}/>
       
        </div>
      </div>
      <div className="col-lg-6">
        <div className="event_section_content">
          <h5 className="wow fadeInRight" data-wow-delay=".3s">
            Category
          </h5>
          <h2 className="wow fadeInRight kid_title" data-wow-delay=".4s">
            <span className="title_overlay_effect">{category.name}</span>
          </h2>
          <p className="wow fadeInRight" data-wow-delay=".5s" style={{  color: '#626472', fontSize: '18px' }}>
            {category.long_description}
          </p>

          <a className="pc-button elementor-button button-link cu_btn" href="about.html">
            <div className="button-content-wrapper">
            <Link style={{color:'white'}} to="/About">
  <span className="elementor-button-text">Learn More</span>
</Link>
              <svg className="pc-dashes inner-dashed-border animated-dashes">
                <rect x="5px" y="5px" rx="22px" ry="22px" width="0" height="0"></rect>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  
</div>

            <div className="about_page_animation_1">
                <div data-parallax='{"x": 2, "y": 70, "rotateZ":0}'>
                    <img src="../../../../img/icon/icon_7.png" alt="#" />
                </div>
            </div>
            <div className="about_page_animation_2">
                <div data-parallax='{"x": 10, "y": 80, "rotateZ":0}'>
                    <img src="../../../../img/icon/event_6.png" alt="#" />
                </div>
            </div>
            <div className="about_page_animation_3">
                <div data-parallax='{"x": 30, "y": 60, "rotateZ":0}'>
                    <img src="../../../../img/icon/banner_two_2.png" alt="#" />
                </div>
            </div>
            <div className="about_page_animation_4">
                <div data-parallax='{"x": 30, "y": -50, "rotateZ":0}'>
                    <img src="../../../../img/icon/team_animation.png" alt="#"  />
                </div>
            </div>
        </section>
    );
};

export default EventSection;
