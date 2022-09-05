import React, {useState} from 'react';
import {fetchData} from './Fetch.jsx'
import styles from './SearchBar.module.css';
import Icon from '../assets/pin.svg';

export default function SearchBar({setInfo}) {
    
    const [location, setLocation] = useState("")
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_APIKEY}&q=${location}&aqi=no`

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            fetchData(url)
            .then(data => {
                setInfo(data);
        })
        }
    }
    return (
    <div className={styles.searchBar}>
        <input
        className={styles.input}
        value = {location}
        placeholder = "Enter Location"
        type = "text"
        onChange = {event => setLocation(event.target.value)}
        onKeyPress = {searchLocation}/>     
    </div>
  )
}


