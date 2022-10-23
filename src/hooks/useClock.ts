import {useRef, useState, useEffect} from 'react'

import DateDiff from 'date-diff'

export function useClock({
  interval, now, lastSerial
}) {
  const nowSeconds = useRef(new Date(now).getTime())

  const [day, setDay] = useState(0)
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)

  useEffect(() => {
    if(!lastSerial) return

    let timer = setTimeout(function main() {
      const diff = new DateDiff(new Date(nowSeconds.current), lastSerial)

      const day = diff.seconds() / 86400
      const surplusDay = diff.seconds() % 86400
      const hour = surplusDay / 3600
      const surplusHour = surplusDay % 3600
      const minute = surplusHour / 60
  
      setMinute(Math.floor(minute))
      setHour(Math.floor(hour))
      setDay(Math.floor(day - 1))

      nowSeconds.current = nowSeconds.current + interval
      timer = setTimeout(main, interval)
    }, interval)

    // スマホのロックからの復帰や、タブ遷移した際に時間が止まる件の対策
    if (typeof window === 'object') { 
      document.addEventListener('visibilitychange', () => {
        (async () => {
          if (document.visibilityState === 'visible') {
            const response = await fetch('/api/now')
            const json = await response.json()
            nowSeconds.current = new Date(json.datetime).getTime()
          }
        })()
      })
    }
    return () => clearTimeout(timer)
  }, [interval, lastSerial])

  if(!lastSerial) {
    return { day : 0, hour : 0, minute : 0 }
  }

  return { day, hour, minute }
}