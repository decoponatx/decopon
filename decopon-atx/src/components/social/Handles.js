// SocialMediaHandles.js
import React from 'react';

const socialMediaStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const iconStyle = {
  fontSize: '24px',
  margin: '0 10px',
  color: '#333',
};

function SocialMediaHandles({ tiktokHandle, instagramHandle }) {
  return (
    <>
    <div style={socialMediaStyle}>
      <a
        href={`https://www.tiktok.com/@${tiktokHandle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-tiktok" style={iconStyle}></i>
      </a>
      <a
        href={`https://www.instagram.com/${instagramHandle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram" style={iconStyle}></i>
      </a>
    </div>
    <br></br>
    </>
  );
}

export default SocialMediaHandles;
