import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData( {
            ready: true, 
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            date: "Monday, 12:20",
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            city: response.data.name,
            imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        });
    }

    if (weatherData.ready) {
        return (
     <div className = "weather">
         <form>    
            <input type="search" placeholder="type a city..." className="input-search" autoFocus="on"/> 
            <input type="submit" value="GO!!!" className="input-submit"/>
         </form> 
        <h1 className="h1-city">{weatherData.city}</h1>
        <h5 className="h5-date">{weatherData.date}</h5>
         <div className="row">
            <div className="col-6">
               <ul>
                <li>   
        <img src={weatherData.imgUrl} alt={weatherData.description} className="img"/> 
            <span className="temperature">{Math.round(weatherData.temperature)}</span>℃ |℉</li>
        <li className="description">{weatherData.description}</li></ul>
            </div>
            <div className="col-6">
                <ul className="right-col">
                    <li><strong>Sunrise:</strong> 07:48</li>
                    <li><strong>Sunset:</strong>  17:40</li>
                    <li><strong>Humidity:</strong> {weatherData.humidity} %</li>
                    <li><strong>Wind:</strong> {weatherData.wind} m/s</li>
                </ul>
            </div>   
         </div>
         <h4 className="h4-heading">3 HOURS FORECAST:</h4>

     </div> 
      ); 
    }
     else {
       const apiKey ="64e05917145944cb1b0f8609f542a318";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
        return "Loading..."
     }  
}