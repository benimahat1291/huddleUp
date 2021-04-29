import styles from "../../styles/Header.module.css"
import SettingsIcon from '@material-ui/icons/Settings'
import { Avatar, IconButton } from "@material-ui/core"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"


const Header = () => {
    const [user] = useAuthState(auth)
    const name = user.email.split("@")
    console.log("user >>>>>", user)

    return (
        <header className={styles.header}>
            <div className={styles.headerTitle}>
                <h3>Hello, <span>{name[0]}</span></h3>
                <h2>Welcome back to the Huddle</h2>
            </div>

            <div className={styles.headerIcons}>
                <IconButton><SettingsIcon /></IconButton>
                <img src={user.photoURL} alt="avatar" className={styles.headerAvatar} />
            </div>
        </header>
    )
}

export default Header
