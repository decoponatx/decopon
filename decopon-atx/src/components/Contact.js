import React from 'react';
import SocialMediaHandles from './social/Handles';
import { Container } from 'react-bootstrap';


function Contact() {
    const tiktokHandle = 'decoponatx';
    const instagramHandle = 'decoponatx';
    return (
        <Container>
        <div className='contact'>
            <div className='title'>
                <h1 className='subtitle'>Contact Us</h1>
            </div>
            <div className='content'>
                If you have any questions or need assistance, please don't hesitate to
                contact us. Send an email or DM us on IG/TikTok.
                <br></br>
                <br></br>
                <SocialMediaHandles
          tiktokHandle={tiktokHandle}
          instagramHandle={instagramHandle}></SocialMediaHandles>
            </div>
        </div>
        </Container>
    );
}

export default Contact;
