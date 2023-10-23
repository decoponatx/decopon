import React from 'react';

function Contact() {
    return (
        <div className='component'>
            <div className='title'>
                <h1>Contact Us</h1>
            </div>
            <div className='contact'>
                Get ready to unleash your creativity with Decopon (deh-koh-pon)! Explore our decoden kits for a unique DIY adventure at home or join us in person at your local craft fair. Additionally, we provide birthday packages for special celebrations.
                <br></br><br></br>
                If you have any questions or need assistance, please don't hesitate to
                contact us. Send us an email or DM us on IG/TikTok.
            </div>

            <div className='contact'>
                <i class="far fa-envelope"></i> <span>:</span> <a href="mailto:hello@deconponatx.com">hello@deconponatx.com</a>
            </div>
        </div>
    );
}

export default Contact;
