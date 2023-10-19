import React from 'react';

const Gallery = () => {
  return (
 
    <section className="our_gallery gallery_style_2">
    <div className="container-fluid no-gutters">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="section_tittle_style_02">
                    <h2 className="title wow fadeInDown" data-wow-delay=".3s">
                        <div className="title_overlay_effect is_show">Our Gallery</div>
                    </h2>
                    <p className="description wow fadeInDown" data-wow-delay=".3s">Kidzo mission is to provide
                        affordable, high-quality
                        early education and childcare services for working families to ensure every child.</p>
                </div>
            </div>
        </div>

        {/* <div className="row wow fadeInDown" data-wow-delay=".5s">
            <div className="col-lg-12 p-0">
                <div className="gallery_slider  gallery_popup_img">
                    <a href="../../../../img/gallery/one.png" className="grid-item bg_1">
                        <div className="grid_item_content">
                            <h3>Magic Prince Birthday Party</h3>
                            <p>Kids, Daycare, Kindergarten</p>
                        </div>
                    </a>
                    <a href="../../../../img/gallery/two.png" className="grid-item bg_2">
                        <div className="grid_item_content">
                            <h3>Magic Prince Birthday Party</h3>
                            <p>Kids, Daycare, Kindergarten</p>
                        </div>
                    </a>
                    <a href="../../../../img/gallery/three.png" className="grid-item bg_3">
                        <div className="grid_item_content">
                            <h3>Magic Prince Birthday Party</h3>
                            <p>Kids, Daycare, Kindergarten</p>
                        </div>
                    </a>
                    <a href="../../../../img/gallery/four.png" className="grid-item bg_4">
                        <div className="grid_item_content">
                            <h3>Magic Prince Birthday Party</h3>
                            <p>Kids, Daycare, Kindergarten</p>
                        </div>
                    </a>
                    <a href="../../../../img/gallery/one.png" className="grid-item bg_5">
                        <div className="grid_item_content">
                            <h3>Magic Prince Birthday Party</h3>
                            <p>Kids, Daycare, Kindergarten</p>
                        </div>
                    </a>
                    <a href="../../../../img/gallery/one.png" className="grid-item bg_6">
                        <div className="grid_item_content">
                            <h3>Magic Prince Birthday Party</h3>
                            <p>Kids, Daycare, Kindergarten</p>
                        </div>
                    </a>
                </div>
            </div>
        </div> */}
    </div>
    <div className="gallery_animation_1">
        <div data-parallax='{"x": 2, "y": 20, "rotateZ":0}'><img src="img/icon/banner_two_1.png" alt="#"/></div>
    </div>
    <div className="gallery_animation_2">
        <div data-parallax='{"x": 10, "y": 50, "rotateZ":0}'><img src="img/icon/event_1.png" alt="#"/></div>
    </div>
</section>
    );
};

export default Gallery;
