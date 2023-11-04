import React from 'react';
import { Tooltip } from 'react-tooltip';

const socialMediaStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const iconStyle = {
  fontSize: '24px',
  margin: '0 10px',
  color: '#333',
  cursor: 'pointer',
  position: 'relative',
};

function handleClick() {
  // Open the URL when the element is clicked
  window.open('https://us12.list-manage.com/contact-form?u=184c6ca578947032b5818bb1c&form_id=9c764b5d6ff6d36bc04c7b6312b8ec35','_blank');
}

function SocialMediaHandles({ tiktokHandle, instagramHandle }) {

  return (
    <>
      <div style={socialMediaStyle}>
        <a href={`https://www.tiktok.com/@${tiktokHandle}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok" style={iconStyle}></i>
        </a>
        <a href={`https://www.instagram.com/${instagramHandle}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={iconStyle}></i>
        </a>
        <i
          className="far fa-envelope"
          style={iconStyle}
          data-tooltip-id='emailTooltip'
          onClick={handleClick}
        ></i>

        <Tooltip className='toolTip' id="emailTooltip" effect="solid" type="info" place='top' style={{backgroundColor:'#FEA751'}} >
          Email us at hello@decoponatx.com
        </Tooltip>

      </div>
    </>
  );
}

export default SocialMediaHandles;
