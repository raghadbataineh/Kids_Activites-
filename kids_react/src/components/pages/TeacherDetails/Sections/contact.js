import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";


function EventSection() {
   
  const { id } = useParams(); // Get the id parameter from the URL
  const [teacher, setTeacher] = useState(); //
  const [events, setEvents] = useState([]);

  // const [event, setEvent] = useState();

  useEffect(() => {
 const team =   axios
 axios
 .get(`http://localhost:8000/api/orgnizers/${id}`)
 .then((response) => {
   setTeacher(response.data.orgnizer); // Assuming "orgnizer" is the key for organizer data
   setEvents(response.data.events);
      })
      .catch((error) => {
        console.error("Error fetching teacher details:", error);
      });
  }, [id]); // Include id as a dependency to re-fetch data when the id changes
   
  return (
    <section className="kidzo_event_area section_padding">
      <img className="event_shap" src="img/home6/event_shape.png" alt="" />
      <div className="container">
        <div className="section_tittle_style_02 new_style">
        
          <h2 className="title wow fadeInDown" data-wow-delay=".3s">
           My Annual <span className="title_overlay_effect">Events</span>
          </h2>
          <p className="description wow fadeInDown" data-wow-delay=".3s">
            Kidzo mission is to provide affordable, high-quality early education and childcare
            services for working families to ensure every child.
          </p>
        </div>
        <div className="row ml-0 mr-0">
  {events.map((event) => (
    <div className="kidzo_event_item d-flex align-items-center" key={event.id} style={{ backgroundColor: "#EFDFD0" }}>
      <div className="kidzo_event d-flex align-items-center">
        <img src={`${event.image}`} alt={event.name} width="200px"/>
        <div className="event_content">
          <a href="#">
            <h3>{event.name}</h3>
          </a>
          <p>{event.short_description}</p>
        </div>
      </div>
      <div className="kidzo_event_date d-flex align-items-center">
        <img src="../../../../images/zigzag.png" alt="" />
        <div className="date">{new Date(event.date).getDate()}</div>
        <div className="date_content">
          <h3>{new Date(event.date).toLocaleString('default', { month: 'long' })}</h3>
          <p>{event.start_time} - {event.end_time}</p>
        </div>
      </div>
      <a href="#" className="event_btn">
        <i className="ti-arrow-right"></i>
      </a>
    </div>
  ))}

          {/* <div className="kidzo_event_item d-flex align-items-center" data-bg-color="#EFDFD0">
            
            <div className="kidzo_event d-flex align-items-center">
              <img src="kids_react\src\images\event1.png" alt="" />
              <img src="../../../../images\event1.png" alt="#" />

              <div className="event_content">
                <a href="#">
                  <h3> {event.name}
</h3>
                </a>
                <p>Our annual easter holiday event</p>
              </div>
            </div>
            <div className="kidzo_event_date d-flex align-items-center">
              <img src="../../../../images\zigzag.png" alt="" />
              <div className="date">09</div>
              <div className="date_content">
                <h3>April</h3>
                <p>8:00AM - 4:00 PM</p>
              </div>
            </div>
            <a href="#" className="event_btn">
              <i className="ti-arrow-right"></i>
            </a>
          </div> */}
          {/* <div className="kidzo_event_item d-flex align-items-center" data-bg-color="#FBBFBD">
            <div className="kidzo_event d-flex align-items-center">
              <img src="../../../../images\event2.png" alt="" />
              <div className="event_content">
                <a href="#">
                  <h3>Kids Day Drawing Event</h3>
                </a>
                <p>Our annual father’s day event</p>
              </div>
            </div>
            <div className="kidzo_event_date d-flex align-items-center">
              <img src="../../../../images\zigzag2.png" alt="" />
              <div className="date">12</div>
              <div className="date_content">
                <h3>April</h3>
                <p>8:00AM - 4:00 PM</p>
              </div>
            </div>
            <a href="#" className="event_btn">
              <i className="ti-arrow-right"></i>
            </a>
          </div>
          <div className="kidzo_event_item d-flex align-items-center" data-bg-color="#F8C583">
            <div className="kidzo_event d-flex align-items-center">
              <img src="../../../../images\event3.png" alt="" />
              <div className="event_content">
                <a href="#">
                  <h3>Easter Sunday Event</h3>
                </a>
                <p>Our annual easter holiday event</p>
              </div>
            </div>
            <div className="kidzo_event_date d-flex align-items-center">
              <img src="../../../../images\zigzag3.png" alt="" />
              <div className="date">09</div>
              <div className="date_content">
                <h3>April</h3>
                <p>8:00AM - 4:00 PM</p>
              </div>
            </div>
            <a href="#" className="event_btn">
              <i className="ti-arrow-right"></i>
            </a>
          </div>
          <div className="kidzo_event_item d-flex align-items-center" data-bg-color="#E0E3FF">
            <div className="kidzo_event d-flex align-items-center">
              <img src="../../../../images\event4.png" alt="" />
              <div className="event_content">
                <a href="#">
                  <h3>Kids Day Drawing Event</h3>
                </a>
                <p>Our annual father’s day event</p>
              </div>
            </div>
            <div className="kidzo_event_date d-flex align-items-center">
              <img src="../../../../images\zigzag4.png" alt="" />
              <div className="date">12</div>
              <div className="date_content">
                <h3>April</h3>
                <p>8:00AM - 4:00 PM</p>
              </div>
            </div>
            <a href="#" className="event_btn">
              <i className="ti-arrow-right"></i>
            </a>
          </div> */}
          
        </div>
        
      </div>
      
      
    </section>
  );
}

export default EventSection;
