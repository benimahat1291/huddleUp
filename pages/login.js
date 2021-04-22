import styles from "../styles/login.module.css"
import Head from "next/head";
import { auth, provider } from "../firebase"

const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }



    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
            </Head>

            <div className={styles.loginCard}>
                <h1 className={styles.logo}>Huddle</h1>

                <button className={styles.login} onClick={signIn} variant="outlined">Login with Google</button>

            </div>

        </div>
    )
}

export default Login;