import React from 'react';
// import Navbar from './components/nav/NavBar';
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import EventCalendar from './components/pages/Events';
import Contact from './components/pages/Contact';

function App() {


  return (
    <Container className="App">
      <Row style={{paddingTop: 25}}>
        <Image src='/img/logo-transparent.png'
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxHeight: 200, paddingBottom: 0 }} />
        {/* <Navbar /> */}
      </Row>
      <div className='component'>
        <div className='title'>
          <h1 className='subtitle'>Shop</h1>
        </div>
        <div className='content'>COMING SOON!</div>
      </div>
      <div>
        <EventCalendar></EventCalendar>
      </div>
      <div>
        <Contact></Contact>
      </div>
  
      <footer>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Decopon LLC. All rights reserved.</p>
      </div>
    </footer>

    </Container>
  );
}

export default App;