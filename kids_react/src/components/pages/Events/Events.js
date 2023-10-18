import React, { useEffect, useState } from 'react';
import Breadcrumb from './Sections/breadcrumb';
import EventSection from './Sections/event';
import EventList from './Sections/eventlist';
import EventTimeCountdown from './Sections/eventTime';
import EventPart from './Sections/services';
import axios from 'axios';

const Event = () => {
    const [events, setEvent] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/events/1').then((response) => {
            setEvent(response.data);
        });
    }, []);
    return (
        <>
            <Breadcrumb />
            <EventSection  events={events}  />
            <EventList events={events} />
            <EventTimeCountdown />
            {/* <EventPart events={events} /> */}

        </>
    );
}
export default Event;