import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

const City = ({ Location, Delete, FetchWeather }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
      FetchWeatherUsingCityName(Location).then((data)=>
      {
        setWeather(data || 'no data found')
      })
  }, [])

  // fetching weather using city name
  const FetchWeatherUsingCityName = (() => {
      return ( (axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=metric`)
      .then(res=>{
        console.log(res.data);
        // return JSON.stringify(res.data, null, 2);
        return (res.data);
      })
      .catch(err=>
        {
          console.error(err);
        })
      ))
  })

  return (
    <div>
      {weather ? <WeatherCard Weather={weather} Delete={Delete} FetchWeather={FetchWeather} /> : <div></div>}
    </div>
  )
}

export default City