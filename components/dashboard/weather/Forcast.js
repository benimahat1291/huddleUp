import styles from "../../../styles/weather.module.css";


const Forcast = ({ forcast }) => {

    const fourDay = forcast.splice(5);

    console.log("fourday",fourDay, forcast)
    

    
    return (
        <div className={styles.forcastContainer}>
                {forcast.map((day) => (
                    <div key={day.time} className={styles.forcastDay}>
                        <p>{day.time}</p>
                        <h5 className={styles.forcastTemp}>{day.daytemp}&#176;<span>F</span></h5>
                    </div>
                ))}
        </div>
    )
}

export default Forcast
