import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyCommentsPage.css'; // Import your CSS file
import parse from 'html-react-parser';
function MyCommentsPage() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const user=sessionStorage.getItem('user_id');
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/seeReview/${user}`)
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
             <div className="row justify-content-center mt-3">
                <div className="col-lg-7">
                    <div className="section_tittle_style_02">
                        <h2 className="title wow fadeInDown" data-wow-delay=".3s">
                            <span className="title_overlay_effect"> My Reviews</span>
                        </h2>

                    </div>

                </div>
            </div>
          
            <ul className="reviews-list" style={{marginTop:'-50px'}}>
                {reviews.map((review, index) => (
                    <li key={index} className="review-item">
                        <div className="review-comment">{parse(review.comment)}</div>
                        <div className="review-user">{new Date(review.created_at).toISOString().replace("T", " ").slice(0, -5)}</div>
                        <hr></hr>
                        {/* <div className="review-user">Edited in{review.updated_at}</div> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyCommentsPage;
