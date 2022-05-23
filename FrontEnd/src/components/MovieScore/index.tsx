import MovieStars from '../MovieStars'
import { Container, Count, Value } from './styles'

type Props = {
  score: number,
  count: number
}

const MovieScore: React.FC<Props> = ({ score, count }: Props) => {
  return (
    <Container>
      <Value>{score > 0 ? score.toFixed(1) : '-'}</Value>
      <MovieStars score={score} />
      <Count className='score-count'>{count} Reviews</Count>
    </Container>
  )
}

export default MovieScore
