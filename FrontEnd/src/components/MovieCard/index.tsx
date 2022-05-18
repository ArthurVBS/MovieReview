import { Link } from 'react-router-dom'
import { Movie } from '../../types/movie'
import MovieScore from '../MovieScore'
import { Button, Container, Image, Title } from './styles'

type Props = {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Container>
      <Image src={movie.image} alt={movie.title} />
      <Title>{movie.title}</Title>
      <MovieScore count={movie.count} score={movie.score} />
      <Button><Link to={`/form/${movie.id}`}>Rate</Link></Button>
    </Container>
  )
}

export default MovieCard
