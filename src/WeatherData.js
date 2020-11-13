import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";


export default function WeatherData(props){
    return ( 
        
    <div className = "weatherData">
        <h1 className="h1-city">{props.data.city}</h1>
        <h5 className="h5-date"><FormatedDate date={props.data.date}/></h5>
         <div className="row">
            <div className="col-6">
               <ul>
                <li className="img clearfix">
                    <div className="float-left">
                     <WeatherIcon code={props.data.icon} /> 
                     </div>
                     <div className="float-left"> 
                     <WeatherUnits celsius={props.data.temperature} />
                     </div>
                </li>
        <li className="description">{props.data.description}</li></ul>
            </div>
            <div className="col-6">
                <ul className="right-col">
                    <li><strong>Sunrise:</strong> {props.data.sunrise}</li>
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