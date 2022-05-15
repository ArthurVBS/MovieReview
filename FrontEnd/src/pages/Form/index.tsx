import { Link } from 'react-router-dom'
import './styles.css'

const Form: React.FC = () => {
  const movie = {
    id: 1,
    image: 'https://www.themoviedb.org/t/p/w500_and_h282_face/lOr9NKxh4vMweufMOUDJjJhCRHW.jpg',
    title: 'WandaVision',
    count: 3,
    score: 3.5
  }

  return (
    <section className='card-container'>
      <img className='card-image' src={movie.image} alt={movie.title} />
      <div className='card-content-bottom'>
        <h3>{movie.title}</h3>
        <form>
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

export default Form
