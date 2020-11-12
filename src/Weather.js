import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData( {
            ready: true, 
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            city: response.data.name,
            imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        });
    }

        function search() {
            const apiKey ="64e05917145944cb1b0f8609f542a318";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        }

        function handleSubmit(event) {
            event.prevenDefault();
            search();
        }  

        function handleCityChange(event){
            setCity(event.target.value)
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
         < WeatherData data={weatherData} />
     </div> 
      ); 
    }
     else {
        search();
        return "Loading...";
     }  
}