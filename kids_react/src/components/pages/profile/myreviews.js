import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyCommentsPage.css'; // Import your CSS file

function MyCommentsPage() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/seeReview/1`)
            .then(response => {
                setReviews(response.data);
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
        <div className="reviews-container">
            <h1 className="reviews-heading">My Reviews</h1>
            <ul className="reviews-list">
                {reviews.map((review, index) => (
                    <li key={index} className="review-item">
                        <div className="review-comment">{review.comment}</div>
                        <div className="review-user">{new Date(review.created_at).toISOString().replace("T", " ").slice(0, -5)}</div>
                        {/* <div className="review-user">Edited in{review.updated_at}</div> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyCommentsPage;
