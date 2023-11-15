import React from 'react';
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


const FourOhFour = () => {
    return (
        <Container fluid className="App">
          <Row style={{ paddingTop: 25, paddingBottom: 25, textAlign: 'center' }}>
            <Image src='/img/404.png'
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: 250, paddingBottom: 0 }} />
          </Row>
          <Row className='buttonContainer'>
          <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
          <button className='button'
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </Row>
        </Container>
      );
    }


export default FourOhFour;
