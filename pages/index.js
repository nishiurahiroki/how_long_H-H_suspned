import {useEffect, useState, useRef} from 'react'

import DateDiff from 'date-diff'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {fetchNow} from '../utils/DateUtils'

const INTERVAL = 1000
const SUSPENDED_DAY = new Date(2018, 11, 26)

export default function Home({ now }) {
  const nowSeconds = useRef(new Date(now).getTime())

  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')

  useEffect(() => {
    let timer = setTimeout(function main() {
      const diff = new DateDiff(new Date(nowSeconds.current), SUSPENDED_DAY)
  
      const day = diff.seconds() / 86400
      const surplusDay = diff.seconds() % 86400
      const hour = surplusDay / 3600
      const surplusHour = surplusDay % 3600
      const minute = surplusHour / 60
  
      setMinute(Math.floor(minute))
      setHour(Math.floor(hour))
      setDay(Math.floor(day - 1))

      nowSeconds.current = nowSeconds.current + INTERVAL
      timer = setTimeout(main, INTERVAL)
    }, INTERVAL)
    return () => clearTimeout(timer)
  }, [])

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
