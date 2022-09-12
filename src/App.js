import Header from './components/Header.js'
import WheatherDetail from './components/WeatherDetail'
// import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

// const AppContainer = styled.div`
//   color: black;
//   margin: 20px auto;
//   font-size: 18px;
//   font-weight: bold;
// `;

export const WeatherPictures = {
  "01d": "/backpictures/sunny-day.jpg",
  "01n": "/backpictures/sunny-night.jpg",
  "02d": "/backpictures/sunny-day.jpg",
  "02n": "/backpictures/cloudy-night.jpg",
  "03d": "/backpictures/cloudy-day.jpg",
  "03n": "/backpictures/cloudy-day.jpg",
  "04d": "/backpictures/sunny-day.jpg",
  "04n": "/backpictures/cloudy-night.jpg",
  "09d": "/backpictures/rain-day.jpg",
  "09n": "/backpictures/rain-night.jpg",
  "10d": "/backpictures/rain-day.jpg",
  "10n": "/backpictures/rain-night.jpg",
  "11d": "/backpictures/storm-day.jpg",
  "11n": "/backpictures/storm-night.jpg",
};

export const backgroundweathercolor = {
  "01d": "white",
  "01n": "black",
  "02d": "yellow",
  "02n": "voilet",
  "03d": "green",
  "03n": "white",
  "04d": "/react-weather-app/icons/perfect-day.svg",
  "04n": "/react-weather-app/icons/cloudy-night.svg",
  "09d": "/react-weather-app/icons/rain.svg",
  "09n": "/react-weather-app/icons/rain-night.svg",
  "10d": "/react-weather-app/icons/rain.svg",
  "10n": "/react-weather-app/icons/rain-night.svg",
  "11d": "/react-weather-app/icons/storm.svg",
  "11n": "/react-weather-app/icons/storm.svg",
};

function App() {
  // const [bc, setBc] = useState();
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
    // setBc(backgroundweathercolor[response.data.weather[0].icon])
    document.body.style.backgroundImage= `url(${process.env.PUBLIC_URL + WeatherPictures[response.data.weather[0].icon]})`;
    // console.log(backgroundweathercolor[response.data.weather[0].icon])
 
  })

  const fetchWeatherUsingCityName = (async (city) => {
    // console.log(city)
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b8d3ca5f9b5446a0b6a974879aa126c&units=metric`);
    setWeather(response.data);
    // setBc(backgroundweathercolor[response.data.weather[0].icon])
    document.body.style.backgroundImage= `url(${process.env.PUBLIC_URL + WeatherPictures[response.data?.weather[0].icon]})`;
    console.log(response.data.main.temp)
    console.log(response.data);
  })



  const FetchWeatherUsingCityName = (async (city) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=metric`);
      setWeather(response.data);
      document.body.style.backgroundImage=`url(${process.env.PUBLIC_URL + WeatherPictures[response.data?.weather[0].icon]})`;
      console.log(response.data)    
  })


  return (
      <div className="container">
        <Header FetchWeather={FetchWeatherUsingCityName} />
        {weather ? <WheatherDetail Weather={weather}  FetchWeather={FetchWeatherUsingCityName}/> : <div>Please enter city names</div>}
      </div>
  );
}

export default App;
