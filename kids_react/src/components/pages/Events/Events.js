import React, { useEffect, useState } from "react";
import Breadcrumb from "./Sections/breadcrumb";
import EventSection from "./Sections/event";
import EventList from "./Sections/eventlist";
import EventTimeCountdown from "./Sections/eventTime";
import axios from "axios";
import Review from '../EventDetail/Sections/review';
import { useParams } from "react-router-dom";

const Event = () => {
  const { id } = useParams(); // Assuming 'id' is the category ID
  const [events, setEvent] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // Construct the URL with the 'id' (category ID)
    axios.get(`http://127.0.0.1:8000/api/events/${id}`).then((response) => {

      setEvent(response.data.events);
      setCategory(response.data.category);
    });
  }, [id]); 

  return (
    <>
      <Breadcrumb />
      <EventSection category={category} />
      <EventList events={events} />
      <EventTimeCountdown />
      <Review />
      {/* <EventPart events={events} /> */}
    </>
  );
};
export default Event;
