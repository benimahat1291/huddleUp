import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase";
import styles from "../../styles/DashBoard.module.css"
import Header from "./Header"
import TodoList from "./todolist/TodoList";
import Weather from "./weather/Weather";



const DashBoard = () => {
    const [user] = useAuthState(auth);
    return (
        <header className={styles.dashBoard}>
            <Header/>
            <Weather/>
            <TodoList/>


            
        </header>
    )
}

export default DashBoard
