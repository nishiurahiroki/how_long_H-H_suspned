'use client'

import React from 'react'

import { useClock } from '../hooks/useClock'


const interval = 1000

export type ClockProps = {
  now: string;
  suspended : {
    year  : number;
    month : number;
    day   : number;
  }
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
  const { day, hour, minute } = useClock({
    interval,
    suspended : new Date(
      props.suspended.year,
      props.suspended.month,
      props.suspended.day,
    ),
    now : props.now
  })

  return (
    <div>
      <span className="date_text">{day}</span>日
      {' '}
      <span className="date_text">{hour}</span>時間
      {' '}
      <span className="date_text">{minute}</span>分
      <span className="blink_text">：</span>
    </div>
  )
}