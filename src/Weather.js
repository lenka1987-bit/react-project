import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response)
        setWeatherData( {
            ready: true, 
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            city: response.data.name,
            icon: response.data.weather[0].icon,
        });
    }

        function search() {
            const apiKey ="64e05917145944cb1b0f8609f542a318";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        }

        function handleSubmit(event) {
            event.preventDefault();
            search();
        }  

        function handleCityChange(event){
            setCity(event.target.value);
        }

    if (weatherData.ready) {
        return (
     <div className = "weather">
         <form onSubmit={handleSubmit}>    
            <input 
             type="search"
             placeholder="type a city..."
             className="input-search"
             autoFocus="on"
             onChange={handleCityChange}
             /> 
            <input 
            type="submit" 
            value="GO!!!" 
            className="input-submit"
            />
         </form>
         <WeatherData data={weatherData} />
     </div> 
      ); 
    }
     else {
        search();
        return "Loading...";
     }  
}