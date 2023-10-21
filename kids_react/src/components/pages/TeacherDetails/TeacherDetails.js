// import React from "react";

import EventSection from "./Sections/contact";
import Breadcrumb from "./Sections/breadcrumb";
import TeacherDetailsInfo from './Sections/details';


function Teacher_Details() {
  sessionStorage.setItem('current',window.location.pathname);
  return (
    <div>
        <Breadcrumb />
        <TeacherDetailsInfo />

        <EventSection />
    </div>
  )
}

export default Teacher_Details;


