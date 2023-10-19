import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link} from "react-router-dom";


const EventList = ({ events }) => {
    function formatTime(timeString) {
        const date = new Date(`2023-10-17T${timeString}`);
        const formattedTime = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
        return formattedTime;
    }

    return (
        <section className="event_list section_padding section_bg_1">
            <div className="container custom_container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section_tittle_style_02">
                            <h2 className="title wow fadeInDown" data-wow-delay=".3s">
                                <span className="title_overlay_effect"> Events</span>
                            </h2>
                            {events.map((event) => (
                                <p className="description wow fadeInDown" data-wow-delay=".3s">
                                    {event.category.long_description}
                                </p>))}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {events.map((event) => (

                            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay=".2s" key={event.id}>
                                <div className="single_event_list">
                                    <div className="event_list_img">
                                        <img src={event.image} alt={event.name} className="img-fluid" />
                                    </div>
                                    <div className="event_list_content">
                                        <h5>{event.date}</h5>
                                        <h3>
                                            <Link to={`/single/${event.id}`}>{event.name}</Link>
                                        </h3>
                                        <p>{event.short_description}</p>
                                        <ul>
                                            <li><i className="fas fa-clock"></i>Time: <span>{formatTime(event.start_time)} - {formatTime(event.end_time)}</span></li>
                                            <li><i className="fas fa-map-marker-alt"></i>Location: <span>{event.location}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    ))}


                </div>
            </div>
            <div className="event_list_animation_1">
                <div data-parallax='{"x": 2, "y": 70, "rotateZ":0}'><img src="../../../../img/icon/icon_5.png" alt="#" /></div>
            </div>
            <div className="event_list_animation_3">
                <div data-parallax='{"x": 30, "y": 60, "rotateZ":0}'><img src="../../../../img/icon/icon_7.png" alt="#" /></div>
            </div>
            <div className="event_list_animation_4">
                <div data-parallax='{"x": 30, "y": -50, "rotateZ":0}'><img src="../../../../img/icon/icon_8.png" alt="#" className="img-fluid" /></div>
            </div>
        </section>
    );
};

export default EventList;
