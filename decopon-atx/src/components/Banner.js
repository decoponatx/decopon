import React, { useState, useEffect } from 'react';

const BannerAd = () => {
    // State variables to manage dynamic content
    const [dynamicText, setDynamicText] = useState('Welcome!'); // Initial text
    const [dynamicImage, setDynamicImage] = useState('default-image.jpg'); // Initial image

    useEffect(() => {
        // Using useEffect for side effects - here, to update content dynamically
        const timer = setInterval(() => {
            // Interval to change the content of the banner
            setDynamicText('Special Offer!'); // Updating text
            setDynamicImage('special-offer.jpg'); // Updating image
        }, 5000); // Changes every 5 seconds

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, []);

    // Render method to display the banner
    return (
        <div className="banner">
            <h1>{dynamicText}</h1> {/* Dynamic text */}
            <img src={dynamicImage} alt="Banner" /> {/* Dynamic image */}
            {/* You can add more dynamic or static content here */}
        </div>
    );
};

export default BannerAd; // Exporting the component
