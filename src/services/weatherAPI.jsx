import axios from "axios"

const lat = 33.3807
const lon = -84.7997
const apiKey = import.meta.env.VITE_API_KEY;

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
export const getWeather = () => {
  return axios.get(BASE_URL)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching weather data:", error)
      throw error
    })
}
