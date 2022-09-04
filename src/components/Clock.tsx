import React from 'react'

import styles from '../styles/Clock.module.css'


export type ClockProps = {
  day: number;
  hour: number;
  minute: number;
}

export default (props: ClockProps) => {
  const { day, hour, minute } = props

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