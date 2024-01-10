import React, { useState, useEffect, useRef } from 'react';
import 'add-to-calendar-button-react';
import { Container, Row, Col } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import eventsData from './json/events.json'; // Adjust the path as needed

const localizer = momentLocalizer(moment);

const formatTime = (date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

const CustomToolbar = ({ onNavigate, label }) => {
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate('PREV')}>Back</button>
        <button type="button" onClick={() => onNavigate('TODAY')}>Today</button>
        <button type="button" onClick={() => onNavigate('NEXT')}>Next</button>
      </span>
      <span className="rbc-toolbar-label"><strong>{label}</strong></span>
    </div>
  );
};

const AddToCalendarButtonComponent = ({ event }) => {
  if (!event) return null;

  const startTime = formatTime(event.start);
  const endTime = formatTime(event.end);

  return (
    <add-to-calendar-button
      name={event.desc}
      startDate={event.date}
      startTime={startTime}
      endTime={endTime}
      timeZone="America/Chicago"
      location={event.address}
      options="iCal"
      lightMode="bodyScheme"
      hideCheckmark={true}
      hideBackground={true}
      buttonStyle="round"
      iCalFileName="decopon-event"
      styleLight="--btn-background: #FEA751; --btn-text: #fff; --font: 'SlowRiver', sans-serif;"
    />
  );
};

const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const eventDetailsRef = useRef(null); 

  // Convert the events data from JSON
  const myEvents = eventsData.map(event => ({
    ...event,
    start: new Date(`${event.date}T${event.startTime}-06:00`),
    end: new Date(`${event.date}T${event.endTime}-06:00`)
  }));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (eventDetailsRef.current && !eventDetailsRef.current.contains(event.target)) {
        setSelectedEvent(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  return (
    <Container>
      <Row className="component">
        <Col className="title">
          <h1 className='subtitle'>Events</h1>
        </Col>
        <Row className='content'>
          <Calendar
            localizer={localizer}
            events={myEvents}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleEventSelect}
            style={{ height: 500 }}
            components={{ toolbar: CustomToolbar }}
          />

          {selectedEvent && (
            <div ref={eventDetailsRef} className="event-details">
              <h3>{selectedEvent.title}</h3>
              <p>Location: <a href={selectedEvent.googleMap} target='_blank' rel='noreferrer'>{selectedEvent.location}</a></p>
              <p>Time: {selectedEvent.start.toLocaleTimeString()} - {selectedEvent.end.toLocaleTimeString()}</p>
              <AddToCalendarButtonComponent event={selectedEvent} />
            </div>
          )}
        </Row>
      </Row>
    </Container>
  );
};

export default EventCalendar;
