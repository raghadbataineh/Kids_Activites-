import React, { useEffect , useState } from 'react';
import axios from "axios";
import { Link} from "react-router-dom";



const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/category")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (

  
    <section className="success_story section_padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="section_tittle_style_02">
            <h2 className="title wow fadeInDown" data-wow-delay=".3s">
              <span class="title_overlay_effect is_show"> Our Services</span>
            </h2>
            <p className="description wow fadeInDown" data-wow-delay=".3s">
              Kidzo mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
      {data.map((item) => (

        <div key={item.id} className="col-lg-4 col-sm-6 wow fadeInDown" data-wow-delay=".3s">
          <div className="page_blog_section_wrapper">
            <a href="#" className="blog_thumbnail">
            <img
  src={item.image}
  alt="#"
  className="img-fluid"
  style={{ width: '290px', height: '275px' }} // Adjust the width and height values as needed
/>
            </a>
          
            <h4 style={{ marginTop: '15px' }}>
              <a href="blog.html">{item.name}</a>
            </h4>
            <h5>Age <span>{item.age} yrs</span> </h5>

            <p style={{ marginBottom: '10px' }}> {item.short_description} </p>
            <Link to={`/events/${item.id}`} className="read_more_btn">
                
            Discover Events <img src="img/icon/arrow_left.svg" alt="#" />
            </Link>
          </div>
          <br></br>
        </div>
        ))}
      </div>
      
    </div>
    <div className="story_animation_1">
      <div data-parallax='{"x": 2, "y": 120, "rotateZ":0}'>
        <img src="img/icon/story_animation_1.png" alt="#" />
      </div>
    </div>
    <div className="story_animation_2">
      <div data-parallax='{"x": 10, "y": 100, "rotateZ":0}'>
        <img src="img/icon/story_animation_2.png" alt="#" />
      </div>
    </div>
    <div className="story_animation_3">
      <div data-parallax='{"x": 30, "y": 110, "rotateZ":0}'>
        <img src="img/icon/story_animation_3.png" alt="#" />
      </div>
    </div>
    <div className="story_animation_4">
      <div data-parallax='{"x": 5, "y": 105, "rotateZ":0}'>
        <img src="img/icon/story_animation_4.png" alt="#" />
      </div>
    </div>
    <div className="story_animation_5">
      <div data-parallax='{"x": 8, "y": 110, "rotateZ":0}'>
        <img src="img/icon/story_animation_5.png" alt="#" />
      </div>
    </div>
    <div className="story_animation_6">
      <div data-parallax='{"x": 15, "y": 115, "rotateZ":0}'>
        <img src="img/icon/story_animation_6.png" alt="#" />
      </div>
    </div>
  </section>
  );
};

export default Services;
