import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { useParams } from "react-router-dom";

const Eventdetails = () => {
  const { id } = useParams(); // Assuming 'id' is the category ID

  const [data, setData] = useState([]);
  const [organizer, setOrganizer] = useState([]);

  useEffect(() => {
    // Construct the URL with the 'id' (category ID)
    axios
      .get(`http://127.0.0.1:8000/api/EventDetails/${id}`)
      .then((response) => {
        setData(response.data);
        setOrganizer(response.data.organizer);

      });
  }, [id]); // Include 'id' in the dependency array

  return (
    <section className="teacher_details_info section_padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
            <div className="program_details_thumb profile_img pr-lg-3">
              <img
                src={data.image2}
                alt="#"
                className="img-fluid"
                style={{ width: "475px", height: "440px" }}
              />
              <img
                src="../../../../img/teacher_profile_shape.png"
                alt="#"
                className="img-fluid teacher_profile_shape"
                style={{ width: "440px", height: "440px" }}
              />
            </div>
          </div>
          <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
            <div className="program_details_content mt-5 mt-lg-0">
              <h2 className="kid_title mb-4">
                <span className="title_overlay_effect" style={{  fontSize: '36px' }}>{data.name}</span>
              </h2>
              <p style={{  color: '#626472', fontSize: '18px' }}>{data.long_description}</p>
              <br></br>
              
              {/* <a href="#" className="cu_btn btn_2">
                Book Now
              </a> */}
              <Link className="cu_btn btn_2" to={`/booking/${id}`}>Book Now</Link>
            </div>
          </div>
        </div>
        <div className="row">
  <div className="col-lg-12">
    <div className="single_event_section_part">
      <div className="row justify-content-between">
        <div
          className="col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="single_event_part event_bg_01" style={{ display: 'flex', flexDirection: 'column', height: '90%' }}>
            <div className="single_event_icon">
              <img
                src="https://html.droitlab.com/kidzo/img/event/list_event_7.png"
                alt="#"
                className="img-fluid"
              />
            </div>
            <h4>event Location</h4>
            <p style={{ fontSize: '20px', flex: 1 }}>{data.location}</p>
          </div>
        </div>
        <div
          className="col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-delay=".5s"
        >
          <div className="single_event_part event_bg_02" style={{ display: 'flex', flexDirection: 'column', height: '90%' }}>
            <div className="single_event_icon">
              <img
                src="https://html.droitlab.com/kidzo/img/event/list_event_8.png"
                alt="#"
                className="img-fluid"
              />
            </div>
            <h4>Event Date & Time  </h4>
            <p style={{ fontSize: '20px', flex: 1 }}>
              {data.date} <br />
              {data.start_time ? data.start_time.slice(0, 5) : ''}-
              {data.end_time ? data.end_time.slice(0, 5) : ''}
            </p>
          </div>
        </div>
        <div
          className="col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-delay=".5s"
        >
          <div className="single_event_part event_bg_03" style={{ display: 'flex', flexDirection: 'column', height: '90%' }}>
            <div className="single_event_icon">
              <img
                src="https://html.droitlab.com/kidzo/img/program_img/program_img_06.png"
                alt="#"
                className="img-fluid"
              />
            </div>
            <h4>Event <br></br> price </h4>
            <p style={{ fontSize: '20px', flex: 1 }}>{data.price} JOD</p>
          </div>
        </div>
        <div
          className="col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="single_event_part event_bg_01" style={{ display: 'flex', flexDirection: 'column', height: '90%' }}>
            <div className="single_event_icon">
              <img
                src="https://images-ext-1.discordapp.net/external/gVYIT3gOMVIBOLq2-WHIG_OUEAtRjjbibR5G6Z8rzsI/https/html.droitlab.com/kidzo/img/event/list_event_9.png?width=245&height=187"
                alt="#"
                className="img-fluid"
              />
            </div>
            <h4>event organizer</h4>
            <p style={{ fontSize: '20px', flex: 1 }}>{organizer.name}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="teacher_details_animation_1">
        <div data-parallax='{"x": 2, "y": 120, "rotateZ": 0}'>
          <img src="../../../../img/icon/story_animation_5.png" alt="#" />
        </div>
      </div>
      <div className="teacher_details_animation_2">
        <div data-parallax='{"x": 10, "y": 100, "rotateZ": 0}'>
          <img src="../../../../img/icon/event_6.png" alt="#" />
        </div>
      </div>
      <div className="teacher_details_animation_3">
        <div data-parallax='{"x": 30, "y": 110, "rotateZ": 0}'>
          <img src="../../../../img/icon/icon_8.png" alt="#" />
        </div>
      </div>
      <div className="teacher_details_animation_4">
        <div data-parallax='{"x": 5, "y": 105, "rotateZ": 0}'>
          <img src="../../../../img/icon/contact_icon.png" alt="#" />
        </div>
      </div>
      <div className="teacher_details_animation_5">
        <div data-parallax='{"x": 8, "y": 110, "rotateZ": 0}'>
          <img src="../../../../img/icon/story_animation_5.png" alt="#" />
        </div>
      </div>
      <div className="teacher_details_animation_6">
        <div data-parallax='{"x": 8, "y": 110, "rotateZ": 0}'>
          <img src="../../../../img/icon/icon_9.png" alt="#" />
        </div>
      </div>
    </section>
  );
};

export default Eventdetails;
