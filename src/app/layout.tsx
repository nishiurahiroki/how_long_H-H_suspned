'use client'

import { Provider } from 'urql';
import client from '../gql/client';

import '../styles/globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider value={client}>
      <html lang="ja">
        <head>
          <title>How long Hunter×Hunter suspended</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>{children}</body>
      </html>
    </Provider>
  )
}
