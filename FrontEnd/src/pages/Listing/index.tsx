import axios from 'axios'
import { useState, useEffect } from 'react'
import { MoviePage } from '../../types/movie'
import { BASE_URL } from '../../utils/request'
import Modal from '../../components/Modal'
import MovieContainer from '../../components/MovieContainer'
import Pagination from '../../components/Pagination'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Listing: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<Number>(0)

  const [connected, setConnected] = useState<Boolean>(false)

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  })

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)

      .then(response => {
        const data = response.data as MoviePage
        setPage(data)
        setConnected(true)
      })

      .catch((err) => {
        console.log(`Waiting for Backend ${err}`)
      })
  }, [pageNumber])

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber)
  }

  const renderListing = () => {
    return (
      <>
        <Header />
        <Pagination page={page} onChange={handlePageChange} />
        <MovieContainer page={page} />
        <Footer />
      </>
    )
  }

  const renderError = () => {
    return (
      <Modal title='Waiting for Backend...' message='Please, come back in a few minutes' />
    )
  }

  return connected ? renderListing() : renderError()
}

export default Listing
