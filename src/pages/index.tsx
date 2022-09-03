import { useSuspendClock } from '../hooks/useSuspendClock'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {fetchNow} from '../utils/DateUtils'

const INTERVAL = 1000
const SUSPENDED_DAY = new Date(2018, 11, 26)

export default function Home({ now }) {
  const { day, hour, minute } = useSuspendClock({
    interval : INTERVAL,
    suspended : SUSPENDED_DAY,
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
        <div>
          <span className={styles.date_text}>{day}</span>日
          {' '}
          <span className={styles.date_text}>{hour}</span>時間
          {' '}
          <span className={styles.date_text}>{minute}</span>分
          <span className={styles.blink_text}>：</span>
        </div>
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
