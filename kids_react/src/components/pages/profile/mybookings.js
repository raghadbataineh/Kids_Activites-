import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyBookingsPage() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/bookings`)
            .then(response => {
                setBookings(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("error", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <center><h1>Loading...</h1></center>;
    }

    return (
        <div>
            <div className="row justify-content-center mt-3">
                <div className="col-lg-7">
                    <div className="section_tittle_style_02">
                        <h6 className="title wow fadeInDown" data-wow-delay=".3s">
                            <span className="title_overlay_effect"> My Bookings</span>
                        </h6>

                    </div>

                </div>
            </div>
            <ul style={{marginTop:'-50px'}}>
                {bookings.map(booking => (
                    <li key={booking.id}>{booking.name} - {booking.date}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyBookingsPage;
