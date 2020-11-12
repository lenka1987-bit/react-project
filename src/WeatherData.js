import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherData(props){
    return ( 
        
    <div className = "weatherData">
        <h1 className="h1-city">{props.data.city}</h1>
        <h5 className="h5-date"><FormatedDate date={props.data.date}/></h5>
         <div className="row">
            <div className="col-6">
               <ul>
                <li className="img">
                     <WeatherIcon code={props.data.icon} />  
         
            <span className="temperature">{Math.round(props.data.temperature)}</span><span className="units">℃ |℉</span></li>
        <li className="description">{props.data.description}</li></ul>
            </div>
            <div className="col-6">
                <ul className="right-col">
                    <li><strong>Sunrise:</strong> 07:48</li>
                    <li><strong>Sunset:</strong>  17:40</li>
                    <li><strong>Humidity:</strong> {props.data.humidity} %</li>
                    <li><strong>Wind:</strong> {props.data.wind} m/s</li>
                </ul>
            </div>   
         </div>
         <h4 className="h4-heading">3 HOURS FORECAST:</h4>

     </div>
    ) 
}