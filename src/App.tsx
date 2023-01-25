import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './assets/GlobalStyle'
import { Header } from './components'
import { RoutesApp } from './routes'
import { lightTheme, darkTheme } from './themes/'
import ScrollToTop from './utils/ScrollToTop'

function App() {
  const [theme, setTheme] = useState(lightTheme)
  const [isDarkTheme, setIsDarkTheme] = useState(theme === darkTheme)

  useEffect(() => {
    setIsDarkTheme(theme === darkTheme)
  }, [theme])

  function handleToggleTheme() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <div className="App">
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          handleToggleTheme={handleToggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <RoutesApp />
      </ThemeProvider>
    </div>
  )
}

export default App
