import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
          <ThemeProvider defaultTheme="dark" attribute="class">
          <Component {...pageProps} />
          </ThemeProvider>
    </React.Fragment>
  )
  
  

}
