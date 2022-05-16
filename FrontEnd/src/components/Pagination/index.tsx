import { MoviePage } from '../../types/movie'
import './styles.css'

type Props = {
  page: MoviePage,
  onChange : Function
}

const Pagination = ({ page, onChange }: Props) => {
  return (
    <div className="pagination-container">
      <button className="pagination-button" disabled={page.first}
        onClick={() => onChange(page.number - 1)}
      >
        <i className="fas fa-angle-left"></i>
      </button>

      <span>{`${page.number + 1} to ${page.totalPages}`}</span>

      <button className="pagination-button" disabled={page.last}
        onClick={() => onChange(page.number + 1)}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  )
}

export default Pagination
