import React from 'react';
import SocialMediaHandles from './social/Handles';

function Contact() {
    const tiktokHandle = 'decoponatx';
    const instagramHandle = 'decoponatx';
    return (
        <div className='component'>
            <div className='title'>
                <h1 className='subtitle'>Contact Us</h1>
            </div>
            <div className='content'>
                Get ready to unleash your creativity with Decopon (deh-koh-pon)! Explore our decoden kits for a unique DIY adventure at home or join us in person at your local craft fair. We also provide packages for special celebrations, such as birthdays and team building events. 
                <br></br><br></br>
                If you have any questions or need assistance, please don't hesitate to
                contact us. Send an email or DM us on IG/TikTok.
                <br></br>
                <br></br>
                {/* <i class="far fa-envelope"></i> <span>:</span> <a href="mailto:hello@deconponatx.com">hello@deconponatx.com</a> */}

                <SocialMediaHandles
          tiktokHandle={tiktokHandle}
          instagramHandle={instagramHandle}></SocialMediaHandles>
            </div>
        </div>
    );
}

export default Contact;
