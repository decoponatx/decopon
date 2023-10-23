import React from 'react';
// import Navbar from './components/nav/NavBar';
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import EventCalendar from './components/pages/Events';
import Contact from './components/pages/Contact';
import SocialMediaHandles from './components/social/Handles';

function App() {
  const tiktokHandle = 'decoponatx';
  const instagramHandle = 'decoponatx';

  return (
    <Container className="App">
      <Row>
        <Image src='/public/img/logo-transparent.png'
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxHeight: 200 }} />
        {/* <Navbar /> */}
      </Row>
      
      <div>
        <EventCalendar></EventCalendar>
      </div>
      <div>
        <Contact></Contact>
      </div>
      <div>
      <SocialMediaHandles
          tiktokHandle={tiktokHandle}
          instagramHandle={instagramHandle}></SocialMediaHandles>
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