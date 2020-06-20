import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_key = '7897dd099bd5521f1ba8d25063524bd4'

export const fetchWeather = async(query) =>{

    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID : API_key
        }
    });
   return data;
}