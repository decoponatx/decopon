import React, {useState, useEffect} from 'react';
import 'add-to-calendar-button-react'; 
import { Container, Row, Col, Image } from 'react-bootstrap';

const EventCalendar = () => {
  const data = [
    { id: 1, eventDate: 'Saturday December 2, 2023', eventLocation: 'Hill Country Galleria', eventTime:'11a - 7p', date: '2023-12-02', eventPhoto:'../../img/event0.png', googleMap: 'https://maps.app.goo.gl/uWZRdbxofoviGrCt6', eventName: 'Bee Cave Holiday Arts Market', eventWeb:'https://www.hillcountrygalleria.com/event/holiday-arts-market/2145576115', blurb: 'We are thrilled to welcome you to our inaugural event! Join us for some decoden crafting and explore our festive holiday kits.' },
    { id: 2, eventDate: 'Saturday December 16, 2023', eventLocation: 'Hill Country Galleria', eventTime:'11a - 7p', date: '2023-12-16', eventPhoto:'../../img/event1.png', googleMap: 'https://maps.app.goo.gl/uWZRdbxofoviGrCt6', eventName: 'Bee Cave Holiday Arts Market', eventWeb:'https://www.hillcountrygalleria.com/event/holiday-arts-market/2145577009', blurb: 'Make sure to swing by our booth for an exciting decoden experience and grab a kit at a special discount!' },
    { id: 3, eventDate: 'Saturday December 23, 2023',eventLocation: 'Hill Country Galleria', eventTime:'11a - 7p', date: '2023-12-23', eventPhoto:'../../img/event2.png', googleMap: 'https://maps.app.goo.gl/uWZRdbxofoviGrCt6' , eventName: 'Bee Cave Holiday Arts Market', eventWeb:'https://www.hillcountrygalleria.com/event/holiday-arts-market/2145577011', blurb: 'Wrap up your festive shopping spree by visiting our booth for the perfect holiday presents.' }
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Handler to set state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set up event listener for resize events
    window.addEventListener('resize', handleResize);

    // Call the handler immediately to set the initial state based on current window size
    handleResize();

    // Clean up event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <Container>
      <Row className="component">
        <Col className="title">
          <h1 className='subtitle'>Events</h1>
        </Col>
        {data.map((row) => (
          <Row className="content" key={row.id}>
              <span className='eventDate'>{row.eventDate}</span>
            <Row className='eventDetails'>
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
                  {...(isMobile ? { hideTextLabelButton: true } : {})}
                />
                </Row>
              </Col>
            </Row>
            </Row>
        ))}
      </Row>
    </Container>
  );
};

export default EventCalendar;
