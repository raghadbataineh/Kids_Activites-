// import React from 'react';
import { useParams } from "react-router-dom";

import axios from "axios";
import React, { useState, useEffect } from "react";

const TeacherDetailsInfo = () => {
  // const [teamMembers, setTeamMembers] = useState([]);
  const { id } = useParams(); // Get the id parameter from the URL
  const [teacher, setTeacher] = useState(); //
  const [events, setEvents] = useState([]);

  // const [event, setEvent] = useState();

  useEffect(() => {
 const team =   axios
 axios
 .get(`http://localhost:8000/api/orgnizers/${id}`)
 .then((response) => {
   setTeacher(response.data.orgnizer); // Assuming "orgnizer" is the key for organizer data
   setEvents(response.data.events);
      })
      .catch((error) => {
        console.error("Error fetching teacher details:", error);
      });
  }, [id]); // Include id as a dependency to re-fetch data when the id changes
 
 

  if (!teacher ) {
    return <div>Loading...</div>;
  }

  return (
    <section className="teacher_details_info section_padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-5 wow fadeInUp" data-wow-delay=".3s">
            <div className="profile_img pr-lg-3">
              {/* <img src= {teacher.image} 

                         alt="#" className="img-fluid" /> */}
              
              <img
                src={`/images/${teacher.image}`}
                alt="#j"
                className="img-fluid "
              />
               <br></br>
          <br></br>
            </div>
          </div>
         
          <div className="col-lg-5 col-md-7 wow fadeInUp" data-wow-delay=".5s">
            <div className="profile_content mt-5 mt-lg-0">
              <h2 className="mb-0 kid_title">
                <span className="title_overlay_effect">{teacher.name}</span>
              </h2>

              <a href="#" className="teacher_category">
                {teacher.role}
              </a>
              <ul className="teacher_profile_info">
                <li>
                  {" "}
                  <span>Experience:</span> {teacher.experience_year} Years
                </li>
                <li>
                  {" "}
                  <span>Email:</span> {teacher.email}
                </li>
                <li>
                  {" "}
                  <span>Phone:</span> {teacher.phone}
                </li>
              </ul>
              <div className="teacher_social_info">
                <a href={teacher.facebook}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={teacher.instagram}>
                  <i className="ti-instagram"></i>
                </a>
                <a href="https://linkedin.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-100">
          <div className="col-lg-12">
            <h2
              className="tittle wow fadeInUp kid_title mb-5"
              data-wow-delay=".3s"
            >
              <span className="title_overlay_effect">Personal Experience</span>
            </h2>
            <p className="description"> <strong>{teacher.experience_description}</strong> </p>
            <p className="description">
              Our programs ensure that children in our care everywhere have
              access to the highest quality of international.We have strict
              criteria when selecting our teachers; they must be native English
              speakers with higher degrees and most importantly.
            </p>
          </div>
        </div>
        <div className="row mt-100">
          <div className="col-lg-12">
          <br></br>
          <br></br>

            <h2
              className="tittle wow fadeInUp kid_title mb-5"
              data-wow-delay=".3s"
            >
              <span className="title_overlay_effect">Work Summary</span>
            </h2>
            <div className="work_summary">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div
                    className="work_summary_item wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <img src="/img/icon/icon_10.svg" alt="#ho" />
                    <h2>
                      <span className="counter">100</span>%
                    </h2>
                    <p>Job Success</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div
                    className="work_summary_item wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img src="/img/icon/icon_11.svg" alt="#hy" />
                    <h2>
                      <span className="counter">108</span>
                    </h2>
                    <p>Completed Jobs</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div
                    className="work_summary_item wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <img src="../../../../img/icon/icon_12.svg" alt="#" />
                    <h2>
                      <span className="counter">2500</span>
                    </h2>
                    <p>Hours Worked</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div
                    className="work_summary_item wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <img src="../../../../img/icon/icon_13.svg" alt="#" />
                    <h2>
                      $<span className="counter">100</span>k+
                    </h2>
                    <p>Total Earned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-100">
                    <div className="col-lg-12">
                        <br></br>
                        <br></br>

                        <h2 className="tittle wow fadeInUp kid_title mb-5" data-wow-delay=".3s">
                            <span className="title_overlay_effect">My Achievements</span>
                        </h2>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single_achievement">
                                    <img src="./../../../img/icon/achievement_1.png" alt="" />
                                    <img src="/img/icon/achivement_1.svg" alt="" />
                                    <h5 className="font-weight-bolder">Social Action</h5>
                                    <br></br>
                                    <p> unlock young people’s vision of themselves as active citizens with the confidence, skills and pride in their
                                         communities needed to contribute fully to society.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single_achievement">
                                <img src="/img/icon/achivement_2.svg" alt="" />
                                    <h5 className="font-weight-bolder">Educational Achievement</h5>
                                    <br></br>
                                    <p>My  work is embedded in the curriculum, rooted in effective pedagogy 
                                        and aligned to Ofsted expectations and so contributes to reducing the achievement gap.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single_achievement">
                                <img src="/img/icon/achivement_3.svg" alt="" />
                                    <h5 className="font-weight-bolder">Wellbeing</h5>
                                    <br></br>
                                    <p>improves self-esteem and boosts positive feelings of belonging,
                                         purpose and trust.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
      </div>
      <div className="teacher_details_animation_1">
        <div data-parallax='{"x": 2, "y": 120, "rotateZ": 0}'>
          <img src="../../../../img/icon/story_animation_5.png" alt="#" />
        </div>
      </div>
      <div className="teacher_details_animation_2">
        <div data-parallax='{"x": 10, "y": 100, "rotateZ": 0}'>
          <img src="../../../../img/icon/event_6.png" alt="#" />
        </div>
      </div>
      <div className="teacher_details_animation_3">
        <div data-parallax='{"x": 30, "y": 110, "rotateZ": 0}'>
          <img src="../../../../img/icon/icon_8.png" alt="#" />
        </div>
      </div>
      <div className="teacher_details_animation_4">
        <div data-parallax='{"x": 5, "y": 105, "rotateZ": 0}'>
          <img src="../../../../img/icon/contact_icon.png" alt="#" />
        </div>
      </div>
      <div className="teacher_details_animation_5">
        <div data-parallax='{"x": 8, "y": 110, "rotateZ": 0}'>
          <img src="../../../../img/icon/story_animation_5.png" alt="#" />
        </div>
      </div>
      <div className="teacher_details_animation_6">
        <div data-parallax='{"x": 8, "y": 110, "rotateZ": 0}'>
          <img src="../../../../img/icon/icon_9.png" alt="#" />
        </div>
      </div>
    </section>
    
    
  );
};

export default TeacherDetailsInfo;
