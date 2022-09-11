import Header from './components/Header.js'
import WheatherDetail from './components/WeatherDetail'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState();
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    if(lat && long) fetchWeatherUsingCoordinates(lat, long);

  }, [lat, long]);

  const fetchWeatherUsingCoordinates = (async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=metric`);
    setWeather(response.data);
    console.log(response.data);
  })



  const FetchWeatherUsingCityName = (async (city) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=metric`);
      setWeather(response.data);
      console.log(response.data)    
  })

  return (
    <>
      <div className="container">
        <Header FetchWeather={FetchWeatherUsingCityName} />
        {weather ? <WheatherDetail Weather={weather}  FetchWeather={FetchWeatherUsingCityName}/> : <div>Please enter city names</div>}
      </div>
    </>
  );
}

export default App;
