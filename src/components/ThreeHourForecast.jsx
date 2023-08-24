import React, { useState, useEffect } from 'react';
import { getThreeHourForecast } from '../services/ThreeHourService'

function ThreeHourForecast() {
  const [forecastData, setForecastData] = useState(null)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    getThreeHourForecast()
      .then(data => setForecastData(data))
      .catch(error => console.error('Error fetching forecast:', error))
  }, [])

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  // Divide the forecast into days
  const days = [];
  for (let i = 0; i < forecastData.list.length; i += 8) {
    days.push(forecastData.list.slice(i, i + 8));
  }

  return (
    <div className="tabs-container">
      <div className="tabs">
        {days.map((_, index) => (
          <button key={index} onClick={() => setActiveTab(index)}>
            Day {index + 1}
          </button>
        ))}
      </div>
      <div>
      <div className="tab-content">
        {days[activeTab].map((forecast, index) => (
          <div key={index}>
            <p>Time: {new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p>Temperature: {((forecast.main.temp - 273.15) * 9/5 + 32).toFixed(2)}°F</p>
            <p>Description: {forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ThreeHourForecast;

