import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase";
import styles from "../../styles/DashBoard.module.css"
import Header from "./Header"
import TodoList from "./TodoList";



const DashBoard = () => {
    const [user] = useAuthState(auth);
    return (
        <header className={styles.dashBoard}>
            <Header/>
            <TodoList/>


            
        </header>
    )
}

export default DashBoard
