import { Container } from 'react-bootstrap';
import  PageRouter  from './routes/index';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App p-5">
      <Container fluid>
        <Header />
          <div className='m-5'>
            <PageRouter />
          </div>
      </Container>
    </div>
  );
}

export default App;
