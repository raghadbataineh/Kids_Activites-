import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import '../../css/animate.css';
// import '../../css/style.css';
// import '../../css/bootstrap.min.css';
import image from '../../img/logo.png'

const Navbar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/category")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    if (sessionStorage.getItem('user_id') == null) {

      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
  }, []);
  const logout = () => {
    sessionStorage.clear();
    navigate('/');
  }
  return (
    <header className="header_part">
      <div className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="index.html">
                  <img
                    src={image}
                    srcSet="images/logo3.JPG"
                    alt="Kidzo" width="189px"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarContent"
                  aria-controls="navbarContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Nav.Link
                        as={NavLink}
                        exact
                        to="/"
                        activeClassName="active"
                      >
                        Home{" "}
                      </Nav.Link>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Events
                      </a>
                      <div className="dropdown-menu">
                        {data.map((item) => (
                          <Link
                            key={item.id}
                            className="dropdown-item"
                            Link to={`/events/${item.id}`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="to=">
                        Organizers
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <Nav.Link
                        as={NavLink}
                        exact
                        to="teacher"
                        activeClassName="active"
                      >
                        Organizer{" "}
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={NavLink}
                        exact
                        to="About"
                        activeClassName="active"
                      >
                        About{" "}
                      </Nav.Link>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                  {!isLoggedIn ? (
                    <div>
                      <a href="login" className="cu_btn btn_1">
                        Log in
                      </a>
                      <a href="register" className="cu_btn btn_1">
                        Register
                      </a></div>) :
                    (
                      <div>
                        <a onClick={logout} href="" className="cu_btn btn_1">
                          Logout
                        </a>
                      </div>
                    )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
