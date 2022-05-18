import { useParams } from 'react-router-dom'
import FormCard from '../../components/FormCard'

const Form: React.FC = () => {
  const params = useParams()

  return (
    <FormCard movieId={`${params.movieId}`} />
  )
}

export default Form
