/* eslint-disable no-unused-vars */
import { Component, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import { ThemeProvider } from 'styled-components'
import { Router } from './router'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'
function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
