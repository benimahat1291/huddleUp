import styles from "../../../styles/Weather.module.css"
import { useEffect, useState } from "react";
import Clock from 'react-live-clock';
import Time from "./Time";
import ReactAnimatedWeather from 'react-animated-weather';
import momentDt from "moment-dt"
import moment from "moment-timezone"

const Weather = () => {

    const [weatherData, setWeatherData] = useState(null)
    const [forcastData, setForcastData] = useState(null)

    
    useEffect(() => {
        if (navigator.geolocation) {
            getPostions()
                .then((position) => {
                    getWeather(position.coords.latitude, position.coords.longitude);
                    getForcast(position.coords.latitude, position.coords.longitude)

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
            description: data.weather[0].description,
            
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
        console.log(forcastData)
    }

    const defaults = {
        icon: 'CLEAR_DAY',
        color: 'white',
        size: 70,
        animate: true
    };
    if(forcastData) {
        let dataArry = forcastData.daily;
        let forcastArry = []
        let myMoment = null;
        dataArry.forEach((day) => {
            myMoment = moment.dt({ts:day.dt, tz: forcastData.timezone});
            forcastArry.push(myMoment._d)
        })

        forcastArry.forEach((day)=> {
            console.log("day", day.getDay())
        })
        console.log("forcastArr >>>",forcastArry)
        console.log("forcastData >>>",dataArry[0].dt)

    }

    return (

        <div className={styles.weatherContainer}>
            <div className={styles.imgContainer}>
                <div className={styles.imgContainer__header}>
                    <div>
                        <h2>{weatherData && weatherData.location}</h2>
                        <p>{weatherData && weatherData.country}</p>
                    </div>
                    <h1>{weatherData && weatherData.temp}<span>&#176;F</span></h1>
                    <p></p>
                </div>
                <div>
                    <Time />
                    <p> <Clock format={'dddd, MMMM DD, YYYY'} date="" /></p>
                </div>

            </div>
            <div className={styles.weatherInfo}>
                <div className={styles.weatherDescription}>
                    <ReactAnimatedWeather
                        icon={defaults.icon}
                        color={defaults.color}
                        size={defaults.size}
                        animate={defaults.animate}
                    />
                    <h4 >{weatherData && weatherData.description}</h4>
                </div>

                <div>
                    <h5>{forcastData && forcastData.timezone}</h5>
                </div>



            </div>
        </div>
    )
}

export default Weather;
