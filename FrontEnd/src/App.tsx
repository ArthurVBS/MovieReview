import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/globalStyles'
import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

import Form from './pages/Form'
import Listing from './pages/Listing'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Navbar />

        <Routes>
          <Route path='/' element={<Listing />} />
          <Route path='/form'>
            <Route path=':movieId' element={<Form />} />
          </Route>
        </Routes>

      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
