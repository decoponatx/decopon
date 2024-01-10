import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import EventCalendar from '../components/Events';
import Contact from '../components/Contact';
import News from '../components/News';
import MyCarousel from '../components/Carousel';
import EmailForm from '../components/EmailForm';
import About from '../components/About';
// import BannerAd from '../components/Banner';

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const closeMenu = () => setExpanded(false);

  return (
    <>
      <Navbar expand="false" style={{ backgroundColor: '#492C28' }} variant="dark" sticky="top" onToggle={handleToggle} expanded={expanded}>
        <Container>
          <Navbar.Toggle style={{ marginLeft: 'auto', border: 'none' }} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" style={{ textAlign: 'right', marginRight: '3em' }}>
              <Nav.Link href='https://shop.decoponatx.com' target='_blank' rel='noreferrer' onClick={closeMenu}>
                SHOP!
              </Nav.Link>
              <Nav.Link as={Link} to="info" smooth={false} offset={-200} onClick={closeMenu}>
                News and Updates
              </Nav.Link>
              <Nav.Link as={Link} to="info" smooth={false} offset={-200} onClick={closeMenu}>
                Events
              </Nav.Link>
              <Nav.Link href='/parties' onClick={closeMenu}>
                Party with Decopon
              </Nav.Link>
              <Nav.Link href='/instructions' onClick={closeMenu}>
                How to Decoden
              </Nav.Link>
              <Nav.Link as={Link} to="contact" smooth={false} offset={-200} onClick={closeMenu}>
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="top" smooth={false} offset={-500} onClick={closeMenu}>
                <i className="fas fa-arrow-up"></i> Back to Top
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="App">
        <Row id='top' style={{ paddingTop: 25, paddingBottom: 25 }}>
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
        </Row>
        <Row className="announcement">
          <a href="https://shop.decoponatx.com/" target="_blank" rel="noreferrer">
            --&gt;SHOP NOW OPEN!&lt;--
          </a>
        </Row>  
        <MyCarousel></MyCarousel>
        {/* <BannerAd></BannerAd> */}
        <Row id='info'>
          <Col>
          <News></News>
          </Col>
          <Col>
          <EventCalendar></EventCalendar>
          </Col>
        </Row>
        <Row id='contact'>
          <Col>
          <About></About>
          </Col>
          <Col>
          <Contact></Contact>
          </Col>
          <Col>
          <EmailForm></EmailForm>
          </Col>
        </Row>
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
