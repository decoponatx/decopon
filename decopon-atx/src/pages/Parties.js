import React, { useState }  from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Email from '../components/social/Email';

const Parties = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const closeMenu = () => setExpanded(false);

    const packages = [
        {
            name: "Basic",
            price: "starts at $300",
            features: "Includes one basic craft item per person. $10 for each additional person."
        },
        {
            name: "Premium",
            price: "starts at $500",
            features: "Offers an unlimited craft item bar and special faux cream color combos. $15 for each additional person."
        },
        {
            name: "Bespoke",
            price: "Price on request",
            features: "A custom-designed experience with themed charms and craft items. Price varies for additional people."
        }
    ];


    return (
        <>
        <Navbar expand="false" style={{ backgroundColor: '#492C28' }} variant="dark" sticky="top" onToggle={handleToggle} expanded={expanded}>
        <Container>
          <Navbar.Toggle style={{ marginLeft: 'auto', border: 'none' }} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" style={{ textAlign: 'right', marginRight: '3em' }}>
              <Nav.Link href='/' to="top" smooth={false} offset={-500} onClick={closeMenu}>
                <i className="fas fa-arrow-up"></i> Back to Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <div className='component'>
            <div className='title'>
                <h1 className='subtitle'>Party with Decopon</h1>
            </div>
            <div className='content'>
                <p style={{ padding: 10 }}>Enhance your next event with our decoden party packages! They're great for anyone looking to add a creative and unique touch to their party. Fun for all ages!</p>
                <div className='subComponent'>Packages</div>
                <p className='content'>
                    Each package is tailored for 10 guests, with additional charges varying by package for extra attendees. All options include an extensive charm bar, a diverse range of faux cream colors, and setup and teardown services. 
                    <br></br>
                    <table>
                    <thead>
                        <tr>
                            <th>Package Name</th>
                            <th>Price</th>
                            <th>Features</th>

                        </tr>
                    </thead>
                    <tbody>
                        {packages.map((pkg, index) => (
                            <tr key={index}>
                                <td>{pkg.name}</td>
                                <td>{pkg.price}</td>
                                <td>{pkg.features}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br>
                    For those interested in the Bespoke package, we recommend booking at least two months in advance. For all other packages, we require advance bookings of 2 weeks. To secure your booking, a <strong>25% non-refundable deposit</strong> is required. 
                    <br></br><br></br>
                    
                    <strong>Cancellation Policy: </strong>We recognize that plans can change, so we provide the flexibility to reschedule without any additional cost, provided we receive at least one week's notice. For cancellations within the final week, a rebooking fee of $50 will apply for scheduling a new date. In cases where rescheduling is not possible, a charge of 25% of the remaining balance will be incurred.
                </p>
                
                <div className='subComponent'>Contact Us!</div>
                <div className='content'>
                For inquiries or to book one of our packages, please contact us at hello@decoponatx.com. We're eager to help with your party planning and ensure your event is a success.
                <Email></Email>
                </div>
            </div>
        </div>
        </>
    );

};

export default Parties;