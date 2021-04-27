import styles from "../../../styles/Todolist.module.css"
import TextField from "@material-ui/core/TextField"
import { Button } from "@material-ui/core"
import { useState, useEffect } from "react"
import { db, auth } from "../../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Todos from "./Todos"
import firebase from "firebase"


const TodoList = () => {

    const [user] = useAuthState(auth)
    const [activeTodos, setActiveTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [todoInput, setTodoInput] = useState("")


    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = () => {
        db.collection("todos").where("user", "==", user.email).where("inprogress", "==", true).onSnapshot((TodoSnapshot) => {
            setActiveTodos(
                TodoSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    todoItem: doc.data().todoItem,
                    inprogress: doc.data().inprogress,
                }))
            )
        })
        db.collection("todos").where("user", "==", user.email).where("inprogress", "==", false).onSnapshot((TodoSnapshot) => {
            setCompletedTodos(
                TodoSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    todoItem: doc.data().todoItem,
                    inprogress: doc.data().inprogress,
                }))
            )
        })
    }

    const addTodo = (e) => {
        e.preventDefault();
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
                <div className={styles.textInput}>
                <TextField  
                    style={{width:"90%"}}
                    id="standard-basic"
                    label="Add a Todo"
                    value={todoInput}
                    onChange={(e) => (setTodoInput(e.target.value))}
                />
                </div>
                <Button style={{ display: "none" }} type="submit" variant="contained" onClick={addTodo}>Add</Button>
            </form>
            <div className={styles.todoItems}>
                {
                    activeTodos.map((todo) => (
                        <Todos key={todo.id} todoItem={todo.todoItem} inprogress={todo.inprogress} id={todo.id} />
                    ))
                }
                {
                    completedTodos.map((todo) => (
                        <Todos key={todo.id} todoItem={todo.todoItem} inprogress={todo.inprogress} id={todo.id} />
                    ))
                }
            </div>


        </div>
    )
}

export default TodoList
