import { useState } from 'react'
import './App.css'
import WeatherDisplay from './components/WeatherDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='weather-display'>
    <WeatherDisplay />
    </div>
    </>
  )
}

export default App
