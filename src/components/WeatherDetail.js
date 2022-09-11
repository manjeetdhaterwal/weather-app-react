import React from 'react'
import AddLocation from './AddLocation';
import './styles.css';

const WeatherDetail = ({ Weather, FetchWeather }) => {
  const isDay = Weather.weather[0].icon?.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
}
  return (
    <>
    <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
            <div className="row card0">
                <div className="card1 col-lg-8 col-md-7">
                    <div className="text-center">
                        <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png"/>
                    </div>
                    <div className="row px-3 mt-3 mb-3">
                        <h1 className="large-font mr-3">{Math.round(Weather.main.temp)}&#176;</h1>
                        <div className="d-flex flex-column mr-3">
                            <h2 className="mt-3 mb-0">{Weather.name}, {Weather.sys.country}</h2>
                            <small>10:36 - Tuesday, 22 Oct '19</small>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <h3 className="fa fa-sun-o mt-4"></h3>
                            <small>{Weather.weather[0].main}</small>
                        </div>
                    </div>
                </div>
                <div className="card2 col-lg-4 col-md-5">
                  <AddLocation FetchWeather={FetchWeather} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default WeatherDetail