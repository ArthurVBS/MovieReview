import { Link } from "react-router-dom"
import { Movie } from "../../types/movie"
import MovieScore from "../MovieScore"

type Props = {
  movie: Movie
}

const MovieCard = ( {movie} : Props) => {
  return (
    <div className="card-container">
      <img className="card-image" src={movie.image} alt={movie.title} />
      <div className="card-content-bottom">
        <h3>{movie.title}</h3>
        <MovieScore count={movie.count} score={movie.score} />
        <button className="card-button"><Link to={`/form/${movie.id}`}>Rate</Link></button>
      </div>
    </div>
  )
}

export default MovieCard
