import React, { useEffect, useRef, useState } from 'react';
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
    const user=sessionStorage.getItem('user_id');
    const [code, setCode] = useState("");
    const [review, setReview] = useState([]);
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [deleteCommentId, setDeleteCommentId] = useState(null);
    const reactQuillRef = useRef(null);
    const handleProcedureContentChange = (content) => {
        setCode(content);
    };
    const handleEditComment = (commentId, commentText,userId) => {
        const user=sessionStorage.getItem('user_id');
        console.log(userId);
        if(user==userId){
        setEditingCommentId(commentId);
        setCode(commentText);
        reactQuillRef.current.focus();}
    };
    const handleDeleteComment = (commentId,userId) => {
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
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="section_tittle_style_02">
                        <h2 className="title wow fadeInDown" data-wow-delay=".3s">
                            <span className="title_overlay_effect"> Parents Reviews</span>
                        </h2>

                    </div>

                </div>
            </div>
                <div className="row">
                    <div className="single_review_part blog_page_single_item">
                        <div className="comment_part">
                            {/* <h3>3 Comment</h3> */}
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
                                        <div className='row' style={{ display: user != rev.user.id ? 'none':'' }}>
                                            

                                            <a className="reply_btn" style={{ paddingRight: '10px', cursor: 'pointer' }} onClick={() => handleEditComment(rev.id, rev.comment,rev.user.id)}>
                                                <i className="ti ti-pencil"></i>Edit
                                            </a>
                                            <a className="reply_btn" style={{ cursor: 'pointer' }} onClick={() => handleDeleteComment(rev.id,rev.user.id)}>
                                                <i className="ti ti-trash"></i>Delete
                                            </a> </div>
                                    </div><hr></hr>
                                    <br></br> </div>
                            ))}
                        </div>
                        <div className="review_form blog_page_single_item">
                            <h3>Leave a Reply</h3>
                            <form action="#">
                                <ReactQuill
                                    theme="snow"
                                    ref={reactQuillRef}
                                    modules={modules}
                                    formats={formats}
                                    value={code}
                                    name="comment"
                                    onChange={handleProcedureContentChange}
                                />
                            
                                <a href="#"  onClick={handleSave} className="cu_btn btn_2">
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
