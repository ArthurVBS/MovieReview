import { MoviePage } from '../../types/movie'
import { Button, Container, Span } from './styles'

type Props = {
  page: MoviePage,
  onChange : Function
}

const Pagination = ({ page, onChange }: Props) => {
  return (
    <Container>
      <Button disabled={page.first}
        onClick={() => onChange(page.number - 1)}
      >
        <i className="fas fa-angle-left"></i>
      </Button>

      <Span>{`${page.number + 1} to ${page.totalPages}`}</Span>

      <Button disabled={page.last}
        onClick={() => onChange(page.number + 1)}
      >
        <i className="fas fa-angle-right"></i>
      </Button>
    </Container>
  )
}

export default Pagination
