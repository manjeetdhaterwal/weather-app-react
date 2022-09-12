import React from 'react'
// import styled from 'styled-components';
import { WeatherPictures } from '../App';
import './style.css';
import moment from 'moment';
import AddLocation from './AddLocation';
import styled from 'styled-components';

export const WeatherInfoIcons = {
    sunset: "glyphicon glyphicon-cog",
    sunrise: "glyphicon glyphicon-certificate",
    humidity: "glyphicon glyphicon-tint",
    wind: "glyphicon glyphicon-flash",
    pressure: "glyphicon glyphicon-move",
    min_Temp: "	glyphicon glyphicon-chevron-down",
    max_Temp: "	glyphicon glyphicon-chevron-up",
    sea_Level: "glyphicon glyphicon-resize-horizontal"
};

const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 20px;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.i`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
    const { name, value } = props;
    return (
        <InfoContainer >
            <InfoIcon className= {WeatherInfoIcons[name]} />
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};

// console.log(weather[0].icon)
const WeatherDetail = ({ Weather, FetchWeather }) => {
    const isDay = Weather.weather[0].icon?.includes('d');
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <div className="container">
            <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
                <div className="row d-flex justify-content-center" >
                    <div className="row card0">
                        <div className="card1 col-lg-8 col-md-7" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + WeatherPictures[Weather?.weather[0].icon]})` }} >
                            <div className="row px-3 mt-3 mb-3">
                                <h1 className="large-font mr-3">{Math.round(Weather.main.temp)}&#176;</h1>
                                <div className="d-flex flex-column mr-3">
                                    <h2 className="mt-3 mb-0">{Weather.name}, {Weather.sys.country}</h2>
                                    <small>{moment().format('dddd')}, <span>{moment().format('LL')}</span></small>
                                </div>
                                <div className="d-flex flex-column text-center">
                                    <h3 className="fa fa-cloud mt-4"></h3>
                                    <small>{Weather.weather[0].main}</small>
                                </div>
                            </div>
                            <div className="line my-5"></div>
                            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
                            <WeatherInfoContainer>
                                <WeatherInfoComponent name={"sunrise"}
                                    value={`${getTime(Weather?.sys["sunrise"])}`} />
                                <WeatherInfoComponent name={"sunset"}
                                    value={`${getTime(Weather?.sys["sunset"])}`} />
                                <WeatherInfoComponent name={"max_Temp"} value={Weather?.main?.temp_max} />
                                <WeatherInfoComponent name={"min_Temp"} value={Weather?.main?.temp_min} />
                                
                                <WeatherInfoComponent name={"wind"} value={Weather?.wind?.speed} />
                                <WeatherInfoComponent name={"pressure"} value={Weather?.main?.pressure} />
                                <WeatherInfoComponent name={"humidity"} value={Weather?.main?.humidity} />
                                <WeatherInfoComponent name={"sea_Level"} value={Weather?.main?.sea_level} />
                            </WeatherInfoContainer>
                            {/* <p>Weather Details</p> */}
                            {/* <div className="w-details2">
                                <div className="w-details px-3">
                                    <h3 className="fa fa-cloud"></h3>
                                    <p className="ml-auto">12%</p>
                                </div>
                                <div className="w-details px-3">
                                    <h3 className="fa fa-droplet"></h3>
                                    <p className="ml-auto">{Weather.main.humidity}</p>
                                </div>
                            </div>
                            <div className="w-details2">
                                <div className="w-details px-3">
                                    <h3 className="fa fa-wind"></h3>
                                    <p className="ml-auto">{Weather.wind.speed}</p>
                                </div>
                                <div className="w-details px-3">
                                    <h3 className="fa fa-rain"></h3>
                                    <p className="ml-auto">{Weather.main.pressure}</p>
                                </div>
                            </div> */}
                        </div>

                        <div className="card2 col-lg-4 col-md-5">
                            <AddLocation FetchWeather={FetchWeather} />
                            {/* <div className="row px-3">
                        <input type="text" name="location" placeholder="Add Location" className="mb-5 input-new" />
                        <div className="fa fa-plus mb-5 mr-0 text-center"></div>  
                    </div> */}
                            {/* <div className="mr-5">
                        <p className="light-text suggestion">Birmingham</p>
                        <p className="light-text suggestion">Manchester</p>
                        <p className="light-text suggestion">New York</p>
                        <p className="light-text suggestion">California</p>


                        <div className="line mt-3"></div>
                    </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetail