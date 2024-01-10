import React from 'react';
import { Container } from 'react-bootstrap';

const EmailForm = () => {
    return (
        <Container>
            <div className='contact'>
                <div className='title'>
                    <h1 className='subtitle'>Subscribe!</h1>
                </div>
                <div className='content'>
                    {/* External CSS Link */}
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />

                    {/* Inline Styles */}
                    <style type="text/css">
                        {`
              #mc_embed_signup {
                clear: left;
                font: 14px Helvetica, Arial, sans-serif;
              }
            `}
                    </style>

                    {/* The Form */}
                    <div id="mc_embed_signup">
                        <form action="https://decoponatx.us12.list-manage.com/subscribe/post?u=184c6ca578947032b5818bb1c&amp;id=95b4491d4e&amp;f_id=003f43e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate>
                            <div id="mc_embed_signup_scroll">
                                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required defaultValue="" />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-FNAME">First Name </label>
                                    <input type="text" name="FNAME" className="text" id="mce-FNAME" defaultValue="" />
                                </div>
                                <div id="mce-responses" className="clear foot">
                                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                                </div>
                                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                    {/* Do not remove this or risk form bot signups */}
                                    <input type="text" name="b_184c6ca578947032b5818bb1c_95b4491d4e" tabIndex="-1" value="" />
                                </div>
                                <div className="clear foot">
                                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" style={{ backgroundColor: '#FEA751' }} className="button" value="Subscribe" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default EmailForm;
