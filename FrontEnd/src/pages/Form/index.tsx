import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import FormCard from '../../components/FormCard'
import Header from '../../components/Header'

const Form: React.FC = () => {
  const params = useParams()

  return (
    <>
      <Header />
      <FormCard movieId={`${params.movieId}`} />
      <Footer />
    </>
  )
}

export default Form
