import { Suspense, lazy } from 'react'

import Head from 'next/head'
import styles from '../styles/index.module.css'

import { fetchNow } from '../utils/DateUtils'

import Loading from '../components/Loading'
const Clock = lazy(() => import('../components/Clock'));


export default function Index({ now }) {
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

        <Suspense fallback={<Loading/>}>
          <Clock
            now={now}
          />
        </Suspense>

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
