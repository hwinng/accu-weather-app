import axios from 'axios';

/**
 *
 * @param {*} apiKey 
 * @returns an object that holds information of user's location
 */
export const getCurrentLocation = async (apiKey) => {
    const tracedIP = await axios.get('https://www.cloudflare.com/cdn-cgi/trace');
    const toSplitStr = tracedIP.data.replace(/(\r\n|\n|\r)/gm, ",");
    const subStr = toSplitStr.substring(toSplitStr.indexOf('ip'));

    const ipAddress = subStr.substring(3, subStr.indexOf(','))
    
    const url = `http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${apiKey}&q=${ipAddress}`;
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

/**
 * 
 * @param {*} apiKey 
 * @returns return an array of 150 top cities in the world
 */
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
