import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase";
import styles from "../../styles/DashBoard.module.css"
import Header from "./Header"
import News from "./news/News";
import TodoList from "./todolist/TodoList";
import Weather from "./weather/WeatherApp";



const DashBoard = () => {
    const [user] = useAuthState(auth);
    return (
        <header className={styles.dashBoard}>
            <Header/>
            <div className={styles.dashRow}>
            <News/>
            <Weather />
            </div>
            <TodoList/> 
        </header>
    )
}

export default DashBoard
