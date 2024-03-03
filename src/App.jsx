import react, {useState} from "react";
import axios from "axios";
import logo from './logo.svg';

import './App.css';

export default function App() 
{
  const [city, setCity] = useState ("")
  let [temperature, setTemperature] = useState("");
  let [showWeather, setShowWeather] = useState("");
  let [loaded, setLoaded] = useState(false);


  function handleCity (event){
    setCity(event.target.value);
    return (city);
  }

  function handleSubmit(event){
    event.preventDefault();
    let url=`https://api.shecodes.io/weather/v1/current?query=${city}&key=c9c17abaa3otf64ba314bf3fce705208`
    axios.get(url).then(getWeatherAPI);
    setLoaded(true);
    
  }

  function getWeatherAPI(response){
    temperature = Math.round(response.data.temperature.current);
    setTemperature({temperature: Math.round(response.data.temperature.current)}, ()=> {
      console.log (response.data.temperature.current);
    });
    loaded = true;
    setLoaded(true, ()=> {console.log (response.data.temperature.current)});

    console.log (response.data.temperature.current);
    console.log(temperature);
    console.log(response);
    console.log(loaded);
    
    
    displayWeather();
  
    return(temperature);
  }

function displayWeather()
{
    setShowWeather (<div>The city is {city}, temperature {temperature}</div>);
    return(showWeather);
}


return (
  <div>
  <form onSubmit={handleSubmit}>
  <input type="text" placeholder="seach for city..." id="usercity" onChange={handleCity}></input>
  <input type="submit" value="Search"></input>
  </form>

    <div>
    {showWeather}
    </div>
  </div> 
  );

}
