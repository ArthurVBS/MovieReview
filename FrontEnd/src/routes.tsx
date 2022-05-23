import { Routes, Route } from 'react-router-dom'

import Form from './pages/Form'
import Listing from './pages/Listing'

const MyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Listing />} />
      <Route path='/form'>
        <Route path=':movieId' element={<Form />} />
      </Route>
    </Routes>
  )
}

export default MyRoutes
