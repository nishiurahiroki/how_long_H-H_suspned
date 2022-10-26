import { use } from 'react'

import Head from 'next/head'
import styles from '../styles/index.module.css'

import { fetchNow } from '../utils/DateUtils'

import Clock from '../components/Clock'


async function getNow() {
  const now = await fetchNow()
  return now  
}

export default function Index() {
  const now = use(getNow())
  
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

        <Clock
          now={now}
        />

        <div>経過</div>
      </main>
    </div>
  )
}