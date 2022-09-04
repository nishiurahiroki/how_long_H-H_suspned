import { useSuspendClock } from '../hooks/useSuspendClock'

import Head from 'next/head'
import styles from '../styles/index.module.css'

import {fetchNow} from '../utils/DateUtils'

import Clock from '../components/Clock'


const interval = 1000
const suspended = new Date(2018, 11, 26)

export default function Index({ now }) {
  const { day, hour, minute } = useSuspendClock({
    interval,
    suspended,
    now
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>How long Hunter×Hunter suspended</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main className={styles.main}>
        <div>
          Hunter×Hunter 休載から
        </div>

        <Clock day={day} hour={hour} minute={minute} />

        <div>経過</div>
      </main>
    </div>
  )
}


export async function getServerSideProps() {
  const now = await fetchNow()
  return {
    props : { now }
  }
}
