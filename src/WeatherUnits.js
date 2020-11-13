import React, {useState} from "react" ;

export default function WeatherUnits(props) {
    const [unit, setUnits] = useState("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnits("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnits("celsius");
    }
    if (unit === "celsius") {  
    return (
        <div className="WeatherUnits">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="units"> ℃ |
            <a href="/" onClick={convertToFahrenheit}>℉</a> 
             </span> 
        </div>
    );
     } else {
         let fahrenheit = (props.celsius * 9/5) + 32;
         return (
             <div className="WeatherUnits">
                <span className="temperature">{Math.round(fahrenheit)}</span>
                 <span className="units"><a href="/" onClick={convertToCelsius}>℃</a> | ℉
                </span> 
             </div>
            );
     }
 }