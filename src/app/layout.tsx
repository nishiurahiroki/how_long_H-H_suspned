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
        <head></head>
        <body>{children}</body>
      </html>
    </Provider>
  )
}
