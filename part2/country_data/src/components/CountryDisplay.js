import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const CountryDisplay = ({ displayCountry }) => {

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        weatherService.getWeather(displayCountry.lat, displayCountry.lng)
            .then(weatherObj => setWeatherData(weatherObj))
    })

    return (
        <>
            <h2>{displayCountry.name}</h2>

            <p>capital {displayCountry.capital}</p>
            <p>area {displayCountry.area}</p>
            <p>population {displayCountry.pop}</p>
            <br/>
            <strong>languages</strong>
            <ul>
                {displayCountry.languages.map((lang,i) => <li key={i}>{lang}</li>)}
            </ul>
            <img src={displayCountry.flagUrl} width="500" height="300" alt={`The flag of ${displayCountry.name}`} />

            <h2>Weather in {displayCountry.capital}</h2>

            {weatherData ? <p>temperature {weatherData.temp}</p> : <></>}
            {weatherData ? <p>wind {weatherData.windspeed}</p> : <></>}
        </>
    )
}

export default CountryDisplay