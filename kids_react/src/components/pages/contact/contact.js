import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            {/* Breadcrumb Part */}
            <section className="breadcrumb_part parallax_bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="breadcrumb_iner">
                                <h2>Contact</h2>
                                <div className="breadcrumb_iner_link">
                                    <a href="/">Home</a>
                                    <span>.</span>
                                    <p> Contact</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb_animation_4">
                    <div data-parallax='{"x": 30, "y": 250, "rotateZ":0}'>
                        <img src="../../../../img/icon/banner_icon/animated_banner_4.png" alt="#" />
                    </div>
                </div>
                <div className="breadcrumb_animation_5">
                    <div data-parallax='{"x": 20, "y": 150, "rotateZ": 180}'>
                        <img src="../../../../img/icon/banner_icon/animated_banner_5.png" alt="#" />
                    </div>
                </div>
                <div className="breadcrumb_animation_7">
                    <div data-parallax='{"x": 100, "y": 250, "rotateZ":0}'>
                        <img src="../../../../img/icon/banner_icon/animated_banner_15.png" alt="#" />
                    </div>
                </div>
                <div className="breadcrumb_animation_10">
                    <div data-parallax='{"x": 15, "y": 150, "rotateZ":0}'>
                        <img src="../../../../img/icon/banner_icon/animated_banner_10.png" alt="#" />
                    </div>
                </div>
                <div className="breadcrumb_animation_12">
                    <div data-parallax='{"x": 20, "y": 150, "rotateZ":180}'>
                        <img src="../../../../img/icon/banner_icon/animated_banner_20.png" alt="#" />
                    </div>
                </div>
                <div className="about_page_animation_2">
                <div data-parallax='{"x": 10, "y": 80, "rotateZ":0}'>
                    <img src="../../../../img/icon/event_6.png" alt="#" />
                </div>
            </div>
            </section>
            {/* Breadcrumb Part end */}

            {/* Contact Page */}
            <section className="contact_page section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact_form form_style">
                                <h2 className="kid_title mb-4">
                                    <span className="title_overlay_effect">We're here to Help You</span>
                                </h2>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form_single_item">
                                                <input type="text" name="#" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_single_item">
                                                <input type="email" name="#" placeholder="Your Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_single_item">
                                                <input type="text" name="#" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_single_item">
                                                <input type="email" name="#" placeholder="Website URL" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_single_item">
                                                <textarea name="#" placeholder="Review Content"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="pc-button elementor-button button-link cu_btn" href="#">
                                        <div className="button-content-wrapper">
                                            <span className="elementor-button-text">Send Message</span>
                                            <svg className="pc-dashes inner-dashed-border animated-dashes">
                                                <rect x="5px" y="5px" rx="25px" ry="25px" width="0" height="0" />
                                            </svg>
                                        </div>
                                    </a>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 pl-lg-5">
                            <div className="blog_sidebar">
                                <div className="contact_sidebar">
                                    <h2 className="kid_title mb-4">
                                        <span className="title_overlay_effect">Office Info</span>
                                    </h2>
                                    <div className="single_contact_sidebar">
                                        <i className="icon_pin"></i>
                                        <div className="contact_sidevar_content">
                                            <h5>Location</h5>
                                            <p>Amman , Jordan</p>
                                        </div>
                                    </div>
                                    <div className="single_contact_sidebar">
                                        <i className="icon_phone"></i>
                                        <div className="contact_sidevar_content">
                                            <h5>Phone</h5>
                                            <p>+962 777 745 695</p>
                                        </div>
                                    </div>
                                    <div className="single_contact_sidebar">
                                        <i className="icon_mail"></i>
                                        <div className="contact_sidevar_content">
                                            <h5>Email</h5>
                                            <p>info@kidzone.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="social_icon">
                                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/"><i className="ti-instagram"></i></a>
                                    <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://dribbble.com/"><i className="ti-dribbble"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Page end */}
        </div>
    );
};

export default Contact;
