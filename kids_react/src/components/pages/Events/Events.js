import React, { useEffect, useState } from "react";
import Breadcrumb from "./Sections/breadcrumb";
import EventSection from "./Sections/event";
import EventList from "./Sections/eventlist";
import EventTimeCountdown from "./Sections/eventTime";
import axios from "axios";
import Review from '../EventDetail/Sections/review';
import { useParams } from "react-router-dom";

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const { id } = useParams(); 
  const [events, setEvent] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    sessionStorage.setItem('current',window.location.pathname);
    // Construct the URL with the 'id' (category ID)
    axios.get(`http://127.0.0.1:8000/api/events/${id}`).then((response) => {

      setEvent(response.data.events);
      setCategory(response.data.cat);
    });
  }, [id]); 

  return (
    <>
      <Breadcrumb />
      <EventSection category={category} />
      <EventList  />
      {/* <EventTimeCountdown /> */}
      <Review />
      {/* <EventPart events={events} /> */}
    </>
  );
};
export default Event;
