import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import { useEffect, useState } from 'react';
import { getCurrentLocation, getTopCities, getForcast } from './service';
import { CityDropdown, WeeklyWeatherForcast } from './components';
import { environment } from './environment/environment.local';


function App() {
  const [selectedCity, setSelectedCity] = useState('Hanoi');
  const [selectedDay, setSelectedDay] = useState('0');
  const [locations, setLocations] = useState([]);
  const [weatherForcast, setWeatherForcast] = useState([]);

  useEffect(() => {
    document.title = 'Hanu-IWS Weather';
    async function fetchInitialData() {
      const cities = await getTopCities(environment.apiKey);
      const currentLocation = await getCurrentLocation(environment.apiKey);
      setLocations(cities);

      await weeklyForcast(environment.apiKey, currentLocation.parentCity.Key)
    }
    fetchInitialData();
  }, [])

  const handleSelectChange = async (label, code) => {
    setSelectedCity(label);
    await weeklyForcast(environment.apiKey, code);
  }

  const weeklyForcast = async (apiKey, value) => {
    const res = await getForcast(apiKey, value);
    const fiveDayForcast = res.data.DailyForecasts;
    setWeatherForcast(fiveDayForcast);
  }

  const handleDaySelection = e => {
    console.log(e);
    setSelectedDay(e);
  }

  return (
    <div className="App">
        <h1 style={{textAlign: 'left', marginLeft: '2rem', paddingTop: '1rem', fontFamily: 'monospace'}}>Weather Forcast</h1>
        <CityDropdown
          locations={locations}
          handleOnChange={handleSelectChange}
        />

        {weatherForcast.length === 0 
          ? null 
          : (
              <WeeklyWeatherForcast
                handleDaySelection={handleDaySelection}
                selectedDay={selectedDay}
                selectedCity={selectedCity}
                weatherData={weatherForcast}
              />
            )}
      </div>
  );
}

export default App;
