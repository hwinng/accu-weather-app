import React from "react";
import { SingleDayWeatherForcast } from "./SingleDayWeatherForcast";
import Moment from "react-moment";
import { fahrenheitToCelcius } from '../../utils'

export const WeeklyWeatherForcast = ({
  weatherData,
  selectedCity,
  selectedDay,
  handleDaySelection
}) => {
    return (
        <div className="container gray text-white">
            {weatherData[0] 
                ? (
                    <div className="d-flex p-2 bd-highlight justify-content-center top-weather">
                    <div className="flex-row bd-highlight">
                        <h4>{selectedCity}</h4>
                        <Moment format="dddd">{weatherData[selectedDay].Date}</Moment>

                        <div className="flex-row bd-highlight">
                            <img
                                src={`https://developer.accuweather.com/sites/default/files/${
                                weatherData[selectedDay].Day.Icon >= 10
                                    ? weatherData[selectedDay].Day.Icon
                                    : "0" + weatherData[selectedDay].Day.Icon
                                }-s.png`}
                                alt="weather-icon"
                            />
                            <p>{weatherData[selectedDay].Day.IconPhrase}</p>
                        </div>
                    </div>
                    </div>
                ) 
                : null
            }

            <div className="d-flex p-2 bd-highlight justify-content-center bottom-weather" style={{marginTop: '5rem'}}>
                {weatherData.map((day, index) => (
                    <SingleDayWeatherForcast
                        selectedDay={selectedDay}
                        dayIndex={index}
                        key={day.EpochDate}
                        dayDate={day.Date}
                        dayIcon={day.Day.Icon}
                        dayMaxTemp={fahrenheitToCelcius(day.Temperature.Maximum.Value).toFixed(1)}
                        dayMinTemp={fahrenheitToCelcius(day.Temperature.Minimum.Value).toFixed(1)}
                        handleDaySelection={() => handleDaySelection(index)}
                    />
                ))}
            </div>
        </div>
    );
};
