import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });
  const [error, setError] = useState([]);
  const usersubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('confirmpassword', user.confirmpassword);


    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/sign',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((res) => {
        console.log(res);
        alert('Successfully registered!');
navigate('/login');
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.status === 422) {

            // Extract validation errors from the response and format them
            const errorMessages = Object.values(error.response.data.errors).flat().join('\n');

            // alert(errorMessages);
            setError(error.response.data.errors)
          } else {
            console.error('Server Error:', error.response.data);
            alert('Error occurred during registration.');
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No Response:', error.request);
          alert('No response from the server.');
        } else {
          // Something happened in setting up the request that triggered an error
          console.error('Error:', error.message);
          alert('Error occurred during registration.');
        }
      });

  }
  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <div style={{ color: 'red' }}>
                      {error.map((rev, index) => (
                        <div key={index}>
                          {++index} {" "}
                          {rev}
                          <br />
                        </div>
                      ))}
<br></br>
                    </div>
                    <form onSubmit={usersubmit} className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">First Name</label>
                          <input value={user.first_name} name='first_name' onChange={(e) => setUser((prev) => ({ ...prev, first_name: e.target.value }))}
                            type="text" id="form3Example1c" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Last Name</label>
                          <input value={user.last_name} name='last_name' onChange={(e) => setUser((prev) => ({ ...prev, last_name: e.target.value }))}
                            type="text" id="form3Example1c" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Email</label>
                          <input value={user.email} name='email' onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
                            type="email" id="form3Example1c" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Password</label>
                          <input value={user.password} name='password' onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                            type="password" id="form3Example1c" className="form-control" />
                        </div>
                      </div>


                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          {/* <button type="submit" className="btn btn-primary btn-lg">Register</button> */}
                          <button type="submit" className="cu_btn btn_1" >
                            Register
                          </button>
                        </div>

                    </form>
                    <p className="text-center">
                      Already Registered? <Link className="sign-btn" to="/login">Sign in</Link>
                    </p>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image" />
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

export default Register;