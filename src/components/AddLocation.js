import React from 'react'
import WeatherCard from './WeatherCard'
import { useState, useEffect } from 'react';
import axios from 'axios';
import City from './City';


const AddLocation = ({FetchWeather}) => {

    // checking for local Storage
    let init;
    if (localStorage.getItem("cards") === null) {
        init = [];
    }
    else {
        init = JSON.parse(localStorage.getItem("cards"));
    }

    // on submit button 
    const submit = ((e) => {
        e.preventDefault();
        if (!newLocation) alert("Please enter Location to add");
        else addItem(newLocation)
        setNewLocation("");
    })

    // adding new location to the main array "allLocations"
    const addItem = async (city) => {
        if (allLocations.includes(city)) alert("already existed");
        else {
            console.log("adding", city);
            setAllLocations([...allLocations, city])
        }

    }

    // Deleting particular card
    const onDelete = ((city) => {
        console.log("deleting", city);
        setAllLocations(allLocations.filter((e) => {
            return e !== city;
        }))
        window.location.reload();
    })

    const [newLocation, setNewLocation] = useState("");
    const [allLocations, setAllLocations] = useState(init);

    // updating local storage with the new array
    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(allLocations))
    }, [allLocations])

    return (
        <>
            <div className="row px-3">
                <input type="text" name="location" value={newLocation} onChange={(e) => { setNewLocation(e.target.value) }} placeholder="Add New" className="mb-5 input-new" />
                <div className="fa fa-plus mb-5 mr-0 text-center" onClick={submit}></div>
            </div>

            {allLocations.length === 0 ? <div> Please enter city name to compare</div> :
                allLocations.map((data, index) => {
                    return <City key={index} Location={data} Delete={onDelete} FetchWeather={FetchWeather} />
                })
            }
        </>
    )
}

export default AddLocation