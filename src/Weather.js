import react from "react";

export default function showWeather (){
    return(
        <div>
        <form>
            <input type="text" placeholder="seach for city..."></input>
            <input type="submit" value="Search"></input>
        </form>
    </div>
    )
}