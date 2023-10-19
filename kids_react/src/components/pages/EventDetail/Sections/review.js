import React from 'react';

const Review = () => {
  return (
    
    <section className="blog_page section_padding">
        <div className="container">
        <h2 className="title wow fadeInDown" data-wow-delay=".3s">
              <span className="title_overlay_effect">Parents Reviews</span>
            </h2>
            <div className="row">
            {/* <div class="col-lg-8"> */}

    <div className="single_review_part blog_page_single_item">
                <div className="comment_part">
                    <h3>3 Comment</h3>
                    <div className="media">
                        <img src="img/student.png" className="admin_img" alt="#" />
                        <div className="media-body">
                            <div className="admin_tittle">
                                <h5>Gunther Beard <span>Just Now</span></h5>
                            </div>
                            <p>The bee's knees he nicked it gosh Queen's English don't get
                                shirty with me cuppa ruddy horse play amongst knackered,
                                what a plonker chap.!
                            </p>
                            <a href="#" className="reply_btn"><i className="arrow_back"></i>Reply</a>
                            {/* Nested comment */}
                            <div className="media">
                                <img src="img//author_1.jpg" className="admin_img" alt="#" />
                                <div className="media-body">
                                    <div className="admin_tittle">
                                        <h5>Gunther Beard <span>44 mins ago</span></h5>
                                    </div>
                                    <p>The bee's knees he nicked it gosh Queen's English don't get
                                        shirty with me cuppa ruddy horse play amongst knackered,
                                        what a plonker chap.!
                                    </p>
                                    <a href="#" className="reply_btn"><i className="arrow_back"></i>Reply</a>
                                </div>
                            </div>
                            {/* Another nested comment */}
                            <div className="media">
                                <img src="img/student.png" className="admin_img" alt="#" />
                                <div className="media-body">
                                    <div className="admin_tittle">
                                        <h5>Gunther Beard <span>44 mins ago</span></h5>
                                    </div>
                                    <p>The bee's knees he nicked it gosh Queen's English don't get
                                        shirty with me cuppa ruddy horse play amongst knackered,
                                        what a plonker chap.!
                                    </p>
                                    <a href="#" className="reply_btn"><i className="arrow_back"></i>Reply</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review_form blog_page_single_item">
                    <h3>Leave a Reply</h3>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form_single_item">
                                    <input type="text" name="#" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form_single_item">
                                    <input type="email" name="#" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form_single_item">
                                    <textarea name="#" placeholder="Review Content"></textarea>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="cu_btn btn_2">Submit Review</a>
                    </form>
                </div>
            </div>
            </div>
            </div>
            {/* </div> */}
            </section>
            
  );
};

export default Review;