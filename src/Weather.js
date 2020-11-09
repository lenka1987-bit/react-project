import React from "react";
import "./Weather.css";

export default function Weather() {
 return (
     <div className = "weather">
         <form>    
            <input type="search" placeholder="type a city..." className="input-search" autoFocus="on"/> 
            <input type="submit" value="GO!!!" className="input-submit"/>
        
         </form> 
         <h1 className="h1-city">London</h1>
         <h5 className="h5-date">Monday, 16:06</h5>
         <div className="row">
            <div className="col-6">
               
               <ul>
                <li>   
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly-cloudy" className="img"/> <span className="temperature">10</span>℃ |℉</li>
                <li className="description">Partly cloudy</li></ul>
            
            </div>
            <div className="col-6">
                <ul className="right-col">
                    <li><strong>Sunrise:</strong> 07:48</li>
                    <li><strong>Sunset:</strong>  17:40</li>
                    <li><strong>Humidity:</strong>  50%</li>
                    <li><strong>Wind:</strong> 4m/s</li>
                </ul>
            </div>   
         </div>
         <h4 clasName="h4-heading">3 HOURS FORECAST:</h4>



     </div>  ) 
}