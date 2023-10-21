import React from 'react';

const EventPart = ({events}) => {
    function formatTime(timeString) {
        const date = new Date(`2023-10-17T${timeString}`);
        const formattedTime = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
        return formattedTime;
    }
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    return (
        <section className="event_part section_padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section_tittle">
                            <h5 className="wow fadeInDown" data-wow-delay=".5s">Other Events</h5>
                            <h2 className="wow fadeInDown" data-wow-delay=".3s">Children Party Packages</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="event_part_iner">
                            <div className="row justify-content-end">
                                <div className="event_img wow fadeInLeft" data-wow-delay=".5s">
                                    <img src="img/event_img.png" alt="#" className="img-fluid" />
                                </div>
                                <div className="col-md-6 col-lg-7">
                                {events.map((event) => {
    const eventDate = new Date(event.date);
    console.log(eventDate);
    const currentDate = new Date();
    console.log(currentDate);
    currentDate.setDate(currentDate.getDate() + 3); 

    if (eventDate > currentDate) {
        return (
            <div className="single_event_list wow fadeInDown" data-wow-delay=".2s" key={event.id}>
                <div className="event_date">
                    <h3><span> <h3>{eventDate.getDate()} <span>{months[eventDate.getMonth()]}</span></h3></span></h3>
                </div>
                <div className="event_content">
                    <h4><a href="event_details.html">{event.name}</a></h4>
                    <p>{eventDate.toLocaleString('en-US', { weekday: 'long' })} {formatTime(event.start_time)} - {formatTime(event.end_time)}</p>
                </div>
            </div>
        );
    } else {
        return null; 
    }
})}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="event_animation_1">
                <div data-parallax='{"x": 2, "y": 120, "rotateZ":0}'><img src="img/icon/event_1.png" alt="#" /></div>
            </div>
            <div className="event_animation_2">
                <div data-parallax='{"x": 10, "y": 100, "rotateZ":0}'><img src="img/icon/event_2.png" alt="#" /></div>
            </div>
            <div className="event_animation_3">
                <div data-parallax='{"x": 30, "y": 110, "rotateZ":0}'><img src="img/icon/event_3.png" alt="#" /></div>
            </div>
        </section>
    );
};

export default EventPart;
