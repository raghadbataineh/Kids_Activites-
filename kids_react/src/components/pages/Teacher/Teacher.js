// import React from "react";
import ContactPart from "./Sections/contact";
import Breadcrumb from "./Sections/breadcrumb";
import TeamSection from "./Sections/teams";

import React from 'react'

function Teacher() {
  sessionStorage.setItem('current',window.location.pathname);
  return (
    <div>
        <Breadcrumb />
        <TeamSection />
        <ContactPart />
    </div>
  )
}

export default Teacher;