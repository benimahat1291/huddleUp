import styles from "../../styles/Header.module.css"
import SettingsIcon from '@material-ui/icons/Settings';
import {Avatar, IconButton} from "@material-ui/core"


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerTitle}>
                <h1>Hello, Beni</h1>
                <h2>Welcome back to the Huddle</h2>
            </div>

            <div className={styles.headerIcons}>
                <IconButton><SettingsIcon/></IconButton>
                <img src="https://avatars.githubusercontent.com/u/69019321?v=4" alt="avatar" className={styles.headerAvatar}/>
            </div>
            
        </header>
    )
}

export default Header
