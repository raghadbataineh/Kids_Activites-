import React from 'react';
import Breadcrumbs from './Sections/breadcrumb';
import Eventdetails from './Sections/eventdetails';
import CtaPart from './Sections/cta';
import Review from './Sections/review';



const EventDetails = () => {
  return (
    <div>
     <Breadcrumbs />
     <Eventdetails />
     <CtaPart />
     <Review/>
    </div>
   
  );
};

export default EventDetails;

