import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import { NavLink , Link } from "react-router-dom";


const Navbar = () => {
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
    <header className="header_part">
      <div className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img
                    src="img/logo.png"
                    srcSet="img/ratina_logo.png 2x"
                    alt="Kidzo"
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
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Organizers
                      </a>
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
                  <a href="contact.html" className="cu_btn btn_1">
                    Log in
                  </a>
                  <a href="contact.html" className="cu_btn btn_1">
                    Register
                  </a>
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
