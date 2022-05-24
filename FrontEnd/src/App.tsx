import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import GlobalStyles from './styles/globalStyles'
import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
