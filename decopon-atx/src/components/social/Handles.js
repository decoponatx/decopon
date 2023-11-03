import React, {useState} from 'react';
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

function SocialMediaHandles({ tiktokHandle, instagramHandle }) {
  const [open, setOpen] = useState(false);

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
          onClick={() => setOpen(true)}
        ></i>

        <Tooltip className='toolTip' id="emailTooltip" effect="solid" type="info" place='top' style={{backgroundColor:'#FEA751'}} >
          Email us at hello@decoponatx.com
        </Tooltip>

      </div>
    </>
  );
}

export default SocialMediaHandles;
