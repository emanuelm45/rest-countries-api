import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './assets/GlobalStyle'
import { Header } from './components'
import { Home } from './pages'
import { lightTheme, darkTheme } from './themes/'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
