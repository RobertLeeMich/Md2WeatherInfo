import React, { useEffect } from 'react';

function BgRoll({ sunrise, sunset }) {
  useEffect(() => {
    const updateBackground = () => {
      const now = new Date();
      const currentTime = now.getTime() / 1000;
      const position = ((currentTime - sunrise) / (sunset - sunrise)) * 100;
      document.body.style.backgroundPosition = `${position}% 0%`;
    };

    updateBackground(); 
    const intervalId = setInterval(updateBackground, 60000);

    return () => clearInterval(intervalId);
  }, [sunrise, sunset]);

  return null;
}

export default BgRoll;
