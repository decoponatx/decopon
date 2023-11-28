import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import EventCalendar from '../components/Events';
import Contact from '../components/Contact';
import News from '../components/News';

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const closeMenu = () => setExpanded(false);

  return (
    <>
      <Navbar expand="false" style={{ backgroundColor: '#492C28' }} variant="dark" sticky="top">
        <Container>
          <Navbar.Toggle style={{ marginLeft: 'auto', border: 'none' }} aria-controls="responsive-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" onClick={closeMenu}>
            <Nav.Link href='https://shop.decoponatx.com' target='_blank' rel='noreferrer'>
                SHOP!
              </Nav.Link>
              <Nav.Link as={Link} to="news" smooth={false}>
                News and Updates
              </Nav.Link>
              <Nav.Link as={Link} to="events" smooth={false}>
                Events
              </Nav.Link>
              <Nav.Link as={Link} to="contact" smooth={false}>
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="top" smooth={false}>
              <i class="fas fa-arrow-up"></i> Back to Top
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="App">
        <Row id="top" style={{ paddingTop: 25, paddingBottom: 25 }}>
          <a href="https://shop.decoponatx.com/" target="_blank" rel="noreferrer">
            <Image
              src="/img/logo-transparent.png"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: 250,
                paddingBottom: 0,
              }}
            />
          </a>
        </Row>
        <Row className="announcement">
          <a href="https://shop.decoponatx.com/" target="_blank" rel="noreferrer">
            --&gt;SHOP NOW OPEN!&lt;--
          </a>
        </Row>
        <Row id='news'></Row>
        <News></News>
        <Row id='events'></Row>
        <EventCalendar></EventCalendar>
        <Row id='contact'></Row>
        <Contact></Contact>
        <footer>
          <Row className="copyright">
            <p>
              &copy; {new Date().getFullYear()} Decopon LLC. All rights
              reserved.
              <br></br>
              <a
                style={{ fontSize: 'x-small' }}
                href="https://www.freeprivacypolicy.com/live/15f3f5eb-2fe2-46e4-85db-81c5c4df69df"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </p>
          </Row>
        </footer>
      </Container>
    </>
  );
};

export default Home;
