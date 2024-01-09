import React, { useState, useEffect, useRef } from 'react';
import 'add-to-calendar-button-react';
import { Container, Row, Col } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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
      <br></br>
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

  const myEvents = [
    {
      id: 1,
      title: 'North Austin Food and Artisan Market',
      date: '2024-02-24',
      start: new Date('2024-02-24T10:00:00-06:00'),
      end: new Date('2024-02-24T14:00:00-06:00'),
      location: 'The Arboretum',
      address: '10000 Research Blvd., Austin, TX 78759',
      desc: 'Decopon at the Arboretum',
      googleMap: 'https://maps.app.goo.gl/SxVmRTEu66Q3qFmx6'
    },
    {
      id: 2,
      title: 'North Austin Food and Artisan Market',
      date: '2024-03-02',
      start: new Date('2024-03-02T10:00:00-06:00'),
      end: new Date('2024-03-02T14:00:00-06:00'),
      location: 'The Arboretum',
      address: '10000 Research Blvd., Austin, TX 78759',
      desc: 'Decopon at the Arboretum',
      googleMap: 'https://maps.app.goo.gl/SxVmRTEu66Q3qFmx6'
    },
    {
      id: 3,
      title: 'North Austin Food and Artisan Market',
      date: '2024-03-16',
      start: new Date('2024-03-16T10:00:00-06:00'),
      end: new Date('2024-03-16T14:00:00-06:00'),
      location: 'The Arboretum',
      address: '10000 Research Blvd., Austin, TX 78759',
      desc: 'Decopon at the Arboretum',
      googleMap: 'https://maps.app.goo.gl/SxVmRTEu66Q3qFmx6'
    },
    {
      id: 4,
      title: 'North Austin Food and Artisan Market',
      date: '2024-03-23',
      start: new Date('2024-03-23T10:00:00-06:00'),
      end: new Date('2024-03-23T14:00:00-06:00'),
      location: 'The Arboretum',
      address: '10000 Research Blvd., Austin, TX 78759',
      desc: 'Decopon at the Arboretum',
      googleMap: 'https://maps.app.goo.gl/SxVmRTEu66Q3qFmx6'
    },
    {
      id: 5,
      title: 'North Austin Food and Artisan Market',
      date: '2024-03-30',
      start: new Date('2024-03-30T10:00:00-06:00'),
      end: new Date('2024-03-30T14:00:00-06:00'),
      location: 'The Arboretum',
      address: '10000 Research Blvd., Austin, TX 78759',
      desc: 'Decopon at the Arboretum',
      googleMap: 'https://maps.app.goo.gl/SxVmRTEu66Q3qFmx6'
    }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const eventDetailsRef = useRef(null); // Ref for the event details div

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleClickOutside = (event) => {
    if (eventDetailsRef.current && !eventDetailsRef.current.contains(event.target)) {
      setSelectedEvent(null); // Close event details if click is outside
    }
  };

  useEffect(() => {
    // Add event listener when the component is mounted
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove event listener when the component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            style={{ height: 500, width: '100%' }}
            components={{ toolbar: CustomToolbar }}
          />

          {selectedEvent && (
            <>
              <Row ref={eventDetailsRef} className="content" key={selectedEvent.id}>
                <span className='eventDate'>{selectedEvent.title}</span>
                <Row className='webEventDetails'>
                  <strong>Location: </strong><a href={selectedEvent.googleMap} target='_blank' rel='noreferrer'>{selectedEvent.location}</a>
                  <br></br>
                  <strong>Time: </strong> <span>{selectedEvent.start.toLocaleTimeString()} - {selectedEvent.end.toLocaleTimeString()}</span><br></br>
                  <Row align='center'>
                    <AddToCalendarButtonComponent event={selectedEvent} />
                  </Row>
                </Row>
                <Row className='mobileEventDetails' style={{ display: 'none' }}>
                  <div>
                    <strong>Location: </strong><a href={selectedEvent.googleMap} target='_blank' rel='noreferrer'>{selectedEvent.location}</a>
                    <br></br>
                    <strong>Time: </strong> {selectedEvent.start.toLocaleTimeString()} - {selectedEvent.end.toLocaleTimeString()}<br></br>
                  </div>
                  <div>
                    <AddToCalendarButtonComponent event={selectedEvent} />
                  </div>
                </Row>
              </Row></>
          )}
        </Row>

      </Row>
    </Container>
  );
};

export default EventCalendar;
