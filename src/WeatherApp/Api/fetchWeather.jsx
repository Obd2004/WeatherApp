import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_Key = '4c2132562e6e0cefd7ae5411e0252166'
export const fetchWeather = async (query)=>{
    const {data} = await axios.get(URL,{
        params:{
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    })
    return data
}