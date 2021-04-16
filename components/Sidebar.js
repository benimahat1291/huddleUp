import styles from "../styles/Sidebar.module.css"
import {IconButton} from "@material-ui/core"
import DashboardIcon from '@material-ui/icons/Dashboard';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Sidebar = () => {
    return (
    <container className={styles.navContainer}>
        <div className={styles.navbar}>
            <h1 className={styles.navTitle}>Huddle<span></span></h1>
            <ul className={styles.navItems}>
                <li><IconButton><DashboardIcon/></IconButton></li>
                <li><IconButton><DateRangeIcon/></IconButton></li>
                <li><IconButton><FolderOpenIcon/></IconButton></li>
                <li><IconButton><SettingsIcon/></IconButton></li>
            </ul>
            <div className={styles.logout}><IconButton><ExitToAppIcon/></IconButton></div>
        </div>
    </container>
    )
}

export default Sidebar
