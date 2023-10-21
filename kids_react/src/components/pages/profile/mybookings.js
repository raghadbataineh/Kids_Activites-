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
            <h1>My Bookings</h1>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>{booking.name} - {booking.date}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyBookingsPage;
