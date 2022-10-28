import { use } from 'react'

import SuspendedRepository from '../repositories/SuspendedRepository'
import { fetchNow } from '../utils/DateUtils'

import Clock from '../components/Clock'

export default function Index() {
  const now = use<string>(fetchNow())
  const suspended = use(SuspendedRepository.get())

  return (
    <div className="container">
      <main className="main">
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