import React from 'react'
import './card.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const WeatherCard = ({ Weather, Delete, FetchWeather}) => {
    const show = ((e)=>
    {
        e.preventDefault();
        FetchWeather(Weather?.name)
    })
    return (
        <div className="main" onClick={show}>
            <div className="top">
                <p className="header">{Weather?.name}</p>
                <Button className="button" inverted color='blue' circular icon='close' onClick={() => { Delete(Weather?.name) }}/>
                {/* <p className="description">{Weather?.weather[0].main}</p> */}
                
                    
            </div>
            <div className="flex">
                {/* <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p> */}
                {/* <p className="description">{Weather.weather[0].main}</p> */}
            </div>

            <div className="flex">
                {/* <p className="description">{Weather.weather[0].name}</p> */}
                <p className="temp">Temprature: {Weather?.main.temp} &deg;C</p>
                <p className="temp">Humidity: {Weather?.main.humidity} %</p>
            </div>

            {/* <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(Weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(Weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div> */}

            <hr />

        </div>
    )
}

export default WeatherCard