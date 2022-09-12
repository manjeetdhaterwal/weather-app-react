import React from 'react'
import { useState } from 'react';
import './headerstyle.css';

const Header = ({ FetchWeather}) => {
  const [city, setCity] = useState("");

  const submit = (e)=>{
    e.preventDefault();
    if(!city) alert("Please enter a valid City name");
    else FetchWeather(city);
    setCity("");
  }

  return (
          <div className="navbar">
            <div className="navbar-container">
                <ul className="menu-items">
                    <li>
                    <form className="d-flex input-div" role="search">
                      <input className="form-control me-2 header-search-input" value = {city} onChange={(e)=>{setCity(e.target.value)}} type="text" placeholder="Enter City" aria-label="Search" />
                      <button className="btn" type="submit" onClick={submit}><div className="fa fa-search text-center"></div></button>   
                    </form>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Header