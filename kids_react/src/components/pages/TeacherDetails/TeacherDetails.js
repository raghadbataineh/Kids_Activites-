// import React from "react";
import ContactPart from "./Sections/contact";
import Breadcrumb from "./Sections/breadcrumb";
import TeacherDetailsInfo from './Sections/details';

import React from 'react'

function Teacher_Details() {
  return (
    <div>
        <Breadcrumb />
        <TeacherDetailsInfo />
        <ContactPart />
    </div>
  )
}

export default Teacher_Details;