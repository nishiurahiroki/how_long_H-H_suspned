import { use } from 'react'

import styles from './page.module.css'

import SuspendedRepository from '../repositories/SuspendedRepository'
import { fetchNow } from '../utils/DateUtils'

import Clock from '../components/Clock'

export default function Index() {
  const now = use<string>(fetchNow())
  const suspended = use(SuspendedRepository.get())

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          Hunter×Hunter 休載から
        </div>

        <Clock
          now={now}
          suspended={suspended.data.suspended.date}
        />

        <div>経過</div>
      </main>
    </div>
  )
}