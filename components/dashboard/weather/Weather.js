import styles from "../../../styles/Weather.module.css"
import { useEffect, useState } from "react";

const Weather = () => {

    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        if (navigator.geolocation) {
            getPostions()
                .then((position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    getWeather(position.coords.latitude, position.coords.longitude)

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
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
        );
        const data = await api.json();
        console.log(data)
        setWeatherData({
            temp: Math.round(data.main.temp),
            location: data.name,
            country: data.sys.country,

            
        })
    }

    return (
        <div className={styles.weatherContainer}>
            <div className={styles.imgContainer}>
                <div className={styles.imgContainer__header}>
                    <div>
                        <h2>{weatherData && weatherData.location}</h2>
                        <p>{weatherData && weatherData.country}</p>
                    </div>
                    <h1>{weatherData && weatherData.temp}</h1>
                </div>
                <div>
                    <h2>20:00</h2>
                    <p>Sunday, Januaray 31, 2021</p>
                </div>

            </div>
            <div className={styles.weatherInfo}>
            </div>

            {/* <h2>{weatherData ? `temp:${weatherData.temp} location:${weatherData.location}` : null}</h2> */}
        </div>
    )
}

export default Weather;
