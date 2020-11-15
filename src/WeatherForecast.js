import React , {useState} from "react";
import axios from "axios";
import WeatherForecastCol from "./WeatherForecastCol";
import "./WeatherForecast.css";


export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null)

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);     
    }

    if (loaded && props.city === forecast.city.name) {
        //console.log(forecast.list[0].main.temp)
        return (
            <div className="WeatherForecast row" >
            < WeatherForecastCol data={forecast.list[0]} />
            < WeatherForecastCol data={forecast.list[1]} />
            < WeatherForecastCol data={forecast.list[2]} />
            < WeatherForecastCol data={forecast.list[3]} />
            < WeatherForecastCol data={forecast.list[4]} />
            < WeatherForecastCol data={forecast.list[5]} />
          </div>
        ); 
    }  else {
    let apiKey = "64e05917145944cb1b0f8609f542a318"
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric` ;
    axios.get(url).then(handleForecastResponse)
    return null;
    }
}