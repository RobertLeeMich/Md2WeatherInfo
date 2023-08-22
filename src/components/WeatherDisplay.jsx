import React, { useState, useEffect } from 'react';
import { getWeather } from '../services/weatherAPI';

function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather()
      .then(data => {
        setWeatherData(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching weather:', error));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main: { temp }, weather: [{ description }] } = weatherData;

  const tempFahrenheit = (temp - 273.15) * 9/5 + 32;

  return (
    <div>
      <h1>{name}</h1>
      <p>Temperature: {tempFahrenheit.toFixed(0)}°F</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default WeatherDisplay;
