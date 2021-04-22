import styles from "../../styles/TodoList.module.css"
import TextField from "@material-ui/core/TextField"
import { Button } from "@material-ui/core"
import { useState, useEffect } from "react"
import { db, auth } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from "firebase"


const TodoList = () => {

    const [user] = useAuthState(auth)
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState("")

    // useEffect(() => {
    //     getTodos();
    // }, [])

    // const getTodos = () => {
    //     db.collection("todos").onSnapshot((TodoSnapshot) => {
    //         setTodos(
    //             TodoSnapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 todoItem: doc.data().todoItem,
    //                 inprogress: doc.data().inprogress,
    //             }))
    //         )
    //     })
    // }

    console.log(todos)

    const addTodo = (e) => {
        e.preventDefault();
        console.log("sumbiting")
        db.collection("todos").add({
            user: user.email,
            inprogress: true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todoItem: todoInput,
        });
        setTodoInput("")
    }

    return (
        <div className={styles.todoContainer}>
            <form className={styles.addTodo}>
                <TextField
                    id="standard-basic"
                    label="Add a Todo"
                    value={todoInput}
                    onChange={(e) => (setTodoInput(e.target.value))}
                />
                <Button style={{ display: "none" }} type="submit" variant="contained" onClick={addTodo}>Add</Button>
            </form>
        </div>
    )
}

export default TodoList
