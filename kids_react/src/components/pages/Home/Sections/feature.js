import React from 'react';

const FeaturesPart = () => {
  return (
    <section className="features_new_area section_padding">
      
      <img className="f_shap_bg" src="img/home6/features_bg_shap.png" alt="" />
      <div className="container">
        <div className="section_tittle_style_02 new_style mb-1">
          <h2 className="title wow fadeInDown" data-wow-delay=".3s">
            Discover Our <span className="title_overlay_effect is_show">Features</span>
          </h2>
          <p className="description wow fadeInDown" data-wow-delay=".3s">
            KidZone mission is to provide affordable, high-quality 
            <br />
            services for your kids.
          </p>
        </div>
        <div className="row justify-content-center">
          
          <div className="col-lg-3 col-md-3 text-center">
            <div className="features_new_item">
              <img src="img/home6/school.png" alt="" />
                <h4>Daycare Sections</h4>
              
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="features_new_item">
              <img src="img/home6/playground.png" alt="" />
                <h4>Playground Zones</h4>
              
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="features_new_item">
              <img src="img/home6/fruit.png" alt="" />
                <h4>Healthy Foods</h4>
              
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="features_new_item">
              <img src="img/home6/medal.png" alt="" />
                <h4>Cultural Activities</h4>
              
            </div>
          </div>
          
          <div className="col-lg-3 col-md-3 text-center">
            <div className="features_new_item">
              <img src="img/home6/teacher.png" alt="" />
                <h4>Expert Teachers</h4>
              
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="features_new_item">
              <img src="img/home6/paint.png" alt="" />
                <h4>Arts & Crafts</h4>
              
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default FeaturesPart;
