// YouTubeEmbed.js

import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="youtube-container">
      <div className="youtube-video">
        <iframe
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="youtube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
