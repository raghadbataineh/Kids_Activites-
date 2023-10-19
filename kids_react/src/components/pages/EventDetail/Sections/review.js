import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'; // Import Axios
import parse from 'html-react-parser';

const Review = () => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ size: [] }],
            [{ font: [] }],
            [{ align: ["right", "center", "justify"] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [{ color: ["#B6E6FF", "#fc517f"] }],
            [{ background: ["black", "#785412"] }],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "size",
        "font",
    ];

    const [code, setCode] = useState("");
    const [review, setReview] = useState([]);

    const handleProcedureContentChange = (content) => {
        setCode(content);
    };

    const handleSave = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('comment', code);

        axios({
            method: 'post',
            url: "http://127.0.0.1:8000/api/storeReview",
            data: formData,
        })
            .then((res) => {
                axios.get(`http://127.0.0.1:8000/api/showReview`).then((response) => {
                    setReview(response.data);
                });
            })
            .catch((error) => {
                console.error('Error while saving data:', error);
            });
            setCode('')
    };
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/showReview`).then((response) => {
            setReview(response.data);
            console.log(response.data);
        });
    }, []);
    return (
        <section className="blog_page section_padding">
            <div className="container">
                <h2 className="title wow fadeInDown" data-wow-delay=".3s">
                    <span className="title_overlay_effect">Parents Reviews</span>
                </h2>
                <div className="row">
                    <div className="single_review_part blog_page_single_item">
                        <div className="comment_part">
                            <h3>3 Comment</h3>
                            {review.map((rev) => (
                                <div className="media">
                                    <img src={rev.user.image} className="admin_img" alt="#" />
                                    <div className="media-body">
                                        <div className="admin_tittle">
                                            <h5>{rev.user.first_name} {rev.user.last_name} <span>{new Date(rev.updated_at).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })} </span></h5>
                                        </div>
                                        <>{parse(rev.comment)} </>
                                        <a href="#" className="reply_btn">
                                            <i className="arrow_back"></i>Reply
                                        </a>
                                        <div className="media">
                                            <img src="img//author_1.jpg" className="admin_img" alt="#" />
                                            <div className="media-body">
                                                <div className="admin_tittle">
                                                    <h5>Gunther Beard <span>44 mins ago</span></h5>
                                                </div>
                                                <p>
                                                    The bee's knees he nicked it gosh Queen's English don't
                                                    get shirty with me cuppa ruddy horse play amongst
                                                    knackered, what a plonker chap.!
                                                </p>
                                                <a href="#" className="reply_btn">
                                                    <i className="arrow_back"></i>Reply
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                        <div className="review_form blog_page_single_item">
                            <h3>Leave a Reply</h3>
                            <form action="#">
                                <div className="row"></div>
                                <ReactQuill
                                    theme="snow"
                                    modules={modules}
                                    formats={formats}
                                    value={code}
                                    name="comment"
                                    onChange={handleProcedureContentChange}
                                />
                                <a href="#" onClick={handleSave} className="cu_btn btn_2">
                                    Submit Review
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
