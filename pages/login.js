import styles from "../styles/login.module.css"
import Head from "next/head";
import { auth, provider } from "../firebase"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }



    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
            </Head>

            <div className={styles.wrap}>
                <div className={styles.loginCard}>
                    <h1 className={styles.logo}>Huddle</h1>

                    <button onClick={signIn} className={styles.button}><ExitToAppIcon className={styles.exitIcon}/></button>
                </div>
            </div>

        </div>
    )
}

export default Login;