import axios from 'axios';

export const getCurrentLocation = async (apiKey, ipAdrress) => {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${apiKey}&q=${ipAdrress}`;
    try {
        const res = await axios.get(url);
        return {
            locationKey: res.data.Key,
            locationName: res.data.EnglishName,
            parentCity: res.data.ParentCity,
            country: res.data.Country,
            timezone: res.data.TimeZone
        }
    } catch (error) {
        console.log('get current location failed', error);
    }
}

export const getTopCities = async(apiKey) => {
    const url = `http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=${apiKey}`;
    try {
        const res = await axios.get(url);
        const locations = [];
        for (let location of res.data) {
            locations.push({
                label: location.AdministrativeArea.EnglishName,
                value: location.Country.EnglishName,
                code: location.Key
            });
        }
        return locations;
    } catch (error) {
        console.log('get top cities failed', error);
    }
}
