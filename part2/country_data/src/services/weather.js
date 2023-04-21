import axios from 'axios'

const urlgen = (lat, lng) => `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=apparent_temperature,windspeed_10m&current_weather=true`

const getWeather = (lat,lng) => (
    axios.get(urlgen(lat, lng))
        .then(res => res.data.hourly)
        .then(data => {
            const temp = data.apparent_temperature[0]
            const windspeed = data.windspeed_10m[0]

            const weatherData = {
                temp,
                windspeed
            }

            return weatherData
        })
)

const weatherService = {
    getWeather
}

export default weatherService