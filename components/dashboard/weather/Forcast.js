import styles from "../../../styles/weather.module.css";
import {useState} from "react";


const Forcast = ({ forcast }) => {
   
    
    return (
        <div className={styles.forcastContainer}>
                {forcast.splice(4).map((day) => (
                    <div className={styles.forcastDay}>
                        <p>{day.time}</p>
                        <p className={styles.forcastTemp}>{day.daytemp}&#176;<span>F</span></p>
                    </div>
                ))}
        </div>
    )
}

export default Forcast
