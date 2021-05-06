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
            <h4>{date.toLocaleTimeString()}</h4>
        </>
    )
}

export default Time
