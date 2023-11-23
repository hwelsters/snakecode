import type { AppProps } from 'next/app'

import PyodideProvider from '@/providers/pyodide-provider'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PyodideProvider>
      <Component {...pageProps} />
    </PyodideProvider>
  )
}
