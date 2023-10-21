import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
const EventList = () => {
    const navigate = useNavigate()
    const { id } = useParams();
   
    function formatTime(timeString) {
        const date = new Date(`2023-10-17T${timeString}`);
        const formattedTime = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
        return formattedTime;
    }
    const [events, setEvent] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleCategoryClick = (category, id) => {
        const category_id = id;

        if (category_id == null) {
            axios.get(`http://127.0.0.1:8000/api/events/${id}`).then((response) => {
                setEvent(response.data.events);
                setCategory(response.data.category);
                setSelectedCategory(id);
                // sessionStorage.setItem('category_id', id);
                navigate(`/events/${id}`);
              
            });
        }
        else {

            setSelectedCategory(category_id);
            axios.get(`http://127.0.0.1:8000/api/events/${category_id}`).then((response) => {
                setEvent(response.data.events);
                setCategory(response.data.category);
                navigate(`/events/${category_id}`);
                if(id=='login'){
                    navigate(`/login`);
                }
            });
        }
    };
    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/events/${id}`).then((response) => {
            setEvent(response.data.events);
            setCategory(response.data.category);
            setSelectedCategory(id);

        });
    }, [id]);
    return (
        <section className="program_list program_list_page section_padding" id="program_list">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="section_tittle_style_02">
                        <h2 className="title wow fadeInDown" data-wow-delay=".3s">
                            <span className="title_overlay_effect"> Events</span>
                        </h2>

                    </div>

                </div>
            </div>
            <div className="container custom_container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="filters">
                            <ul>

                                {category.map((categoryItem) => (
                                    <li
                                        key={categoryItem.id}
                                        className={selectedCategory == categoryItem.id ? 'is-checked' : ''}
                                        onClick={() => handleCategoryClick(categoryItem.name, categoryItem.id)}
                                    >
                                        {categoryItem.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div
                            className="rows grid program_list_filter"
                            style={{ display: "flex", flexWrap: "wrap" }}
                        >
                            {events
                                .filter((event) => event.status === "active")
                                .map((event, index) => (
                                    <div
                                        className="col-lg-4 col-md-6 grid-item Kindergarten Story"
                                        key={event.id}
                                        style={{ flex: "1", maxWidth: "33.33%" }} // Set a fixed height
                                    >
                                        <div
                                            className="single_program_list wow fadeInUp"
                                            data-wow-delay=".4s"
                                            style={{
                                                height: "600px",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <img
                                                src={event.image}
                                                alt={event.name}
                                                className="img-fluid"
                                                style={{ height: "250px", width: "350px" }}
                                            />
                                            <div
                                                className="single_program_list_content "
                                                style={{ height: "280px", width: "350px" }}
                                            >
                                                <center>
                                                    {" "}
                                                    <h4>
                                                        <Link to={`/single/${event.id}`}>{event.name}</Link>
                                                    </h4>
                                                    <p>{event.short_description}</p>{" "}
                                                </center>
                                                <div
                                                    className="program_list_details"
                                                    style={{ marginTop: "auto" }}
                                                >
                                                    <h5>
                                                        Price <span>{event.price} JOD</span>
                                                    </h5>
                                                    <h5>
                                                        Date <span>{event.date}</span>
                                                    </h5>
                                                    <h5>
                                                        Time{" "}
                                                        <span>
                                                            {formatTime(event.start_time)} -{" "}
                                                            {formatTime(event.end_time)}
                                                        </span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default EventList;

{
  /* <section className="event_list section_padding section_bg_1">
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
        {events.map((event) => {
            if (event.status === 'active') {
                return (
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
                );
            }
        })}


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
</section> */
}
