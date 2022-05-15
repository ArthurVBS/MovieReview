import MovieStars from "../MovieStars"
import './styles.css'

const MovieScore: React.FC = () => {
  const movie = {
    id: 1,
    image: 'https://www.themoviedb.org/t/p/w500_and_h282_face/lOr9NKxh4vMweufMOUDJjJhCRHW.jpg',
    title: 'WandaVision',
    count: 3,
    score: 3.5
  }

  return (
    <div className="score-container">
      <span className="score-value">{movie.score > 0 ? movie.score.toFixed(1) : '-'}</span>
      <MovieStars />
      <span className="score-count">{movie.count} Reviews</span>
    </div>
  )
}

export default MovieScore
