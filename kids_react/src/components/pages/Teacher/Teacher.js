// import React from "react";
import CtaSection from "./Sections/contact";
import Breadcrumb from "./Sections/breadcrumb";
import TeamSection from "./Sections/teams";

import React from 'react'

function Teacher() {
  sessionStorage.setItem('current',window.location.pathname);
  return (
    <div>
        <Breadcrumb />
        <TeamSection />
        <CtaSection />
    </div>
  )
}

export default Teacher;