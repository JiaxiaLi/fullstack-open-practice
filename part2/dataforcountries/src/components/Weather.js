/*
 * @Author: lijiaxia
 * @Date: 2023-07-03 17:08:19
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/dataforcountries/src/components/Weather.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-03 17:18:31
 */
import { useState } from "react";
import axios from "axios";
/**
 * WARN:造成死循环了，原因不明，待排查
 * @param {*} props 
 * @returns 
 */

const Weather = (props) => {
    const { countryName } = props;

    const [weather, setWeather] = useState({});
    const api_key = process.env.REACT_APP_API_KEY;

    const getCityWeather = () => {
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${api_key}`;
        axios
            .get(api)
            .then((response) => {
                console.log("response.data", response.data);
                setWeather(response.data);
                console.log("weatherInfo", weather);
            })
            .catch(() => {});
    };

    getCityWeather();

    return (
        <div>
            <h1>Weather in {countryName}</h1>
            <div>
                temperature {weather && weather.main ? weather.main.temp : ""}{" "}
                Celcius
            </div>
            <img
                src={
                    weather && weather.weather
                        ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
                        : ""
                }
            ></img>
            <div>
                wind {weather && weather.wind ? weather.wind.speed : ""} m/s
            </div>
        </div>
    );
};

export default Weather;
