import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalsStyle from '../styles/globals'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalsStyle/>
  </ThemeProvider>
  )
}

export default MyApp
