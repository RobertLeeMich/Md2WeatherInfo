import React, { useEffect } from 'react';

function BgRoll({ sunrise, sunset }) {
  useEffect(() => {
    const updateBackground = () => {
      const now = new Date();
      const currentTime = now.getTime() / 1000; // Convert to Unix timestamp
      const position = ((currentTime - sunrise) / (sunset - sunrise)) * 100;
      document.body.style.backgroundPosition = `${position}% 0%`;
    };

    updateBackground(); // Update the background immediately
    const intervalId = setInterval(updateBackground, 60000); // Update the background every minute

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
  }, [sunrise, sunset]);

  return null; // This component doesn't render anything visible
}

export default BgRoll;
