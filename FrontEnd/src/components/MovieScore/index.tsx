import MovieStars from "../MovieStars"
import './styles.css'

type Props = {
  score : number,
  count : number
}

const MovieScore = ({score, count} : Props) => {
  return (
    <div className="score-container">
      <span className="score-value">{score > 0 ? score.toFixed(1) : '-'}</span>
      <MovieStars score={score} />
      <span className="score-count">{count} Reviews</span>
    </div>
  )
}

export default MovieScore
