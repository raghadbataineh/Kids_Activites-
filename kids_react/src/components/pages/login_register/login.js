
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmail, setUserPassword, loginUser } from '../Redux/loginAction';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.loggedIn);

  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    dispatch(setUserEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    dispatch(setUserPassword(e.target.value));
  };

  const userSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {

        // Assuming the response contains a property 'userId'
        const userId = res.data;

        // Dispatch action to update state indicating user is logged in
        dispatch(loginUser());

        if (userId != 'Email not registered' && userId != 'False' && user) {
          // Save user ID in session storage
          sessionStorage.setItem('user_id', userId);
          const previousPath = sessionStorage.getItem('current');
          if (previousPath) {
        
            navigate(previousPath);

          }
          else {
            navigate('/')
          }

        }
        else if (userId == 'Email not registered') {
          alert('Email is not registerd');
        }
        else if (userId == 'False') {
          alert('Password is incorrect');
        }
      })



      .catch((error) => {
        console.error(error);
        // Handle error cases here
      });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                    <form onSubmit={userSubmit} className="mx-1 mx-md-4">
                      <div className="mb-4">
                        <label className="form-label">Email:</label>
                        <input
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Password:</label>
                        <input
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        {/* <button type="submit" className="cu_btn btn_1" style={{width:'170px'}}>
                          Login
                        </button> */}
                        <button type="submit" className="cu_btn btn_1" >
                          Login
                        </button>
                      </div>
                    </form>
                    <p className="text-center">
                      Do not have an account?  <Link className="sign-btn" to="/register" >Register</Link>
                    </p>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;







