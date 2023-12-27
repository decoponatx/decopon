import React from 'react';
import 'add-to-calendar-button-react'; 
import { Container, Row, Col, Image } from 'react-bootstrap';

const EventCalendar = () => {
  const data = [
    // { id: 1, eventDate: 'Saturday December 9, 2023', eventLocation: 'Hill Country Galleria', eventTime:'11a - 7p', date: '2023-12-02', eventPhoto:'../../img/event0.png', googleMap: 'https://maps.app.goo.gl/uWZRdbxofoviGrCt6', eventName: 'Bee Cave Holiday Arts Market', eventWeb:'https://www.hillcountrygalleria.com/event/holiday-arts-market/2145578344', blurb: 'We are happy to be returning to the market this weekend! Thanks for all your support and we hope to see you there!' },
  ];

  return (
    <Container>
      <Row className="component">
        <Col className="title">
          <h1 className='subtitle'>Events</h1>
        </Col>
        {data.map((row) => (
          <Row className="content" key={row.id}>
              <span className='eventDate'>{row.eventDate}</span>
            <Row className='webEventDetails'>
              <Col xs={6}>
                <Image className='eventPhoto' src={row.eventPhoto}></Image>
              </Col>
              <Col xs={6}>
                <strong>{row.eventName}</strong>
                <br></br>
                <em>{row.blurb} <a href={row.eventWeb} target='_blank' className='eventWeb' rel='noreferrer'>(more info)</a></em>
                <br></br>
                <strong>Location: </strong><a href={row.googleMap} target='_blank' rel='noreferrer'>{row.eventLocation}</a>
                <br></br>
                <strong>Time: </strong>{row.eventTime}<br></br>
              <Row align='center'>
              <add-to-calendar-button
                  name="Visit the Decopon Booth at the Bee Cave Holiday Arts Market"
                  startDate={row.date}
                  startTime="11:00"
                  endTime="19:00"
                  timeZone="America/Chicago"
                  location="12700 Hill Country Blvd, Bee Cave, TX 78738"
                  description={row.eventWeb}
                  options="iCal"
                  lightMode="bodyScheme"
                  hideCheckmark={true}
                  hideBackground={true}
                  buttonStyle="round"
                  iCalFileName="decopon-event"
                  styleLight="--btn-background: #FEA751; --btn-text: #fff; --font: 'SlowRiver', sans-serif;"
                />
                </Row>
              </Col>
            </Row>
            <Row className='mobileEventDetails' style={{display: 'none'}}>
              <div>
              <Image className='eventPhoto' src={row.eventPhoto}></Image>
              </div>
              <div>
              <strong><a href={row.eventWeb} target='_blank' rel='noreferrer'>{row.eventName}</a></strong>
                <br></br>
                <em>{row.blurb}</em>
                <br></br><br></br>
                <strong>Location: </strong><a href={row.googleMap} target='_blank' rel='noreferrer'>{row.eventLocation}</a>
                <br></br>
                <strong>Time: </strong>{row.eventTime}<br></br>
              </div>
              <div> 
              <add-to-calendar-button
                  name="Visit the Decopon Booth at the Bee Cave Holiday Arts Market"
                  startDate={row.date}
                  startTime="11:00"
                  endTime="19:00"
                  timeZone="America/Chicago"
                  location="12700 Hill Country Blvd, Bee Cave, TX 78738"
                  description={row.eventWeb}
                  options="iCal"
                  lightMode="bodyScheme"
                  hideCheckmark={true}
                  hideBackground={true}
                  buttonStyle="round"
                  iCalFileName="decopon-event"
                  styleLight="--btn-background: #FEA751; --btn-text: #fff; --font: 'SlowRiver', sans-serif;"
                />
                </div>
            </Row>
            </Row>
        ))}
      </Row>
    </Container>
  );
};

export default EventCalendar;
