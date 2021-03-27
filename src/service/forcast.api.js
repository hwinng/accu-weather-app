import axios from 'axios';

export const getForcast = async (apiKey, value) => {
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${value}?apikey=${apiKey}&details=true`;
    try {
        const res = await axios.get(url);
        return res;
    } catch (error) {
        console.log('get forcast failed', error);
    }
}