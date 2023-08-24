import { useState, useEffect } from "react";
import { getWeather } from "../services/weatherAPI";
import BgRoll from "./BgRoll"


function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather()
      .then(data => {
        setWeatherData(data);
        console.log(data);
      })
      .catch(error => console.error("Error fetching weather:", error));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main: { temp }, weather: [{ description }], sys: { sunrise, sunset } } = weatherData;

  const tempFahrenheit = (temp - 273.15) * 9/5 + 32;

  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})

  return (
    
    <div className="weather-display">
      <BgRoll sunrise={sunrise} sunset={sunset} />
      <h1>Current Temperature and Weather for:</h1>
      <h1 className="name">{name}</h1>
      <p>Temperature: {tempFahrenheit.toFixed(0)}°F</p>
      <p>Description: {description}</p>
      <p>Sundown: {sunsetTime}</p>
      <p>Sunrise: {sunriseTime}</p>
    </div>
  );
}

export default WeatherDisplay;
