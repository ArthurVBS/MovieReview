import { useEffect } from 'react'
import Aos from 'aos'
import { MoviePage } from '../../types/movie'
import { Button, Container, Span } from './styles'

type Props = {
  page: MoviePage,
  onChange: Function
}

const Pagination: React.FC<Props> = ({ page, onChange }: Props) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <Container>
      <Button data-aos="fade-right" disabled={page.first}
        onClick={() => onChange(page.number - 1)}
      >
        <i className="fas fa-angle-left"></i>
      </Button>

      <Span>{`${page.number + 1} to ${page.totalPages}`}</Span>

      <Button data-aos="fade-left" disabled={page.last}
        onClick={() => onChange(page.number + 1)}
      >
        <i className="fas fa-angle-right"></i>
      </Button>
    </Container>
  )
}

export default Pagination
