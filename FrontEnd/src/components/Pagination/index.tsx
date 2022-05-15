import './styles.css'

const Pagination: React.FC = () => {
  return (
    <div className="pagination-container">
      <button className="pagination-button" disabled={true} >
        <i className="fas fa-angle-left"></i>
      </button>

      <span>{`${1} to ${4}`}</span>

      <button className="pagination-button" disabled={false} >
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  )
}

export default Pagination
