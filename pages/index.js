import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Huddle Up</title>
      </Head>
      
      <Sidebar/>

    </div>
  )
}
