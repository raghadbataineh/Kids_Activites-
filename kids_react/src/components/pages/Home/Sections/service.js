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
            <p className="description wow fadeInDown" data-wow-delay=".3s" >
            KidZone your go-to destination for organizing and discovering exciting and educational events for kids of all ages. 
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
  style={{ width: '300px', height: '275px' }} // Adjust the width and height values as needed
/>
            </a>
          
          <center> <h4 style={{ marginTop: '15px' }}>
              <Link to={`/events/${item.id}`}>{item.name}</Link>
            </h4>
            <h5 style={{  color: '#626472', fontSize: '18px' }} >Age <span>{item.age} yrs</span> </h5>

            <p style={{ marginBottom: '10px', color: '#626472', fontSize: '18px' }}>{item.short_description}</p>

            <Link to={`/events/${item.id}`} className="read_more_btn">
                
            Discover Events <img src="img/icon/arrow_left.svg" alt="#" />
            </Link> </center> 
          </div>
          <br></br>
        </div>
        ))}
      </div>
      
    </div>
  </section>
  );
};
export default Services;

