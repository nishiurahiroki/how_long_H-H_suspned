import { useSuspendDate } from '../hooks/useSuspendDate'

import Head from 'next/head'
import styles from '../styles/index.module.css'

import {fetchNow} from '../utils/DateUtils'
import { gql } from "@apollo/client";
import apolloClient from '../gql/client'

import Clock from '../components/Clock'


const interval = 1000

export default function Index({ now, lastSerial }) {
  const { day, hour, minute } = useSuspendDate({
    interval,
    lastSerial : new Date(lastSerial.year, lastSerial.month, lastSerial.day),
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


export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query { 
        lastSerial {
          date {
            year
            month
            day
          }
        }
      }
    `,
  });

  const now = await fetchNow()
  return {
    props : { now, lastSerial : data.lastSerial.date }
  }
}
