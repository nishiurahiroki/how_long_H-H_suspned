import { use } from 'react'

import styles from '../styles/index.module.css'

import { fetchNow } from '../utils/DateUtils'

import Clock from '../components/Clock'

export default function Index() {
  const now = use<string>(fetchNow())
  
  return (
    <div className={styles.container}>
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