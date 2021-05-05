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
            {/* <Header/> */}
            {/* <News/> */}
            {/* <Weather /> */}
            {/* <TodoList/>  */}
            <div className={styles.gridItem1}>Header</div>
            <div className={styles.gridItem2}>Weather</div>
            <div className={styles.gridItem3}>News</div>
            <div className={styles.gridItem4}>Widget</div>
            <div className={styles.gridItem5}>Expense Tracker</div>
            <div className={styles.gridItem6}>Todos</div>
            {/* <div className={styles.gridItem7}>7</div>
            <div className={styles.gridItem}>8</div>
            <div className={styles.gridItem}>9</div>
            <div className={styles.gridItem}>10</div> */}
            
        </header>
    )
}

export default DashBoard
