import React from 'react';

const Gallery = () => {
  return (
 
    <section>
    <div className="container-fluid ">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="section_tittle_style_02">
                    <h2 className="title wow fadeInDown" data-wow-delay=".3s">
                        <div className="title_overlay_effect is_show">Our Gallery</div>
                    </h2>
                    <p className="description wow fadeInDown" data-wow-delay=".3s">We invite you to take a virtual tour of the incredible adventures, creativity, and excitement that children experience through our event activities.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
    <div className="row">
        <div className="col-md-3">
            <div class="image-container">
                <img src="https://as2.ftcdn.net/v2/jpg/01/88/29/95/1000_F_188299599_05Uw52NKeM0NdZxo3nwd1zvdDfOUmvgd.jpg" alt="#"   style={{
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  }}  />
            </div>
        </div>
        <div className="col-md-3">
            <div class="image-container">
                <img src="https://myfirst.tech/wp-content/uploads/2023/01/portrait-little-girl-doing-coloring-activity-with-rest-group-preschool-classroom-scaled-1-1024x683.jpg" alt="#"   style={{
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  }}  />
            </div>
        </div>
        <div className="col-md-3">
            <div class="image-container">
                <img src="https://www.morainevalley.edu/fitrec/wp-content/uploads/sites/6/2020/04/kids-cooking.jpg" alt="#"  style={{
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  }} />
            </div>
        </div>
     
        <div className="col-md-3">
            <div class="image-container">
                <img src="https://experiencelife.lifetime.life/wp-content/uploads/2021/03/Kids-Sports.jpg" alt="#"   style={{
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  }}  />
            </div>
        </div>
    </div>
</div>

</section>

    );
};

export default Gallery;