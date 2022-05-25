import Aos from 'aos'
import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Movie } from '../../types/movie'
import { BASE_URL } from '../../utils/request'
import validateEmail from '../../utils/validate'
import { Button, Container, Box, Form, Image, Input, Label, Select, Title } from './styles'

type Props = {
  movieId: String
}

const FormCard: React.FC<Props> = ({ movieId }: Props) => {
  const navigate = useNavigate()

  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`)
      .then(response => {
        setMovie(response.data)
      })
      .catch((err) => {
        console.log('Waiting for Backend' + err)
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
    <Container data-aos="fade-right">
      <Image src={movie?.image} alt={movie?.title} />
      <Box>
        <Title>{movie?.title}</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Type your email address</Label>
            <Input type="email" name="f-email" id="email" required />
          </div>

          <div>
            <Label htmlFor="score">Rate the movie</Label>
            <Select name="f-score" id="score" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
          </div>

          <Button type="submit">Submit</Button>
        </Form>
        <Button><Link to='/'>Cancel</Link></Button>
      </Box>
    </Container>
  )
}

export default FormCard
