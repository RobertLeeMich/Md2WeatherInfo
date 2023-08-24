import axios from 'axios';

const lon = -84.67472166595059;
const lat = 33.44575808261425;
const apiKey = import.meta.env.VITE_API_KEY;

export const getThreeHourForecast = () => {
  const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return axios.get(BASE_URL)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching forecast data:', error);
      throw error;
    });
};
