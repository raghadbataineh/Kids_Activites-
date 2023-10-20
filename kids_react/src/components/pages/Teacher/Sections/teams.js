import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
   

    axios.get(`http://localhost:8000/api/orgnizers`).then(({ data }) => {
      setTeamMembers(data);
    });
  }, []);

  return (
    <section className="team_section single_page_team section_padding">
      <div className="container">
        <div className="row">
          {/* Repeat the above block for other team members */}
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single_team_section">
                <a
                  href={`teacher?id=${member.id}`}
                  className="d-block teacher_profile_img"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid"
                  />
                </a>
                <a href="/teacher" className="teacher_category">
                  {member.role}
                </a>
                {/* <h4>
                                    <a href={`teacherd?id=${member.id}`}>
                                        {member.name}
                                    </a>
                                </h4> */}
                <h4>
                  <Link to={`/teacher_details/${member.id}`}>{member.name}</Link>
                </h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="team_animation_1">
        <div data-parallax='{"x": 2, "y": 120, "rotateZ": 0}'>
          <img src="img/icon/story_animation_1.png" alt="#" />
        </div>
      </div>
      <div className="team_animation_2">
        <div data-parallax='{"x": 10, "y": 100, "rotateZ": 0}'>
          <img src="img/icon/story_animation_2.png" alt="#" />
        </div>
      </div>
      <div className="team_animation_3">
        <div data-parallax='{"x": 30, "y": 110, "rotateZ": 0}'>
          <img src="img/icon/story_animation_3.png" alt="#" />
        </div>
      </div>
      <div className="team_animation_4">
        <div data-parallax='{"x": 5, "y": 105, "rotateZ": 0}'>
          <img src="img/icon/team_animation.png" alt="#" />
        </div>
      </div>
      <div className="team_animation_5">
        <div data-parallax='{"x": 8, "y": 110, "rotateZ": 0}'>
          <img src="img/icon/story_animation_5.png" alt="#" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
