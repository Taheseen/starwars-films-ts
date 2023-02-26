import { useRecoilValue } from 'recoil'
import { searchResultsState } from '../../state/filmState'
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
type Props = {
  onSelect: (id: number) => void
}

const SearchResults = ({ onSelect }: Props) => {
    const searchData = useRecoilValue(searchResultsState)
    return (
        <Row className='m-5'>
        {searchData.map(film => ( 
          <Card key={film.title} style={{ width: '33rem'}} className="m-2 bg-black" onClick={() => onSelect(film.episode_id)} >
            {/* <Card.Img variant="top" src="{film.url}" /> */}
            <Card.Body>
              <Card.Title>{film.title}</Card.Title>
              <Card.Text><span>Director:</span> {film.director}</Card.Text>
              <Card.Text><span>Producer:</span> {film.producer}</Card.Text>
              <Card.Text><span>Release Date:</span> {film.release_date}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        </Row>
    )
} 

export default SearchResults;