import styles from "../../../styles/weather.module.css"
import { useEffect, useState } from "react";
import Clock from 'react-live-clock';
import Time from "./Time";
import ReactAnimatedWeather from 'react-animated-weather';
import momentDt from "moment-dt"
import moment from "moment-timezone"
import Forcast from "./Forcast";

const Weather = () => {

    const [weatherData, setWeatherData] = useState(null)
    const [forcastData, setForcastData] = useState(null)
    const [weatherForcast, setWeatherForcast] = useState(null)
    const [iconState, setIconState] = useState(null)


    useEffect(() => {
        if (navigator.geolocation) {
            getPostions()
                .then((position) => {
                    getWeather(position.coords.latitude, position.coords.longitude);
                    getForcast(position.coords.latitude, position.coords.longitude);
                })
        }

    }, [])
    


    const getPostions = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    const getWeather = async (lat, long) => {
        const apiKey = "dbc2abe5ec6539cb9230bcb89fd19cce"
        const api = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`
        );
        const data = await api.json();
        // console.log(data)
        setWeatherData({
            temp: Math.round(data.main.temp),
            location: data.name,
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            description: data.weather[0].description,
            weather: data.weather[0].main,
        })
    }

    const getForcast = async (lat, long) => {
        const apiKey = "dbc2abe5ec6539cb9230bcb89fd19cce";
        const api = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,alrerts&units=imperial&appid=${apiKey}`
        );
        const data = await api.json();
        console.log("Forcast >>>>> ", data)
        setForcastData({
            daily: data.daily,
            hourly: data.hourly,
            timezone: data.timezone,
        })
        // console.log(forcastData)
    }

    const getWeatherForcast = () => {
        if (forcastData) {
            let dataArry = forcastData.daily;
            let forcastArry = []
            let momentDay = ""

            dataArry.forEach((day) => {
                let myMoment = null;
                let sunsetMoment = null;
                myMoment = moment.dt({ ts: day.dt, tz: forcastData.timezone });
                sunsetMoment = moment.dt({ ts: day.sunset.dt, tz: forcastData.timezone });
                if (myMoment._d.getDay() === 0) {
                    momentDay = "Su"
                } else if (myMoment._d.getDay() === 1) {
                    momentDay = "M"
                }
                else if (myMoment._d.getDay() === 2) {
                    momentDay = "Tu"
                }
                else if (myMoment._d.getDay() === 3) {
                    momentDay = "W"
                }
                else if (myMoment._d.getDay() === 4) {
                    momentDay = "Th"
                }
                else if (myMoment._d.getDay() === 5) {
                    momentDay = "F"
                }
                else if (myMoment._d.getDay() === 6) {
                    momentDay = "S"
                }
                forcastArry.push({
                    time: momentDay,
                    sunset: sunsetMoment,
                    moonPhase: day.moon_phase,
                    high: Math.round(day.temp.max),
                    low: Math.round(day.temp.min),
                    daytemp: Math.round(day.feels_like.day)
                });
                setWeatherForcast(forcastArry)
            })
            setForcastData(null);
            console.log("weatherData >>>", weatherData)
            // console.log("forcastDataCodes >>>", forcastDay)
        }
    }

    const weatherIcon = (weather, description) => {
        console.log(weather, description, iconState)
        if (iconState === null) {
            if (weather === "Thunderstorm" || weather === "Rain" || weather === "Drizzle"){
                return "RAIN"
            } else if(weather === "Clear") {
                return "CLEAR_DAY"
            } else if (weather === "Snow") {
                return "SNOW"
            } else if (weather === "Cloud" && description === "few clouds" || description === "scattered clouds") {
                return "PARTLY_CLOUDY_DAY"
            } else if (weather === "Cloud" && description === "broken clouds" || description === "overcast clouds") {
                return "CLOUDY"
            } else if (
                weather === "Mist" 
                || weather === "Smoke" 
                || weather === "Haze"
                || weather === "Dust"
                || weather === "Fog"
                || weather === "Sand"
                || weather === "Dust"
                || weather === "Ash"
                || weather === "Squall"
                || weather === "Tornado"
        
                ) {
                    return "FOG"
                }
            
        }

    }

    getWeatherForcast()




    return (

        <div className={styles.weatherContainer}>
            <div className={styles.imgContainer}>
                <div className={styles.imgContainer__header}>
                    <div>
                        <h2>{weatherData && weatherData.location}</h2>
                        <p>{weatherData && weatherData.country}</p>
                    </div>
                    <h1 className={styles.weatherTemp}>{weatherData && weatherData.temp}&#176;<span>F</span></h1>
                </div>
                <div>
                    <Time />
                    <p> <Clock format={'dddd, MMMM DD, YYYY'} date="" /></p>
                </div>

            </div>
            <div className={styles.weatherInfo}>
                {weatherData &&
                    <div className={styles.weatherDescription}>
                        <ReactAnimatedWeather
                            icon={weatherIcon(weatherData.weather, weatherData.description)}
                            color={'white'}
                            size={70}
                            animate={true}
                        />
                        <h4>{weatherData.description}</h4>
                    </div>
                }

                {weatherForcast && <Forcast forcast={weatherForcast} />}
            </div>
        </div>
    )
}

export default Weather;
