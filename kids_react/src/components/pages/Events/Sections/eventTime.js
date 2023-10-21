// import React, { useEffect } from 'react';

// const EventTimeCountdown = () => {
//     useEffect(() => {
//         // Function to initialize the countdown timer
//         const initializeCountdown = () => {
//             const countdownDate = new Date('2022/12/31 23:33:53').getTime();

//             const countdownTimer = setInterval(() => {
//                 const now = new Date().getTime();
//                 const timeRemaining = countdownDate - now;

//                 if (timeRemaining <= 0) {
//                     clearInterval(countdownTimer);
//                 } else {
//                     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//                     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//                     const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//                     const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//                     document.querySelector('.dl_days').innerText = days;
//                     document.querySelector('.dl_hours').innerText = hours;
//                     document.querySelector('.dl_minutes').innerText = minutes;
//                     document.querySelector('.dl_seconds').innerText = seconds;
//                 }
//             }, 1000);
//         };

//         initializeCountdown();
//     }, []);

//     return (
//         <section className="event_time_countdown section_padding">
//             <div className="container custom_container">
//                 <div className="row justify-content-between align-items-center">
//                     <div className="col-xl-4 col-md-5 wow fadeInUp" data-wow-delay=".3s">
//                         <div className="time_countdown_content">
//                             {/* <img src="img/location.png" alt="#" /> */}
//                             {/* <h4>Count Every Second for next Event</h4> */}
//                         </div>
//                     </div>
//                     <div className="col-xl-6 col-md-7 wow fadeInUp" data-wow-delay=".4s">
//                         <div className="event_timer">
//                             <div className="dl_countdown_wrapper">
//                                 <div className="dl_countdown_content" data-Date="2022/12/31 23:33:53" data-endText="Offer ended">
//                                     <div className="dl_countdown_running">
//                                         <div className="dl_countdown_inner_wrapper">
//                                             <div className="dl_countdown_inner">
//                                                 <div className="dl_countdown">
//                                                     <span className="dl_days"></span>
//                                                     {/* <p className="dl_desc">Days</p> */}
//                                                 </div>
//                                             </div>
//                                             <div className="dl_countdown_inner">
//                                                 <div className="dl_countdown">
//                                                     <span className="dl_hours"></span>
//                                                     {/* <p className="dl_desc">Hours</p> */}
//                                                 </div>
//                                             </div>
//                                             <div className="dl_countdown_inner">
//                                                 <div className="dl_countdown">
//                                                     <span className="dl_minutes"></span>
//                                                     {/* <p className="dl_desc">Minutes</p> */}
//                                                 </div>
//                                             </div>
//                                             <div className="dl_countdown_inner">
//                                                 <div className="dl_countdown">
//                                                     <span className="dl_seconds"></span>
//                                                     {/* <p className="dl_desc">Seconds</p> */}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default EventTimeCountdown;
