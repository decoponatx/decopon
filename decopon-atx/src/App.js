import React from 'react';
// import Navbar from './components/nav/NavBar';
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import EventCalendar from './components/pages/Events';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
      <Container fluid className="App">
        <Row style={{ paddingTop: 25, paddingBottom: 25}}>
          <Image src='/img/logo-transparent.png'
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: 250, paddingBottom: 0 }} />
        </Row>
        <Row className='announcement'>
          Online Shop Coming Soon!
        </Row>
        <EventCalendar></EventCalendar>
        <Contact></Contact>
        <footer>
          <Row className="copyright">
            <p>&copy; {new Date().getFullYear()} Decopon LLC. All rights reserved.</p>
          </Row>
        </footer>
      </Container>
    </>
  );
}

export default App;