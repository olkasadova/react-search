import react, {useState} from "react";
import axios from "axios";
import logo from './logo.svg';

import './App.css';

export default function App() 
{
  let [city, setCity] = useState ("")
  let [temperature, setTemperature] = useState("");
  let [showWeather, setShowWeather] = useState("");


  function handleCity (event){
    setCity(event.target.value);
    return (city);
  }
  function getWeatherAPI(response){
    
    setTemperature(Math.round(response.data.temperature.current));
    console.log(temperature);
    return(temperature);
    
  }

  function currentWeather(event){
    event.preventDefault();
    if (city.length>0){
      let url=`https://api.shecodes.io/weather/v1/current?query=${city}&key=c9c17abaa3otf64ba314bf3fce705208`
      axios.get(url).then (getWeatherAPI)
      setShowWeather (<div>The city is {city}, temperature {temperature}</div>);
    }
       //console.log(showWeather);}//return(
    
    else { 
    setShowWeather (<div> Waitig....</div>)
     }
     return(showWeather);
    
  }
  
  
return (
   <div>
    <form onSubmit={currentWeather}>
        <input type="text" placeholder="seach for city..." id="usercity" onChange={handleCity}></input>
        <input type="submit" value="Search"></input>
    </form>
    <div>
    {showWeather}
   </div>
   </div>
  );
}
