import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyBookingsPage.css'; // Import CSS file

function MyBookingsPage() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const user=sessionStorage.getItem('user_id');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/seeBooking/${user}`)
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
                    <li key={booking.id} className="booking-item"> {/* Add an item class */}
                        {/* Name: {booking.name}<br/>
                        Date: {booking.date}<br/> */}
                        <div className="booking-detail">
                            <div>Address: {booking.address}</div>
                            <div>Kids Number: {booking.kidsNum}</div>
                            <div>Total Price: {booking.Total_price}</div>
                            <div>Payment Method: {booking.payment_method}</div>
                            <div>Notes: {booking.notes}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyBookingsPage;
