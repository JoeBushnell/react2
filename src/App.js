import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function App() {
  const [movies, setMovies] = useState(null);

  useEffect(async () => {
    
    async function getData() {
      const res = await fetch("https://imdb-api.com/en/API/Top250Movies/k_yoz6v0f4");
      const data = await res.json();
      localStorage.setItem('top250', JSON.stringify(data));
       
      setMovies(data);
    }

    const top250 = localStorage.getItem('top250')
    if (!top250){
      getData();
    }
    else {
      setMovies(JSON.parse(top250));
    }
    
    
  }, []);
  return (
    <div className="App">
      <h1>Top 250 Movies</h1>
      {movies && (
        <div style={{display: 'flex', flexWrap: 'wrap' }} className="movies">
          {movies?.items.map((movie, index) => (
            <Movie index={index} movie={movie}/>
          ))}
        </div>
      )}
    </div>
  );


}
function Movie(props) {
  return (
    <div key={props.index}>
      <Card style={{ width: '10rem', margin: '40px'}}>
        <Card.Img style={{ }} variant="top" src={props.movie.image} />
        <Card.Body>
          <Card.Title>{props.movie.title} ({props.movie.year})</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App;
