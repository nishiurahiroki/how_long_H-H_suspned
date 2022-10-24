import React from 'react'

import { useQuery } from 'urql'

import { useClock } from '../hooks/useClock'

import styles from '../styles/Clock.module.css'

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

export type ClockProps = {
  now: string;
}

export type SuspendedDate = {
  lastSerial : {
    date : {
      year  : number;
      month : number;
      day   : number;
    }
  }
}

export default (props: ClockProps) : JSX.Element => {
  const [result] = useQuery<SuspendedDate>({
    query : SuspendedQuery
  })

  const { data } = result

  const { day, hour, minute } = useClock({
    interval,
    lastSerial : new Date(
      data.lastSerial.date.year, 
      data.lastSerial.date.month, 
      data.lastSerial.date.day
    ),
    now : props.now
  })

  return (
    <div>
      <span className={styles.date_text}>{day}</span>日
      {' '}
      <span className={styles.date_text}>{hour}</span>時間
      {' '}
      <span className={styles.date_text}>{minute}</span>分
      <span className={styles.blink_text}>：</span>
    </div>
  )
}