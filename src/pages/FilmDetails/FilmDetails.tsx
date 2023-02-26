import { useParams } from 'react-router-dom'
import { filmDetailsState } from '../../state/filmState'
import { useRecoilValue } from 'recoil'
import Card from 'react-bootstrap/Card';

function FilmDetails() {
  const params = useParams()
  const id: string = params.id || '';
  const filmDetails = useRecoilValue(filmDetailsState(id));
  if (!filmDetails) {
    return null
  }
  return (
    <Card className='bg-black'>
      <Card.Body>
        <Card.Title>{filmDetails.title}</Card.Title>
        <Card.Text><span>Director:</span> {filmDetails.director}</Card.Text>
        <Card.Text><span>Producer:</span> {filmDetails.producer}</Card.Text>
        <Card.Text><span>Release Date:</span> {filmDetails.release_date}</Card.Text>
        <Card.Text><span>Opening Crawl:</span> {filmDetails.opening_crawl}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  )
}

export default FilmDetails