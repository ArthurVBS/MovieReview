import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './pages/Form'
import Listing from './pages/Listing'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Listing />} />
        <Route path='/form'>
          <Route path=':movieId' element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
