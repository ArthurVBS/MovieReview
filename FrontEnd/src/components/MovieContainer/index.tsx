import MovieCard from '../MovieCard'
import { MoviePage } from '../../types/movie'
import { Card, Container } from './styles'

type Props = {
  page: MoviePage
}

const MovieContainer: React.FC<Props> = ({ page }: Props) => {
  return (
    <Container className='container'>
      <div className='row'>

        {page.content.map(movie => (
          <Card key={movie.id} className='col-sm-6 col-lg-4 col-xl-3'>
            <MovieCard movie={movie} />
          </Card>
        ))}

      </div>
    </Container>
  )
}

export default MovieContainer
