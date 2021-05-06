import styles from "../../styles/Header.module.css"
import SettingsIcon from '@material-ui/icons/Settings'
import { Avatar, IconButton } from "@material-ui/core"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"
import { motion } from "framer-motion"


const Header = () => {
    const [user] = useAuthState(auth)
    const name = user.email.split("@")
    console.log("user >>>>>", user)

    const wave1 = {
        hidden: {
            backgroundPositionX: "0px",
            opacity: 0.1
        },
        visible: {
            backgroundPositionX: "1000px",

            zIndex: 1000,
            opacity: 0.1,
            transition: {
                loop: Infinity,
                ease: "linear",
                duration: 20,
            }

        }
    }

    const wave2 = {
        hidden: {
            backgroundPositionX: "0px",
            opacity: 0.2
        },
        visible: {
            backgroundPositionX: "-1000px",
            zIndex: 999,
            opacity: 0.3,
            transition: {
                loop: Infinity,
                ease: "linear",
                duration: 20,
            }

        }
    }

    const wave3 = {
        hidden: {
            backgroundPositionX: "0px",
            opacity: 0.2
        },
        visible: {
            backgroundPositionX: "1000px",
            zIndex: 998,
            opacity: 0.2,
            transition: {
                loop: Infinity,
                ease: "linear",
                duration: 25,
            }

        }
    }

    const wave4 = {
        hidden: {
            backgroundPositionX: "0px",
            opacity: 0.1
        },
        visible: {
            backgroundPositionX: "-1000px",
            zIndex: 997,
            opacity: 0.1,
            transition: {
                loop: Infinity,
                ease: "linear",
                duration: 25,
            }

        }
    }


    return (
        <header className={styles.header}>
            <div className={styles.waves}>
                <motion.div
                    className={styles.wave1}
                    variants={wave1}
                    initial="hidden"
                    animate="visible"
                ></motion.div>
                <motion.div
                    className={styles.wave2}
                    variants={wave2}
                    initial="hidden"
                    animate="visible"
                ></motion.div>
                <motion.div
                    className={styles.wave3}
                    variants={wave3}
                    initial="hidden"
                    animate="visible"
                ></motion.div>
                <motion.div
                 className={styles.wave4}
                    variants={wave4}
                    initial="hidden"
                    animate="visible"
                ></motion.div>
            </div>


            {/* <div className={styles.headerIcons}>
                <IconButton><SettingsIcon /></IconButton>
                <img src={user.photoURL} alt="avatar" className={styles.headerAvatar} />
            </div> */}
        </header>
    )
}

export default Header
