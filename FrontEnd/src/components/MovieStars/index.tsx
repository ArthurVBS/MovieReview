import { Container } from './styles'

type Props = {
  score: number
}

type StarProps = {
  fill: number
}

const getFills = (score: number) => {
  const fills = [0, 0, 0, 0, 0]

  const integerPart = Math.floor(score)

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1
  }

  const diff = score - integerPart
  if (diff > 0) {
    fills[integerPart] = 0.5
  }

  return fills
}

const Star: React.FC<StarProps> = ({ fill }: StarProps) => {
  if (fill === 0) {
    return <i className='far fa-star'></i> //Empty
  }
  else if (fill === 0.5) {
    return <i className='fas fa-star-half-alt'></i> //Half
  }
  else {
    return <i className='fas fa-star'></i> //Full
  }
}

const MovieStars: React.FC<Props> = ({ score }: Props) => {

  const fills = getFills(score)

  return (
    <Container>
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />
    </Container>
  )
}

export default MovieStars
