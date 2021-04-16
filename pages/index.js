import Head from 'next/head'
import DashBoard from '../components/dashboard/DashBoard'
import Sidebar from '../components/Sidebar'
import styles from "../styles/Home.module.css"


export default function Home() {
    return (
        <>
            <Head>
                <title>Huddle Up</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@100&family=Saira+Condensed&display=swap" rel="stylesheet" />
            </Head>
                <div className={styles.app}>
                    <Sidebar />
                    <DashBoard />
                </div>
        </>


    )
}
