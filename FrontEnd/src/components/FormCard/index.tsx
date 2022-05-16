import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Movie } from '../../types/movie'
import { BASE_URL } from '../../utils/request'
import validateEmail from '../../utils/validate'
import './styles.css'

type Props = {
  movieId: String
}

const FormCard = ({ movieId }: Props) => {

  const navigate = useNavigate()

  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`)
      .then(response => {
        setMovie(response.data)
      })
  }, [movieId])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    const email = (event.target as any).email.value
    const score = (event.target as any).score.value

    if (!validateEmail(email)) {
      return
    }

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/scores',
      data: {
        email: email,
        movieId: movieId,
        score: score
      }
    }

    axios(config)
      .then(response => {
        navigate("/")
      })
  }

  return (
    <section className='card-container'>
      <img className='card-image' src={movie?.image} alt={movie?.title} />
      <div className='card-content-bottom'>
        <h3>{movie?.title}</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Type your email address</label>
            <input type="email" name="f-email" id="email" required />
          </div>

          <div>
            <label htmlFor="score">Rate the movie</label>
            <select name="f-score" id="score" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button className='card-button' type="submit">Submit</button>
        </form>
        <button className='card-button'><Link to='/'>Cancel</Link></button>
      </div>
    </section>
  )
}

export default FormCard
