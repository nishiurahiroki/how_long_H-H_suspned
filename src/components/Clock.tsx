import React from 'react'

import { useQuery } from 'urql'

import { useClock } from '../hooks/useClock'

import styles from '../styles/Clock.module.css'

const SuspendedQuery = `
  query {
    suspended {
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
  suspended : {
    date : {
      year  : number;
      month : number;
      day   : number;
    }
  }
}

export default (props: ClockProps) : JSX.Element => {
  const [result] = useQuery<SuspendedDate | null>({
    query : SuspendedQuery
  })

  const { data } = result

  const { day, hour, minute } = useClock({
    interval,
    suspended : new Date(
      data.suspended.date.year, 
      data.suspended.date.month, 
      data.suspended.date.day
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