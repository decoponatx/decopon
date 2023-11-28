import React from 'react';
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import EventCalendar from '../components/Events';
import Contact from '../components/Contact';
import News from '../components/News';

const Home = () => {
  return (
    <>
      <Container fluid className="App">
        <Row style={{ paddingTop: 25, paddingBottom: 25 }}>
          <a href='https://decoponatx.myshopify.com/' target='_blank' rel='decopon'>
          <Image src='/img/logo-transparent.png'
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: 250, paddingBottom: 0 }} /></a>
        </Row>
        <Row className='announcement'>
          <a href='https://shop.decoponatx.com/' target='_blank' rel='decopon'>--&gt;SHOP NOW OPEN!&lt;-- </a>
        </Row>
        <News></News>
        <EventCalendar></EventCalendar>
        <Contact></Contact>
        <footer>
          <Row className="copyright">
            <p>&copy; {new Date().getFullYear()} Decopon LLC. All rights reserved.
              <br></br>
              <a style={{ fontSize: 'x-small' }} href='https://www.freeprivacypolicy.com/live/15f3f5eb-2fe2-46e4-85db-81c5c4df69df' target='_blank' rel='noreferrer'>Privacy Policy</a>
            </p>
          </Row>
        </footer>
      </Container>
    </>
  );
}

export default Home;