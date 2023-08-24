import { useState } from 'react'
import './App.css'
import "./assets/services.css"
import WeatherDisplay from './components/WeatherDisplay'
import ThreeHourForecast from './components/ThreeHourForecast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='weather-display'>
    <WeatherDisplay />
    <ThreeHourForecast />
    </div>
    </>
  )
}

export default App
