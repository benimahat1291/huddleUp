import { ListItem, ListItemText } from "@material-ui/core"
import styles from "../../../styles/Todos.module.css"
import DoneIcon from '@material-ui/icons/Done';
import ReplayIcon from '@material-ui/icons/Replay';
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { db } from "../../../firebase";

function Todos({ todoItem, inprogress, id }) {

    const toggleComplete = () => {
        db.collection("todos").doc(id).update({
            inprogress: !inprogress
        })
    }

    const deleteTodo = () => {
        db.collection("todos").doc(id).delete();
    }



    return (
        <div className={inprogress ? styles.todoItemActive: styles.todoItemCompleted }>
            <ListItemText primary={todoItem}/>
            <IconButton onClick={toggleComplete}>
                {inprogress ? <DoneIcon /> : <ReplayIcon />}
            </IconButton>
            {!inprogress && <IconButton onClick={deleteTodo}>
                <CloseIcon />
            </IconButton>}
        </div>
    )
}

export default Todos
