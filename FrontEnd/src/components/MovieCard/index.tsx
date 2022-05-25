import { useEffect } from 'react'
import Aos from 'aos'
import { Link } from 'react-router-dom'
import { Movie } from '../../types/movie'
import MovieScore from '../MovieScore'
import { Button, Container, Image, Title } from './styles'

type Props = {
  movie: Movie
}

const MovieCard: React.FC<Props> = ({ movie }: Props) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <Container data-aos="fade-up">
      <Image src={movie.image} alt={movie.title} />
      <Title>{movie.title}</Title>
      <MovieScore count={movie.count} score={movie.score} />
      <Button><Link to={`/form/${movie.id}`}>Rate</Link></Button>
    </Container>
  )
}

export default MovieCard
