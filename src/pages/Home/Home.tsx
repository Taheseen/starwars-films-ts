import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchFilm from '../../components/SearchFilm/SearchFilm'
import SearchResults from '../../components/SearchResults/SearchResults';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Header from '../../components/Header/Header';

const Search = () => {
  const navigate = useNavigate()

  return (
      <Row className="justify-content-md-center searchBar m-5">
        <SearchFilm/>
        <Suspense fallback={null}>
          <SearchResults onSelect={id => navigate(`/${id}`)} />
          </Suspense>
      </Row>
    )
}

export default Search
