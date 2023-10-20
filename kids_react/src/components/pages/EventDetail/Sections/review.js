import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'; // Import Axios
import parse from 'html-react-parser';
import Swal from 'sweetalert2';
import Quill from 'quill';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
const Review = () => {

    const navigate = useNavigate();
    const { id } = useParams();
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
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [deleteCommentId, setDeleteCommentId] = useState(null);

    const handleProcedureContentChange = (content) => {
        setCode(content);
    };
    const handleEditComment = (commentId, commentText) => {
        setEditingCommentId(commentId);
        setCode(commentText);
    };
    const handleDeleteComment = (commentId) => {
        setDeleteCommentId(commentId);

        const formData = new FormData();
        formData.append('id', deleteCommentId);
        axios({
            method: 'post',
            url: "http://127.0.0.1:8000/api/deleteReview",
            data: formData,
        })
            .then((res) => {

                axios.get(`http://127.0.0.1:8000/api/showReview/${id}`).then((response) => {
                    setReview(response.data);
                });
            })
            .catch((error) => {
                console.error('Error while saving data:', error);
            });
        setCode('');
    };
    const handleSave = (e) => {
        e.preventDefault();
        const user = sessionStorage.getItem('user_id');
        if (user !== null && code !== "" && editingCommentId == null) {
            console.log('hhh');
            const formData = new FormData();
            formData.append('comment', code);
            formData.append('user_id', user);
            formData.append('category_id', id);
            axios({
                method: 'post',
                url: "http://127.0.0.1:8000/api/storeReview",
                data: formData,
            })
                .then((res) => {
                
                    axios.get(`http://127.0.0.1:8000/api/showReview/${id}`).then((response) => {
                        setReview(response.data);
                    });
                })
                .catch((error) => {
                    console.error('Error while saving data:', error);
                });
            setCode('')
        }
        else if (user == null) {

            Swal.fire({
                title: 'You Must Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login')
                    }
                });
        }
        else if (user !== null && code !== "" && editingCommentId != null) {
            console.log('edit comment id');
            const formData = new FormData();
            formData.append('comment', code);
            formData.append('id', editingCommentId);
            axios({
                method: 'post',
                url: "http://127.0.0.1:8000/api/storeReview",
                data: formData,
            })
                .then((res) => {
                    
                    axios.get(`http://127.0.0.1:8000/api/showReview/${id}`).then((response) => {
                        setReview(response.data);
                    });
                })
                .catch((error) => {
                    console.error('Error while saving data:', error);
                });
            setCode('');
           setEditingCommentId(null);
        }



        else {
            Swal.fire('You Must Write Something!')
        }
    }
    useEffect(() => {
        const CustomImageModule = () => {
            const CustomImageBlot = Quill.import('formats/image');

            class CustomImage extends CustomImageBlot {
                static create(value) {
                    const node = super.create(value);
                    node.setAttribute('width', '200');
                    node.setAttribute('height', '150');
                    return node;
                }
            }

            Quill.register('formats/image', CustomImage);
        };

        // Initialize the custom image module
        CustomImageModule();
        console.log(id);
        axios.get(`http://127.0.0.1:8000/api/showReview/${id}`).then((response) => {
            setReview(response.data);
            console.log(response.data);
        });
    }, [id]);
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
                                <div >
                                    <img
                                        src={rev.user.image}
                                        className="admin_img"
                                        style={{
                                            marginRight: '30px',
                                            borderRadius: '50%',
                                            maxWidth: '60px',
                                        }}
                                    />
                                    <div >
                                        <div className="admin_tittle">
                                            <h5>{rev.user.first_name} {rev.user.last_name} <span>{new Date(rev.updated_at).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })} </span></h5>
                                        </div>
                                        <>{parse(rev.comment)}
                                            {/* <span style={{border:'solid 1px gray'}}>edit</span> */}
                                        </>
                                        <div className='row'>

                                            <a className="reply_btn" style={{ paddingRight: '10px',cursor: 'pointer' }} onClick={() => handleEditComment(rev.id, rev.comment)}>
                                                <i className="ti ti-pencil"></i>Edit
                                            </a>
                                            <a className="reply_btn"  style={{ cursor: 'pointer' }} onClick={() => handleDeleteComment(rev.id)}>
                                                <i className="ti ti-trash"></i>Delete
                                            </a> </div>
                                        {/* <div className="media">
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
                                        </div> */}
                                    </div><hr></hr>
                                    <br></br> </div>
                            ))}
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
