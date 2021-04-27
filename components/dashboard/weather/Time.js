import {useEffect, useState} from "react"



const Time = () => {
    
const [date, setDate] = useState(new Date())

const changeTime = () => {
    setInterval(()=> {
        setDate(new Date())

    },1000)
}

useEffect(() => {
   changeTime() 
}, [])


    return (
        <>
            <h2>{date.toLocaleTimeString()}</h2>
        </>
    )
}

export default Time
