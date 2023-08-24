import { useState, useEffect } from "react";
import { getThreeHourForecast } from "../services/ThreeHourService";
import "../assets/tab-styling.css"

function ThreeHourForecast() {
  const [forecastData, setForecastData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    getThreeHourForecast()
      .then(data => setForecastData(data))
      .catch(error => console.error("Error fetching forecast:", error));
  }, []);

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  // Divide the forecast into days
  const days = [];
  for (let i = 0; i < forecastData.list.length; i += 8) {
    days.push(forecastData.list.slice(i, i + 8));
  }

  return (
    <div className="tab-container">
      <div className="tabs">
        {days.map((_, index) => (
          <button key={index} className="tab-button" onClick={() => setActiveTab(index)}>
            Day {index + 1}
          </button>
        ))}
      </div>
      {days.map((day, index) => (
        <div key={index} className="tab-content" style={{ display: activeTab === index ? "flex" : 'none' }}>
          {day.map((forecast, idx) => (
            <div key={idx}>
              <p className="th-hr">Time: {new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
              <p className="th-hr">Temperature: {((forecast.main.temp - 273.15) * 9/5 + 32).toFixed(2)}°F</p>
              <p className="th-hr">Description: {forecast.weather[0].description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ThreeHourForecast;
