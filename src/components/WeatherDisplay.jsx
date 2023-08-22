import React, { useState, useEffect } from 'react';
import { getWeather } from '../services/weatherAPI';

function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather()
      .then(data => {
        setWeatherData(data);
        console.log(data); // Correct placement of the console.log
      })
      .catch(error => console.error('Error fetching weather:', error));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main: { temp }, weather: [{ description }] } = weatherData;

  // Convert temperature from Kelvin to Celsius
  const tempCelsius = temp - 273.15;

  return (
    <div>
      <h1>{name}</h1>
      <p>Temperature: {tempCelsius.toFixed(2)}°C</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default WeatherDisplay;
