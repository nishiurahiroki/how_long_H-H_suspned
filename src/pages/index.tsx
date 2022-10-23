import { Suspense } from 'react'
import { useQuery } from 'urql'
import { useClock } from '../hooks/useClock'

import Head from 'next/head'
import styles from '../styles/index.module.css'

import {fetchNow} from '../utils/DateUtils'

import Clock from '../components/Clock'

const SuspendedQuery = `
  query {
    lastSerial {
      date {
        year
        month
        day
      }
    }
  }
`


const interval = 1000

export default function Index({ now }) {
  const [result] = useQuery({
    query : SuspendedQuery
  })

  console.log(result)
  const { data, fetching } = result

  const { day, hour, minute } = useClock({
    interval,
    lastSerial : data ? new Date(data?.lastSerial.date.year, data?.lastSerial.date.month, data?.lastSerial.date.day) : null,
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

        <Clock 
          day={day} 
          hour={hour} 
          minute={minute} 
        />

        <div>経過</div>
      </main>
    </div>
  )
}


export async function getServerSideProps({res}) {
  const now = await fetchNow()
  return {
    props : { now }
  }
}
