import React from 'react'
import { useState } from 'react';


const Header = ({ FetchWeather}) => {
  const [city, setCity] = useState("");

  const submit = (e)=>{
    e.preventDefault();
    if(!city) alert("Please enter a valid City name");
    else FetchWeather(city);
    setCity("");
  }

  return (
    <div className='container'>

            <form className="d-flex" role="search">
              <input className="form-control me-2" value = {city} onChange={(e)=>{setCity(e.target.value)}} type="text" placeholder="City" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" onClick={submit}>Search</button>
            </form>

    </div>
  )
}

export default Header