import React from 'react';

const ContactPart = () => {
    
    return (
        <section className="contact_part section_bg section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact_form">
                            <h2>Get Your Teacher</h2>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" id="name" placeholder="Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="textarea" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="cu_btn btn_2">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_animation_1">
                <div data-parallax='{"x": 30, "y": 100, "rotateZ": 0}'>
                    <img src="../../../../img/icon/team_animation.png" alt="#" className="img-fluid" />
                    {/* <img
                src={`/images/${teacher.image}`}
                alt="#j"
                className="img-fluid "
              /> */}
                </div>
            </div>
            <div className="contact_animation_2">
                <div data-parallax='{"x": 20, "y": 150, "rotateZ": 180}'>
                    <img src="../../../../img/icon/contact_icon.png" alt="#" />
                </div>
            </div>
            <div className="contact_animation_3">
                <div data-parallax='{"x": 100, "y": 250, "rotateZ": 0}'>
                    <img src="../../../../img/icon/banner_two_3.png" alt="#" />
                </div>
            </div>
            <div className="contact_animation_4">
                <div data-parallax='{"x": 15, "y": 150, "rotateZ": 0}'>
                    <img src="../../../../img/icon/event_6.png" alt="#" />
                </div>
            </div>
            <div className="contact_animation_5">
                <div data-parallax='{"x": 20, "y": 150, "rotateZ": 180}'>
                    <img src="../../../../img/icon/icon_8.png" alt="#" />
                </div>
            </div>
            <div className="contact_animation_6">
                <div data-parallax='{"x": 10, "y": 250, "rotateZ": 180}'>
                    <img src="../../../../img/icon/icon_7.png" alt="#" />
                </div>
            </div>
        </section>
    );
};

export default ContactPart;
