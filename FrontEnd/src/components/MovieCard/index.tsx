import { Link } from "react-router-dom"
import MovieScore from "../MovieScore"

const MovieCard: React.FC = () => {
  const movie = {
    id: 1,
    image: 'https://www.themoviedb.org/t/p/w500_and_h282_face/lOr9NKxh4vMweufMOUDJjJhCRHW.jpg',
    title: 'WandaVision',
    count: 3,
    score: 3.5
  }

  return (
    <div className="card-container">
      <img className="card-image" src={movie.image} alt={movie.title} />
      <div className="card-content-bottom">
        <h3>{movie.title}</h3>
        <MovieScore />
        <button className="card-button"><Link to={`/form/${movie.id}`}>Rate</Link></button>
      </div>
    </div>
  )
}

export default MovieCard
