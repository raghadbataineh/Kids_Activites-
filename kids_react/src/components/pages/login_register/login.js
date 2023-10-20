// import React, { useState, useEffect } from 'react';
// import axios from 'axios';





// function Login() {
//   const [user, setUser] = useState({
//     email: '',
//     password: '',

//   });
//   const usersubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('_token', '{{ csrf_token() }}');
//     formData.append('email', user.email);
//     formData.append('password', user.password);


//     axios({
//       method: 'post', // Ensure you are using POST method here
//       url: "http://127.0.0.1:8000/api/login",
//       data: formData,
//     })
//       .then((res) => {
//         console.log(res);

//       })
//       .catch((error) => {
//         console.error(error);
//         // Handle error cases here
//       });
//   }
//   return (
//     <section className="vh-100" style={{ backgroundColor: '#eee' }}>
//       <div className="container h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-lg-12 col-xl-11">
//             <div className="card text-black" style={{ borderRadius: '25px' }}>
//               <div className="card-body p-md-5">
//                 <div className="row justify-content-center">
//                   <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                     <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
//                     <form onSubmit={usersubmit} className="mx-1 mx-md-4">
//                       <div className="d-flex flex-row align-items-center mb-4">

//                         <div className="form-outline flex-fill mb-0">
//                           <label className="form-label" htmlFor="form3Example1c">Email</label>
//                           <input value={user.email} name='email' onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
//                             type="text" id="form3Example1c" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="d-flex flex-row align-items-center mb-4">

//                         <div className="form-outline flex-fill mb-0">
//                           <label className="form-label" htmlFor="form3Example1c">Password</label>
//                           <input value={user.password} name='password' onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
//                             type="password" id="form3Example1c" className="form-control" />
//                         </div>
//                       </div>


//                       <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                         <button type="submit" className="btn btn-primary btn-lg">Login</button>
//                       </div>
//                     </form>
//                   </div>
//                   <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                       className="img-fluid" alt="Sample image" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

// }

// export default Login;




import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmail, setUserPassword, loginUser } from '../Redux/loginAction';
import axios from 'axios';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.loggedIn);
  

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
       
        if (userId && user) {
            // Save user ID in session storage
            sessionStorage.setItem('user_id', userId);
            
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
                        <button type="submit" className="btn btn-primary btn-lg">
                          Login
                        </button>
                      </div>
                    </form>
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







